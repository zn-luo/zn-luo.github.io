# [TCP keepalive](https://zh.wikipedia.org/wiki/Keepalive)

TCP是面向连接的，两端的应用程序能正常地进行收发数据时则可以判断对端程序正常存活。当长时间没有数据传输时，则需要一种机制来保证tcp的连接是一直存活的，它就是tcp keepalive。所以tcp协议的连接被分为长连接和短连接，短连接的情况下，数据传输完成后便会主动关闭连接，及时释放资源。  
长连接情况下，进行数据传输后，会有很长一段时间没有数据交互，在这段空闲的时间段内，两端的socket连接还是保持着并没有释放。此时客户端有可能会出现crash，断电、重启、死机，或是遇到中间路由网络故障等情况，而服务端的TCP连接并未正常释放，因为对端的意外故障无法正常地发出断开连接的通知，所以会继续维护当前socket连接。如果频繁出现这种情况的话会造成系统资源的消耗浪费。而TCP的keepalive探测机制能够做到检测对端连接是否正常存活。  
如图1所示，TCP Keepalive探测包通讯:  
![tcp keepalive探测抓包](/imgs/network/tcp-keepalive.png)

## TCP keepalive工作原理

当一条TCP连接经过三次握手建立通信之后，启用TCP keepalive的一端会启动一个计时器，当计时器的值减到0后，便会发出一个TCP探测包。这个探测包被封装成ACK包，由于协议规范有规定，保活探测包没有包含其它数据，但包含1个无意义的字节(0x0)，如下图2所示，Acknowledgment被置1，Data为00。探测包的Seq号与上个包是一样的，如图1所示。

探测包图2  
![tcp keepalive探测包](/imgs/network/tcp-keepalive-2.png)

## linux系统的三个重要参数

tcp keepalive默认是关闭的，要启用tcp keepalive，需要设置SO_KEEPALIVE套接字选项。

1. tcp_keepalive_time 设置每XX秒发送一次探测包，即最后一次数据传输结束到第一个保活探测包发送的时间间隔，即上面提到的计时器的值，linux系统默认值是7200s。
2. tcp_keepalive_intvl 当经过tcp_keepalive_time空间时间而发送探测包后，没有收到对方的确认，则以tcp_keepalive_intvl为空闲时间间隔发送探测包，linux系统默认值是75s
3. tcp_keepalive_probes 设置保活探测包发送的次数，linux系统默认值为9次

## python Demo

```python
#!/usr/bin/env python
# -*- coding: utf-8 -*-
import time
import socket

class tcpKeepalive(object):
    def __init__(self,**kwargs):
      self.sck = socket.socket(**kwargs)
      self.enable_keepalive()

    def enable_keepalive(self):
      """启用keepalive"""
      self.sck.setsockopt(socket.SOL_SOCKET, socket.SO_KEEPALIVE, 1)

    def set_keepalive_time(self, t=15):
      """设置每隔t秒发送一次探测报文"""
      self.sck.setsockopt(socket.SOL_TCP, socket.TCP_KEEPIDLE, t)

    def set_intvl(self, intvl=1):
      """设置当没有收到探测回应时，每隔intvl秒发送一次探测报文"""
      self.sck.setsockopt(socket.SOL_TCP, socket.TCP_KEEPINTVL, intvl)

    def set_probes(self,probes=6):
      """设置重发探测报文数量达到probes时，还未得到ACK反馈，则停止"""
      self.sck.setsockopt(socket.SOL_TCP, socket.TCP_KEEPCNT, probes)

    def set_socket_default(self):
      self.set_keepalive_time()
      self.set_intvl()
      self.set_probes()

    def connect(self, host='test.tcl-move.com', port=9991):
      self.set_socket_default()
      self.sck.connect((host, port)) 
      time.sleep(150)

if __name__ == "__main__":
    tcpKeepalive().connect()
```
