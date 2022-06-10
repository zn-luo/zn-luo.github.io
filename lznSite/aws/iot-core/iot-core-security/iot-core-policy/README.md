# IoT Core 策略

AWS IoT Core 策略是是JSON文档格式。这个策略与IAM策略一样遵循相同的约定。AWS IoT Core支持策略命名，因此许多身份可以引用相同的策略文档。策略命名是有版本的，因此它们可以很容易地回滚。

AWS IoT Core策略允许您对AWS IoT Core数据平面的访问进行控制。AWS IoT Core数据平面许多操作组成，它包括允许您连接到IoT Core消息代理、发送和接收MQTT消息以及获取或更新物品的设备阴影。

IoT Core策略是包含一个或多个策略语句的JSON文档。每个语句包含如下内容：

* Effect：它指定操作是被允许还是被拒绝
* Action：它指定操作的策略是被允许或被拒绝
* Resource：它指定操作的资源是被允许还是被拒绝

<Vssue :title="$title" :options="{ locale: 'zh' }" />