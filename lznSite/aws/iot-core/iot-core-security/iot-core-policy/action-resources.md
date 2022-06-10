# AWS IoT Core action resources

若要为AWS IoT Core策略操作指定资源，必须使用资源的ARN。所有资源ARNs 的形式如下所示:

arn:aws:iot: region : AWS-account-ID : Resource-type/Resource-name

下表显示了为每种操作类型指定的资源
| Action | Resource类型 | Resource名字 |ARN例子|
| :----- | ----:        | :----:       |:----  |
|iot:AssumeRoleWithCertificate|rolealias|指向角色ARN的角色别名|arn:aws:iot:us-east-1:123456789012:rolealias/CredentialProviderRole_alias
|iot:Connect|client|客户端的client ID|arn:aws:iot:us-east-1:123456789012:client/myClientId
|iot:DeleteThingShadow|thing|物品的名字|arn:aws:iot:us-east-1:123456789012:thing/thingOne
|iot:DescribeJobExecution|thing|物品的名字|`arn:aws:iot:us-east-1:123456789012:thing/thingOne`
|iot:GetPendingJobExecutions|thing|物品的名字|`arn:aws:iot:us-east-1:123456789012:thing/thingOne`
|iot:GetRetainedMessage|topic|保留的消息主题|arn:aws:iot:us-east-1:123456789012:topic/myTopicName
|iot:GetThingShadow|thing|物品的名字|arn:aws:iot:us-east-1:123456789012:thing/thingOne
|iot:ListRetainedMessages|All|All|*
|iot:Publish|topic|一个主题字符串|arn:aws:iot:us-east-1:123456789012:topic/myTopicName
|iot:Receive|topic|一个主题字符串|arn:aws:iot:us-east-1:123456789012:topic/myTopicName
|iot:RetainPublish|topic|使用RETAIN标志集发布的主题。|arn:aws:iot:us-east-1:123456789012:topic/myTopicName
|iot:StartNextPendingJobExecution|thing|物品的名字|arn:aws:iot:us-east-1:123456789012:thing/thingOne
|iot:Subscribe|topicfilter|主题筛选器字符串|arn:aws:iot:us-east-1:123456789012:topicfilter/myTopicFilter
|iot:UpdateJobExecution|thing|物品的名字|arn:aws:iot:us-east-1:123456789012:thing/thingOne
|iot:UpdateThingShadow|thing|The thing's name, and the shadow's name, if applicable|arn:aws:iot:us-east-1:123456789012:thing/thingOne<br>arn:aws:iot:us-east-1:123456789012:thing/thingOne/shadowOne

<Vssue :title="$title" :options="{ locale: 'zh' }" />