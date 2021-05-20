# 数据传输与MSS分段

tcp是面向连接的字节流协议，由于网络层和数据链路层发送报文时所使用的内存有限，所以tcp需要将从应用层收到的字节流拆分成多个报文段。

## 数据传输的流向

应用层编程数据传输的流向：  
![应用层传输流向](/imgs/network/tcp/tcp-application-transmission.png)
如图所示，应用程序调用write向目标发送数据，调用read来接收数据  

操作系统层数据传输的流向：  
![系统层传输流向](/imgs/network/tcp/tcp-system-transmission.png)

## MSS(Max Segment Size)

### 定义 
MSS是指TCP数据包每次能够传输的量大数据分段，它并不包含TCP头部的大小。定义参见RFC879

### 设置MSS的目的
* 尽量让每个Segment 报文段携带的数据多一些，以减少头部空间占用比率
* 防止Segment被设备的IP层基于MTU拆分

### 默认值

MSS默认值为536字节。  
IP层的MTU默认值为576字节，IP头部为20字节。  
TCP头部为20字节。
所以 536 = 576 - 20 - 20

### 分类
* 发送方最大报文段叫SMSS：SENDER MAXIMUM SEGMENT SIZE
* 接收方最大报文段叫RMSS: RECEIVER MAXIMUM SEGMENT SIZE 