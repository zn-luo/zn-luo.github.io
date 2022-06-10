# [域名转移步骤](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/domain-transfer.html)

## 确认Amazon Route 53支持转移的顶级域名

从[顶级域名列表](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/registrar-tld-list.html)中查看AWS能够支持转移到Route 53的顶级域名。  

## [可选的]转移DNS服务到Amazon Route 53或者其它的DNS服务提供商

一些域名注册商会提供免费的DNS服务，当他们一收到Route 53的转移请求后便会停止这些服务。

## 在当前注册商修改设置，为每一个需要被转移的域名执行以下流程

* 确认域名注册者的联系人的电子邮件是最新的  
  * AWS会发一个授权转移邮件给注册者。邮件会有个链接需要注册者点击授权转移。如果不点击的话域名转移会被取消。
* 解锁域名,这样它才能被转移
  * 域名注册管理机构ICANN要求，开始转移它之前你需要解锁它
* 确认域名状态，只有域名处于正常状态才能被转移
  * 顶级域名转移的状态信息，查看[Transfer requirements for top-level domains](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/domain-transfer-to-route-53.html#domain-transfer-to-route-53-requirements)
* 关闭域名的DNSSEC
  * 使用了DNSSEC的域名要转移到Route 53,在转移前要在前注册商里先关掉DNSSEC。当域名成功转移到Route 53后按要求设置DNSSEC。 
  * 操作步骤查看[Configuring DNSSEC signing in Amazon Route 53](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-configuring-dnssec.html)
* 获取授权码
  * 来自当前注册商的授权码用来授权AWS请求将域名注册转移到Route 53。在Route 53控制台操作的时候需要输入授权码。
  * 有部分顶级域名转移时无需获取授权码： .co.za, .es, .jp, .uk, .co.uk, .me.uk, .org.uk  
  * .uk, .co.uk, .me.uk, .org.uk 这些顶级域名转移到Route 53时不需要授权码，但需要改IPS tag的值
* 将快要到期的域名续费

## 获取name servers的名称

name servers的名称要根据DNS服务提供商的指引获取

## 操作域名转移

[转移的域名数量在5个以内的步骤](/aws/Route53/transferring-domains/transfer-less-than-5-doamins)