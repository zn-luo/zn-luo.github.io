# [TCP keepalive](https://zh.wikipedia.org/wiki/Keepalive)

TCP是面向连接的，两端的应用程序能正常地进行收发数据时则可以判断对端程序正常存活。当长时间没有数据传输时，则需要一种机制来保证tcp的连接是一直存活的，它就是tcp keepalive。所以tcp协议的连接被分为长连接和短连接，短连接的情况下，数据传输完成后便会主动关闭连接，及时释放资源。  
