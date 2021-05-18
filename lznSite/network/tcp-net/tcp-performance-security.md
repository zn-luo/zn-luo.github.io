# tcp握手的性能优化与安全


## 服务端三次握后流程图

![server handshake](/imgs/network/tcp/server-handshake.png)

* 客户端发送的SYN数据包到达服务器后，tcp协议栈的实现会将连接套接字插入SYN队列中，同时给客户端回复SYN+ACK数据包，此时用netstat可以看到tcp连接处于SYN_RCVD状态

* 当客户端响应的ACK数据包到达服务器后，tcp协议栈的实现会将连接套接字从SYN队列中移出，然后插入ACCEPT队列，此时用netstat可以看到tcp连接处于ESTABLISED状态

* 应用程序如nginx就可以调用accept将连接套接字取出来读数据

* 所以SYN队列与ACCEPT队列的大小是负载的体现，高负载的机器应该调大SYS队列与ACCEPT队列

## 高负载的设置

* 应用层的connect超时时间调整  
* 操作系统内核设置
    * 服务端SYN_RCV状态
        * net.ipv4.tcp_max_syn_backlog 参数可以调整SYN队列的大小，即SYN_RCVD状态的连接数
        * net.ipv4.tcp_synack_retries 参数可以设置被动建立连接时，发送SYN/ACK的重试次数
    * 客户端SYN_SENT状态
        * net.ipv4.tcp_syn_retries 参数可以设置主动建立连接时，发SYN的重试次数
        * net.ipv4.ip_local_port_range 参数可以设置建立连接时的本地端口可用范围
    * ACCEPT队列的设置
        * net.core.somaxconn 参数可以设置最大的连接数
        * 使用listen函数，可以设置backlog参数，内核会根据传入的backlog参数与系统参数somaxconn比较，取小值

## TCP Fast Open

打开tcp的fast open功能可以降低时延：  
![fast open](/imgs/network/tcp/fast-open.png)

如上图所示，客户端在第一次发起请求时，正常与server请求连接,  
server会生成一个cookie,给客户端回SYN+ACK时会同时带上这个cookie,  
客户端收到后会缓存这个cookie，然后正常给server端响应ACK与请求GET，  
此次的请求需要正常的三次握手连接。  
客户端第二次发起请求时，就可以跳过三次握手，  
因为缓存的cookie中维护了上次连接中相关的信息，如窗口,时间戳等tcp信息。  
将SYN,cookie，http get 一起发给server便可省去了三次握手的时延。  


* net.ipv4.tcp_fastopen: 系统开启TFO功能
    * 0：关闭
    * 1: 作为客户端时可以使用TFO
    * 2: 作为服务端时可以使用TFO
    * 3: 无论作为客户端还是服务器，都可以使用TFO

## SYN攻击的应对

SYN攻击：是指攻击者短时间内伪造不同IP地址的SYN报文，快速占满backlog队列，使服务器不能为正常用户服务

调整系统参数：  
* net.core.netdev_max_backlog: 此参数可设置接收自网卡、但未被内核协议栈处理的报文队列长度
* net.ipv4.tcp_max_syn_backlog: 设置SYN_RCVD状态连接的最大个数
* net.ipv4.tcp_abort_on_overflow: 设置当超出处理能力时，对新来的SYN请求直接回RST，丢弃连接
* net.ipv4.tcp_syncookies: 设置此参数为1开启此功能
    * 开启后当SYN队列满后，新的SYN不进入队列，计算出cookie再以SYN+ACK中的序列号返回客户端，  
    正常客户端发报文时，服务器根据报文中携带的cookie重新恢复连接。由于cookie占用序列号空间，  
    导致此时所有TCP可选功能失效，如扩充窗口、时间戳等。