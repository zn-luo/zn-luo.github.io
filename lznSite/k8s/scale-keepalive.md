# 长连接服务新扩容的pod无法接收请求

在当今的互联网时代，有许多应用场景有效率的要求，需要使用长连接的方式来实现请求。如操作过于频繁，点对点通讯，连接数不能太多等业务场景，一般都会采用长连接。客户端使用长连接请求服务端的情况下，k8s的自动扩容会失效。  
导致新扩容的POD没有新请求进来的原因是客户端的长连接一直保留在老的Pod容器中，k8s虽然根据负载扩容了副本数量，实际的请求负载还是没有被路由到新扩容的POD当中，也即会导致k8s按照步长扩容第一批POD后就会停止扩容操作，所以老的POD会继续高负荷运行，也就是说K8S的自动扩容失效了。

## 解决方法

本次实验的解决方法是学习腾讯云原生架构师roc的[解决思路](https://tencentcloudcontainerteam.github.io/tke-handbook/best-practice/scale-keepalive-service.html)。  

roc参考了nginx的keepalive设计原理，nginx的keepalive_requests配置项设定了一个TCP连接能处理的最大请求数，当达到设定值后服务端会在http的Header头标记"Connection:close"，通知客户端处理完当前的请求后关闭连接，新的请求需要重新建立TCP连接，所以这个过程不会出现请求失败，同时做到将长连接按需转换为短连接的目的。通过此方法客户端和k8s服务端处理完一批请求后不断地更新TCP连接，自动扩容的新POD能接收到新的连接请求，从而解决了自动扩容失效的问题。  

## 实验示例

### Golang编写的服务端代码

代码借鉴于roc示例，添加了MAX_REQUEST环境变量，便于设置模拟请求数的最大值。

```go
package main

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"net"
	"net/http"
	"os"
	"strconv"
)

//定义计数器counter和计数方法Increment()
type counter int
func (c *counter) Increment() int {
	*c++
	return int(*c)
}

//重新定义net.Listener
type counterListener struct {
	net.Listener
}
//重写net.Listener.Accept(),对接收到的连接注入请求计数器
func (c *counterListener) Accept() (net.Conn, error) {
	conn, err := c.Listener.Accept()
	if err != nil {
		return nil, err
	}
	return &counterConn{Conn: conn}, nil
}

//重新定义net.Conn,注入计数器ct
type counterConn struct {
	net.Conn
	ct counter
}
//重写net.Conn.LocalAddr()，返回本地网络地址的同时返回该连接累计处理过的请求数
func (c *counterConn) LocalAddr() net.Addr {
	return &counterAddr{c.Conn.LocalAddr(), &c.ct}
}

//定义TCP连接计数器,指向连接累计请求的计数器
type counterAddr struct {
	net.Addr
	*counter
}

var requestCount = 0

func main() {
	r := gin.New()
	maxRequest, err := strconv.Atoi(os.Getenv("MAX_REQUEST"))
	if err != nil{
		maxRequest = 0
	}
	if maxRequest != 0 {
		r.Use(func(c *gin.Context) {
			localAddr := c.Request.Context().Value(http.LocalAddrContextKey)
			if ct, ok := localAddr.(interface{ Increment() int }); ok {
				if ct.Increment() >= maxRequest {		//处理请示超过maxRequest时，添加close头让客户端主动断开长连接，重新发起请示
					c.Header("Connection", "close")
				}
			}
			c.Next()
		})
	}

	r.GET("/", func(c *gin.Context) {
		hostName, _ := os.Hostname()
		requestCount ++
		fmt.Println("=================")
		fmt.Printf("request count: %d\n", requestCount)
		fmt.Println("hostname: ", hostName)
		fmt.Printf("%+v\n", c)
		c.Header("Accept-Request-hostname", hostName)
		c.Header("Total-Request", strconv.Itoa(requestCount))
		c.String(200, "plain/text", "test page content!")
	})
	l, err := net.Listen("tcp", ":8080")
	if err != nil {
		panic(err)
	}
	err = http.Serve(&counterListener{l}, r)
	if err != nil {
		panic(err)
	}
}
```

我将此代码构建成docker镜像，可直接拉取使用，jenner/k8s-scale-keepalive:have-tcp-counter  

我的k8s环境是采用kubesphere系统部署管理的，所以会界面显示实验结果。

### k8s长连接扩容失效场景

1. 使用上面代码镜像创建deployment，不设置MAX_REQUEST环境变量
2. 初始部署时副本数设为1，k8s设置自动伸缩阀值，目标cpu用量设置为5%,目标内存用量设置为8M(如下图1所示),模拟场景不需太大的值。
3. 用脚本模拟客户端发起长连接且不断发请求，负载增大，触发扩容，pod由原来的1个扩到2个，如下图1所示。  
  ![k8s扩容1](/imgs/k8s/scale-keepalive/scale-keepalive-1.PNG "图1")
4. 虽然k8s自动扩容了，但实际请求只会被路由到旧的POD当中，如上图所示，旧pod的负载比新pod的负载高，从pod返回的结果(如下图2所示)可以看出，响应全都只是来自于k8s-scale-keepalive-test-v1-6c6dc5cc49-6wcks。  
  ![k8s扩容1结果](/imgs/k8s/scale-keepalive/scale-keepalive-res-1.PNG "图2")

### 增加tcp计数器后k8s长连接扩容生效

1. 使用上面代码镜像创建deployment，设置MAX_REQUEST环境变量为5,即长连接每处理掉5个请求就会通知客户端关闭连接。
2. 初始部署的副本数仍设为1，k8s设置自动伸缩阀值(如下图3所示)
3. 用脚本模拟客户端发起长连接且不断发请求，负载增大，触发扩容，pod由原来的1个扩到2个，如下图3所示。  
  ![k8s扩容2](/imgs/k8s/scale-keepalive/scale-keepalive-2.PNG "图3")
4. 此次k8s自动扩容承载请求生效了，请求会被均匀路由到两个POD当中，如上图3所示，旧pod的负载与新pod的负载接近，从pod返回的结果(如下图4所示)可以看出，响应均匀地来自两个pod分另为k8s-scale-keepalive-test-v1-6575b686b4-w9cfn和k8s-scale-keepalive-test-v1-6575b686b4-5x6tk, pod每处理完5个请求都会通知客户端关闭连接，新请求重新建立连接。  
  ![k8s扩容2结果](/imgs/k8s/scale-keepalive/scale-keepalive-res-2.PNG "图4")

<Vssue :title="$title" :options="{ locale: 'zh' }" />