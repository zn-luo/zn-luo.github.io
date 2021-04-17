# 单机容器网络的实现原理

容器在每台宿主机里都是被隔离在它自己的Network Namespace当中的,所以每个被隔离的容器都有自己的网络栈。  
对于一个进程来说，这些要素就是构成了它发起和响应网络请求的基本环境。  

## Linux容器网络栈主要包括

* 网卡(Network Interface)
* 回环设备(Loopback Device)
* 路由表(Routing Table)
* Iptables规则

## docker0网桥

网桥(Bridge)在Linux中能够充当网络设备，起到虚拟交换机的作用。它是一个工作在数据链路层(Data Link)的设备，主要功能是根据MAC地址学习来将数据包转发到网桥的不同端口上。  
Docker项目默认会在宿主机上创建一个名叫docker0的网桥。连接到相同网桥的容器能够进行通信。

## Veth Pair设备

Veth Pair起到连接容器和网桥的作用。它被创建出来后，总是以两张虚拟网卡(Veth Peer)的形式成对出现的。从其中一个网卡发出的数据包，可以直接出现在与它对应的另一张网卡上，哪怕这两个网卡在不同的Network Namespace里。
