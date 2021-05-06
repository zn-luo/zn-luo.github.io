# 长短连接的管理

## HTTP连接的常见流程

* 浏览器解析出主机名
* 浏览器从DNS查询到这个主机名的IP地址
* 浏览器解析获得端口号,https端口号为443，http端口号为80
* 浏览器解析到的服务器IP地址对应的端口发起连接
* 浏览器向服务器发送一条HTTP GET报文
* 浏览器从服务器读取HTTP响应服文
* 浏览器关闭连接

## 从TCP编程上看HTTP请求处理

![tcp连接图](/imgs/network/http/tcp连接.jpg)

## 短连接与长连接的区别

短连接与长连接的区别由Connection头部实现

* 长连接
    * 客户端请求长连接设置请求头： Connection:Keep-Alive
    * 服务器响应支持连接设置响应头： Connection:Keep-Alive
    * HTTP/1.1默认支持长连接，设置Connection:Keep-Alive无意义
* 明确不支持长连接
    * 设置头部， Connection:Close