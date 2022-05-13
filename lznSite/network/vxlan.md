# [VXLAN](https://support.huawei.com/enterprise/zh/doc/EDOC1100087027)

VXLAN全称叫Virtual eXtentible Local Area Network, 即虚拟扩展局域网。 是由IETF定义的NVO3(Network Virtualization over Layer 3)标准技术之一, 是对VLAN的一种扩展。VXLAN的特点是将L2的以太帧封装到UDP报文中(即L2 over L4),并在L3网络中传输。

VXLAN逻辑上是一种隧道技术，在源网络设备与目的网络设备之间的IP网络上，建立一条逻辑隧道，将用户侧报文经过特定的封装后通过这条隧道转发。从用户的角度来看，接入网络的服务器就像是连接到了一个虚拟的二层交换机的不同端口上，可以方便地通信。

## VXLAN需求场景

* 服务器虚拟化后的虚拟机动态迁移，需要提供一个无障碍接入的网络
* 数据中心规模越发庞大，租户数量激增，需要网络提供隔离海量租户的能力

## VXLAN报文格式

![VXLAN报文格式](/imgs/network/vxlan/VXLAN报文格式.png)  
如上图所示，VTEP对VM发送的原始以太帧(Original L2 Frame)进行封装:

* VXLAN Header  
  在原始以太帧数据包基础上增加8字节的VXLAN头，包含24bit的VNI字段，用来定义VXLAN网络中不同的租户。还有8bit的VXLAN Flags和两个保留字段(分别为24bit和8bit)
* UDP Header  
  VXLAN头和原始以太帧一起作为UDP的数据。UDP头中的目的端口号(VXLAN Port)固定为4789,源端口号(UDP Src. Port)是原始以太帧通过哈希算法计算后的值。
* Outer IP Header  
  封装外层IP头。其中，源IP地址(Src. IP)为源VM所属VTEP的IP地址，目的IP地址(Dst. IP)为目的VM所属VTEP的IP地址。
* Outer MAC Header  
  封装外层以太头。其中源MAC地址(Src. MAC Addr.)为源VM所属VTEP的MAC地址，目的MAC地址(Dst. MAC Addr.)为到达目的VTEP的路径中下一跳设备的MAC地址。
