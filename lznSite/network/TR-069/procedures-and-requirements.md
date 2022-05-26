# 程序和要求

本节引用了构成 CPE WAN 管理协议一部分的许多标准和其他规范。除非另有规定，CPE 和 ACS 必须遵守这些参考规范的要求。

## ACS 发现

CPE WAN 管理协议定义了以下机制，CPE 可以使用这些机制来发现其关联 ACS 的地址:

1. CPE可以在本地为每个CWMP端点配置ACS的URL。例如，这可以通过局域网端的CPE自动配置协议来完成。如有必要，CPE将使用DNS 从 URL 的主机名部分解析 ACS 的 IP 地址。
2. 作为IP层自动配置的一部分，可以将接入网上的DHCP服务器配置为将ACS URL作为DHCP选项包含在内。如有必要，CPE将使用DNS从 URL 的主机名部分解析ACS的IP地址。在这种情况下，可以使用附加的DHCP选项来设置：
    * ProvisioningCode，可用于指示主要服务提供商和ACS的其他供应信息。
    * CWMPRetryMinimumWaitInterval，可以用来设置CWMP会话重试最小等待间隔的初始值。
    * CWMPRetryIntervalMultiplier，可用于设置CWMP会话重试间隔乘数的初始值。

在 DHCPv4 Vendor Class Identifier（选项 60）、DHCPv4 V-I Vendor Class Option（选项 124）或 DHCPv6 Vendor Class（选项 16）vendor-class-data 项中，CPE通过包含字符串“dslforum.org”(全小写)向DHCP服务器标识自己支持此方法。  

CPE可以在DHCPv4参数请求列表(选项55)中包含DHCPv4选项43或DHCPv4选项125，以表示对选项43或选项125的支持和请求。如果 CPE 不以这种方式使用选项55，则服务器可以假定它支持并请求选项43（而不是选项125）。类似地，CPE可以在DHCPv6选项请求选项(选项6)中包含DHCPv6选项17。  
