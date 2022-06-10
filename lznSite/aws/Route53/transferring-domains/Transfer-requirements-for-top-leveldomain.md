# 顶级域名的转移要求

大多数域名注册商有转移要求，主要是防止欺诈域名拥有者不断地转移域名。各个域名注册商要求各不相同，主要有以下几个：

* 在当前域名商注册时间至少超过60天，或者从其它域名注册商转到当前注册商的时间已经超过60天
* 如果域名注册过期，必须恢复，且域名转移时距离恢复的时间至少要超过60天
* 域名不能处于以下任何一种状态：
  * clientTransferProhibited
  * pendingDelete
  * pendingTransfer
  * redemptionPeriod
  * serverTransferProhibited
* 顶级域名的信息处于修改状态是不被允许转移的，如：域名拥有者处于修改当中
