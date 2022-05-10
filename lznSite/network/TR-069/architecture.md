# 结构

## 协议组件

CPE广域网管理协议包含几个对该协议独有的组件，并使用多个标准协议。除非另有规定，否则CPE和ACS必须遵守底层标准协议的要求。

协议栈：

* CPE/ACS Management Application
* RPC Methods
* SOAP
* HTTP
* SSL/TLS
* TCP/IP

协议层概述:
|        协议层        | 描述  |
|  ------------------  | ----  |
| CPE/ACS Application  | 应用程序分别在CPE和ACS上使用CPE广域网管理协议。应用程序是本地化定义的，并未指定为CPE广域网管理协议的一部分。|
|      RPC Methods     | CPE广域网管理协议定义的特定RPC方法。这些方法在TR-069_Amendment-6.pdf的附录A中有详细说明 |
|         SOAP         | 使用基于XML的标准语法来对远程过程调用进行编码。SOAP 1.1 查看 http://www.w3.org/TR/2000/NOTESOAP-20000508 |
|         HTTP         | HTTP 1.1 查看 http://www.ietf.org/rfc/rfc7231.txt, http://www.ietf.org/rfc/rfc7235.txt|
|          TLS         | 标准的网络传输层安全协议。 TLS 1.2 查看 http://www.ietf.org/rfc/rfc5246.txt|
|        TCP/IP        | 标准的TCP/IP。 |

## 安全机制

CPE广域网管理协议旨在在使用它的交互中实现高度安全性。CPE广域网管理协议旨在防止篡改CPE和ACS之间发生的事务，为这些事务提供机密性，并允许各种级别的身份验证。  

该协议包含以下安全机制:

* 该协议支持使用TLS进行CPE和ACS之间的通信传输。这提供了交易机密性、数据完整性，并允许在CPE和ACS之间进行基于证书的身份验证。
* HTTP层提供了一种基于共享密钥的CPE和ACS身份验证的替代方法。需要注意的是该协议未指定CPE和ACS如何学习共享机密。

## 结构组件

## 参数

RPC方法规范(见修定文档附件A)定义了一种通用机制，ACS可以通过该机制读取或写入参数以配置CPE并监控CPE状态和统计信息。各类CPE的参数在单独的文档中定义。以下标准定义了TR-069数据模型:

* TR-098：TR-069的互联网网关设备数据模型
* TR-104: VoIP CPE的配置参数
* TR-135: 启用TR-069 STB的数据模型
* TR-140: TR-069 支持存储服务的设备的数据模型
* TR-143: 启用网络吞吐量性能测试和统计监控
* TR-157: CWMP的组件对象
* TR-181: TR-069的设备数据模型
* TR-196: Femto接入点服务数据模型

每个参数由一个name-value对组成。名字标识特定的参数。参数值可以是几种定义的数据类型之一。

参数可以定义为只读或读写。只读参数可用于允许ACS确定特定CPE特性、观察CPE的当前状态或收集统计信息。可写参数允许ACS自定义CPE操作的各个方面。