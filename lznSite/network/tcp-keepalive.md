# [TCP keepalive](https://zh.wikipedia.org/wiki/Keepalive)

TCP是面向连接的，两端的应用程序能正常地进行收发数据时则可以判断对端程序正常存活。当长时间没有数据传输时，则需要一种机制来保证tcp的连接是一直存活的，它就是tcp keepalive。所以tcp协议的连接被分为长连接和短连接，短连接的情况下，数据传输完成后便会主动关闭连接，及时释放资源。  
长连接情况下，进行数据传输后，会有很长一段时间没有数据交互，在这段空闲的时间段内，两端的socket连接还是保持着并没有释放。此时客户端有可能会出现crash，断电、重启、死机，或是遇到中间路由网络故障等情况，而服务端的TCP连接并未正常释放，因为对端的意外故障无法正常地发出断开连接的通知，所以会继续维护当前socket连接。如果频繁出现这种情况的话会造成系统资源的消耗浪费。而TCP的keepalive探测机制能够做到检测对端连接是否正常存活。  
如图1所示，TCP Keepalive探测包通讯:  
![tcp keepalive探测抓包](/imgs/network/tcp-keepalive.png)

## TCP keepalive工作原理

当一条TCP连接经过三次握手建立通信之后，启用TCP keepalive的一端会启动一个计时器，当计时器的值减到0后，便会发出一个TCP探测包。这个探测包被封装成纯ACK包，协议规范规定保活探测包不应该包含其它数据，可以包含1个意义的字节(如0x0)，如下图2所示。探测包的Seq号与上个包是一样的，如图1所示。

探测包图2  
![tcp keepalive探测包](/imgs/network/tcp-keepalive-2.png)