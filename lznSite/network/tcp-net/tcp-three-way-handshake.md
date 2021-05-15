# TCP三次握手

## 握手的目的

* 同步Sequence序列号
    * 初始序列号ISN(Initial Sequence Number)
* 交换TCP通讯参数
    * 如MSS、窗口比例因子、选择性确认、指定检验和算法

## 三次握手流程图

![3handshake](/imgs/network/tcp/3handshake.png)

* SYN: 同步
* ACK：确认

SYN报文:  
如下图所示在syn报文中序列号是初始序列号，FLAG标志位的SYN会被置1   
![syn报文](/imgs/network/tcp/syn-mss.JPG)

SYN+ACK报文:  
如下图所示在syn+ack的报文中序列号为server的初始序列号，确认号为收到的client的序列号加1，FLAG标志位的ACK和SYN都会被置为1
![syn+ack报文](/imgs/network/tcp/syn+ack-mss.jpg)

ACK报文:  
如下图所示在ack报文中，确认号为收到的server的序列号加1，FLAG标志位的ACK会被置为1  
![ack报文](/imgs/network/tcp/ack-mss.jpg)

### 三次握手流程的状态

* CLOSED
* LISTEN
* SYN-SENT
* SYN-RECEIVED
* ESTABLISHED

如下图所示三次握手会有如下的状态变化：  
![handshake state](/imgs/network/tcp/3handshake-state.png)

## TCB

TCB：Transmission Control Block,保存连接使用的源端口、目的端口、目的IP、序号、应答序号、对方窗口大小、己方窗口大小、tcp状态、tcp输入/输出队列、应用层输出队列、tcp的重传有关变量等