# 单机容器网络的实现原理

容器在每台宿主机里都是被隔离在它自己的Network Namespace当中的

## Linux容器网络栈

主要包括：

* 网卡(Network Interface)
* 回环设备(Loopback Device)
* 路由表(Routing Table)
* Iptables规则
