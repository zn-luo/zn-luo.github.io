# AWS IoT Core 策略变量

AWS IoT Core在 Resource 或“Condition 块中定义了可用于AWS IoT Core策略的策略变量。在计算策略时，策略变量将被替换成实际值。例如，如果设备连接到AWS IoT Core消息代理，客户端ID为100-234-3456，则策略文档中的IoT:ClientId策略变量将被替换为100-234-3456。有关策略变量的更多信息，查看[IAM Policy Variables](https://docs.aws.amazon.com/service-authorization/latest/reference/reference_policies_variables.html)和 Multi-Value Conditions。

## 基础AWS IoT Core策略变量

AWS IoT Core定义了以下基本策略变量:

* iot:ClientId : 用于连接到AWS IoT Core消息代理的客户端ID。
* aws:SourceIp : 连接到AWS IoT Core消息代理的客户端IP地址。

以下AWS IoT Core策略展示了一个使用策略变量的策略:

```json
{
    "Version": "2012-10-17",
    "Statement": [
      {
        "Effect": "Allow",
        "Action": ["iot:Connect"],
        "Resource": [
          "arn:aws:iot:us-east-1:123451234510:client/${iot:ClientId}"
        ]
      },
      {
        "Effect": "Allow",
        "Action": ["iot:Publish"],
        "Resource": [
          "arn:aws:iot:us-east-1:123451234510:topic/my/topic/${iot:ClientId}"
        ]
      }
    ]
}
```

在这个例子中，${iot:ClientId}会被替换为连接到AWS IoT Core 消息代理的客户端的ID。

${iot:ClientId}也可以应用于指定的topic filter当中，如下所示：

```json
{
    "Effect": "Allow",
    "Action": ["iot:Subscribe"],
    "Resource": [
      "arn:aws:iot:us-east-1:123456789012:topicfilter/my/${iot:ClientId}/topic"
    ]
}
```

客户端可以使用+作为客户端ID进行连接。这将允许用户订阅与主题过滤器my/+/topic匹配的任何主题。为了防止这种安全漏洞，可以使用iot:Connect策略action来控制指定客户端id可以连接。如下例子所示，此策略只允许ID为 clientid1的客户端连接。

```json
{
    "Version": "2012-10-17",
    "Statement": [
      {
        "Effect": "Allow",
        "Action": ["iot:Connect"],
        "Resource": [
          "arn:aws:iot:us-east-1:123456789012:client/clientid1"
        ]
      }
    ]
}
```
