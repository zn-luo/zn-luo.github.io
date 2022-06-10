# 物品(Thing)策略变量

物品(thing)策略变量允许您编写AWS IoT Core策略，该策略根据物品属性(如物品名称、物品类型和物品属性值)授予或拒绝权限。您可以使用thing策略变量来应用相同的策略来控制多个AWS IoT Core设备。有关device provisioning的详细信息，查看[Device Provisioning](https://docs.aws.amazon.com/iot/latest/developerguide/iot-provision.html)。物品名称从物品连接到AWS IoT Core时发送的MQTT Connect消息中的客户端ID获得。

在AWS IoT Core 策略中使用thing策略变量时，需要记住以下几点。

* 使用[AttachThingPrincipal](https://docs.aws.amazon.com/iot/latest/apireference/API_AttachThingPrincipal.html) API将证书或 principals(经过身份验证的Amazon Cognito身份)附加到一个物品上。
* 当您用物品策略变量替换物品名称时，MQTT连接消息或TLS连接中的clientId值必须与物品名称完全匹配。

下面的物品策略变量是可用的：

* iot:Connection.Thing.ThingName  
此变量将解析为AWS IoT Core注册表中正在为其评估策略的对象的名称。AWS IoT Core使用设备在进行身份验证时提供的证书，以确定使用哪种东西来验证连接。此策略变量仅在设备通过MQTT或MQTT基于WebSocket协议连接时可用。

* iot:Connection.Thing.ThingTypeName  

* iot:Connection.Thing.Attributes[attributeName]  

* iot:Connection.Thing.IsAttached  