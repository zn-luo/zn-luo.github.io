# IoT Core 策略 actions

## MQTT 策略操作(Actions)

### iot:Connect

表示连接到IoT Core消息代理的权限。在每次的CONNECT请求发送到代理时，IoT Core代理都会对iot:Connect权限进行被检查。消息代理不允许具有相同client ID的客户端同时保持连接。如何第二个客户端连接成功后，代理会关闭已存在的连接。使用iot:Connect权限可以确保只有使用特定客户端ID的授权客户端可以连接

### iot:GetRetainedMessage

表示获取单个保留消息内容的权限。保留消息是指消息发布时设置了RETAIN标志并由IoT Core存储。获取帐户所有保留消息列表的权限，请查看iot:ListRetainedMessages。

### iot:ListRetainedMessages

表示检索有关帐户保留消息的摘要信息的权限，但不是检索消息内容的权限。保留消息是指消息发布时设置了RETAIN标志并由IoT Core存储。为该操作指定的资源ARN必须为* 。获取单个保留消息内容的权限，请查看iot:GetRetainedMessage 。

### iot:Publish

表示发布MQTT主题的权限。每次将PUBLISH请求发送到代理时，都会检查此权限。您可以使用它来允许客户端发布到指定的主题。

备注：要授予iot:Publish权限，同时还必须授予iot:Connect权限。

### iot:Receive

表示从AWS IoT Core接收消息的权限。每次向客户端发送消息时，都会确认iot:Receive权限。由于每次交付时都会检查此权限，因此可以使用它撤销当前订阅主题的客户端权限。

### iot:RetainPublish

表示发布带有RETAIN标志集的MQTT消息的权限。

备注：要授予iot:RetainPublish权限，同时还必须授予iot:Publish权限。

### iot:Subscribe

表示订阅主题筛选器的权限。每次向代理发送SUBSCRIBE请求时，都会检查此权限。使用它可以允许客户端订阅匹配特定主题模式的主题。

备注：要授予iot:Subscribe权限，同时还必须授予iot:Connect权限。

## 设备影子策略操作(Device Shadow Policy Actions)

### iot:DeleteThingShadow

表示删除物品(thing)的设备影子(shadow)的权限。每次有删除设备影子内容的请求时，代理都会检查iot:DeleteThingShadow权限。

### iot:GetThingShadow

表示检索物品设备影子的权限。每次有获取设备影子内容的请求时，都会检查iot:GetThingShadow权限。

### iot:ListNamedShadowsForThing

表示列出物品的命名影子(shadow)的权限。每次请求列出一个物品的命名影子时，代理都会检查iot:ListNamedShadowsForThing权限。

### iot:UpdateThingShadow

表示更新设备影子的权限。iot:UpdateThingShadow权限会在每次更新设备影子内容的请求中被检查。

备注：作业执行策略操作只适用于HTTP TLS端点。如果使用MQTT端点，则必须使用本主题中定义的MQTT策略操作。

## 作业执行AWS IoT Core策略操作(Job Executions AWS IoT Core Policy Actions)

### iot:DescribeJobExecution

表示检索给定物品(thing)作业执行的权限。在每次请求一个job execution时，代理都会检查iot:DescribeJobExecution权限。

### iot:GetPendingJobExecutions

表示检索某物品不处于终止状态的作业列表的权限。每次请求检索列表时，代理都会检查iot:GetPendingJobExecutions权限。

### iot:UpdateJobExecution

表示更新一个job execution的权限。客户端每当发出更新一个job execution状态的请求时，代理都会检查iot:UpdateJobExecution权限。

### iot:StartNextPendingJobExecution

表示获取并开始某项内容的下一个挂起作业执行的权限。(也就是说，将状态为 QUEUED 的job execution更新为IN_PROGRESS。) 每次请求开始下一个挂起的作业执行时，都会检查iot:StartNextPendingJobExecution权限。

## AWS IoT Core凭据提供商策略操作(AWS IoT Core Credential Provider Policy Action)

### iot:AssumeRoleWithCertificate

表示调用AWS IoT Core凭据提供商以采用基于证书的身份验证来承担IAM角色的权限。每当向AWS IoT Core凭据提供商提出请求时，就会检查iot:AssumeRoleWithCertificate权限。
