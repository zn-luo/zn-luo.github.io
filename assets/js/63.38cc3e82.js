(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{397:function(t,a,s){"use strict";s.r(a);var e=s(17),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"使用cert-manager结合route53实现dns验证签发let-s-encrypt免费证书"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用cert-manager结合route53实现dns验证签发let-s-encrypt免费证书"}},[t._v("#")]),t._v(" 使用cert-manager结合route53实现DNS验证签发Let's Encrypt免费证书")]),t._v(" "),a("h2",{attrs:{id:"部署cert-manager到k8s"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署cert-manager到k8s"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://cert-manager.io/docs/installation/",target:"_blank",rel:"noopener noreferrer"}},[t._v("部署cert-manager到k8s"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("kubectl apply "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-f")]),t._v(" cert-manager.yaml\n")])])]),a("p",[t._v("备注: "),a("a",{attrs:{href:"/files/k8s/ymls/cert-manager/cert-manager.yaml"}},[t._v("cert-manager.yaml")])]),t._v(" "),a("h3",{attrs:{id:"验证cert-manager部署成功"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#验证cert-manager部署成功"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://cert-manager.io/docs/installation/verify/",target:"_blank",rel:"noopener noreferrer"}},[t._v("验证cert-manager部署成功"),a("OutboundLink")],1)]),t._v(" "),a("ol",[a("li",[t._v("查看cert-manager的组件pod是否正常运行:")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("kubectl get pods "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--namespace")]),t._v(" cert-manager\n")])])]),a("p",[a("img",{attrs:{src:"/imgs/k8s/cert-manager/cert-manager-pods.PNG",alt:"cert-manager pods"}})]),t._v(" "),a("h2",{attrs:{id:"配置aws-route53的角色策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置aws-route53的角色策略"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://cert-manager.io/docs/configuration/acme/dns01/route53/",target:"_blank",rel:"noopener noreferrer"}},[t._v("配置AWS Route53的角色策略"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("此步骤需要了解AWS控制台的使用方法")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("登陆aws控制台创建策略如下图所示:"),a("br"),t._v(" "),a("img",{attrs:{src:"/imgs/k8s/cert-manager/cert-manager-policy.PNG",alt:"cert-manager 策略"}})])]),t._v(" "),a("li",[a("p",[t._v("创建cert-manager角色并添加上一步创建的策略权限，如下图所示:"),a("br"),t._v(" "),a("img",{attrs:{src:"/imgs/k8s/cert-manager/cert-manager-role.PNG",alt:"cert-manager 角色"}})])])]),t._v(" "),a("h2",{attrs:{id:"配置dns01验证的证书发行机构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置dns01验证的证书发行机构"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://cert-manager.io/docs/configuration/acme/dns01/",target:"_blank",rel:"noopener noreferrer"}},[t._v("配置DNS01验证的证书发行机构"),a("OutboundLink")],1)]),t._v(" "),a("ol",[a("li",[a("p",[t._v("将aws_secret_access_key保存到k8s的Secret中:")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Secret\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" route53"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("credentials"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("secret\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("namespace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" cert"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("manager\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Opaque\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("stringData")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("secret-access-key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <aws secret access key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 粘贴 aws_secret_access_key 到这里，不需要 base64 加密。")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("创建"),a("a",{attrs:{href:"https://cert-manager.io/docs/reference/api-docs/#cert-manager.io/v1.Issuer",target:"_blank",rel:"noopener noreferrer"}},[t._v("Issuer"),a("OutboundLink")],1),t._v("或者ClusterIssuer:")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" cert"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("manager.io/v1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Issuer\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" letsencrypt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("staging\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("namespace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" cert"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("manager\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("acme")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("server")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//acme"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("staging"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("v02.api.letsencrypt.org/directory\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("email")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" xxxx.xxx@xxxx.com\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 定义存储ACME账号私钥的secret名，cert-manager会自己创建它")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("privateKeySecretRef")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" letsencrypt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("staging\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ACME DNS-01 provider configurations")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("solvers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 当 'selector' 为空时表示匹配所有域，'selector:{}'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("selector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("dnsZones")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test-domain.com"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("dns01")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("route53")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("region")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" eu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("xxxxx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("accessKeyID")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" aws_access_key_id\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("secretAccessKeySecretRef")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 上一步定义的secret")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" route53"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("credentials"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("secret\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" secret"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("access"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("key\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# AWS的角色定义")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("role")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" arn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("aws"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("iam"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("xxxxxxxxxxxxxx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("role/cert"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("manager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("role\n")])])])]),t._v(" "),a("li",[a("p",[t._v("创建"),a("a",{attrs:{href:"https://cert-manager.io/docs/reference/api-docs/#cert-manager.io/v1.Certificate",target:"_blank",rel:"noopener noreferrer"}},[t._v("Certificate"),a("OutboundLink")],1),t._v(":")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" cert"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("manager.io/v1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Certificate\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("domain.com.cert\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("namespace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" cert"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("manager\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("dnsNames")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("domain.com "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 要签发证书的域名")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("issuerRef")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Issuer\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" letsencrypt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("staging "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 引用上一步创建的Issuer，指示采用 dns01 方式进行校验")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("secretName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("domain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("tls "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 最终签发出来的证书会保存在这个名为test-domain-com-tls的Secret 里面")]),t._v("\n")])])])])]),t._v(" "),a("h2",{attrs:{id:"查看和使用证书"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看和使用证书"}},[t._v("#")]),t._v(" 查看和使用证书")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("创建好Certificate后，可以使用kubectl查看是否签发成功:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ kubectl get certificate "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-n")]),t._v(" cert-manager\nNAME                READY   SECRET                  AGE\ntest-domain.com.cert   True    test-domain-com-tls   1m\n")])])]),a("p",[t._v("如果 READY 为 False 表示失败，可以通过 describe 查看 event 来排查失败原因:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("kubectl describe certificate "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-n")]),t._v(" cert-manager test-domain.com.cert\n")])])]),a("p",[t._v("如果为 True 表示签发成功，证书就保存在Secret里 (上面的例子是 cert-manager/test-domain-com-tls)，可以通过 kubectl 查看:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("kubectl edit  secret test-domain-com-tls "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-n")]),t._v(" cert-manager\n")])])]),a("p",[t._v("备注: tls.crt 就是证书，tls.key 是密钥")])]),t._v(" "),a("li",[a("p",[t._v("使用证书, 在Ingress中引用secret示例:")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" networking.k8s.io/v1beta1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Ingress\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("ingress\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("annotations")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kubernetes.io/Ingress.class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("rules")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("host")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("domain.com\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("http")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("paths")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("web\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("backend")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("serviceName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("web\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("servicePort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tls")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("hosts")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("domain.com\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("secretName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("domain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("tls\n")])])])])]),t._v(" "),a("Vssue",{attrs:{title:t.$title,options:{locale:"zh"}}})],1)}),[],!1,null,null,null);a.default=n.exports}}]);