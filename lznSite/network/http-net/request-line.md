# 请求行
请求行(request line)是请求报文中的一个重要组成部分，位于报文体的顶部。

## 请求行组成部分

request-line =  method + request-target + http-version CRLF

* method: 指明了操作的目的
* request-target
* http-version
* CRLF

### request-target 的四种格式

* origin-form: absolute-path[?query]  
  向源服务器即实际产生内容的服务器发起的请求，path为空时必须传递/
* absolute-form: 需传递完整的URI  
  仅用于向正向代理proxy发起请求时使用
* authority-form: authority  
  仅用于CONNECT方法，一般建立了VPN隧道时才会使用
* asterisk-form： 可以仅传*号
  仅用于OPTIONS方法

### [HTTP-version](https://www.w3.org/Protocols/History.html)

* HTTP/0.9: 只支持GET方法
* HTTP/1.0：RFC195,1996, 常见使用于代理服务器(如Nginx默认配置)
* HTTP/1.1: RFC2616,1999
* HTTP/2.0: 2015.5 正式发布

### 常见方法(RFC7231)

* GET: 主要的获取信息方法，大量的性能优化都针对该方法，是幂等方法
* HEAD: 类似GET方法，但服务器不发送BODY,用于获取HEAD元数据，是幂等方法
* POST: 常用于提交HTML FORM表单，新增资源等
* PUT: 更新资源，带条件时是幂等方法
* DELETE: 删除资源，是幂等方法
* CONNECT: 用于建立TUNNEL隧道
* OPTIONS: 显示服务器对访问资源支持的方法，是幂等方法
* TRACE: 回显服务器收到的请求，用于定位问题。有安全风险,所以nginx0.5.17版本后不再支持TRACE方法，都会返回405状态码

### 用于文档管理的WEBDAV方法(RFC2518)

* PROPFIND: 从Web资源中检索以XML格式存储的属性。它也被重载，以允许一个检索远程系统的集合结构(也叫目录层次结构)
* PROPPATCH: 在单个原子性动作中更改和删除资源的多个属性
* MKCOL: 创建集合或者目录
* COPY: 将资源从一个URI复制到另一个URI
* MOVE: 将资源从一个URI移动到另一个URI
* LOCK: 锁定一个资源。WebDAV支持共享锁和互斥锁
* UNLOCK: 解除资源的锁定