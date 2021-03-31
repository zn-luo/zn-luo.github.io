# 单机容器网络的实现原理

容器在每台宿主机里都是被隔离在它自己的Network Namespace当中的,所以每个被隔离的容器都有自己的网络栈。  
对于一个进程来说，这些要素就是构成了它发起和响应网络请求的基本环境。  

## Linux容器网络栈

主要包括：

* 网卡(Network Interface)
* 回环设备(Loopback Device)
* 路由表(Routing Table)
* Iptables规则
