# 使用cert-manager结合route53实现DNS验证签发Let's Encrypt免费证书

## [部署cert-manager到k8s](https://cert-manager.io/docs/installation/)

```bash
kubectl apply -f cert-manager.yaml
```

备注: [cert-manager.yaml](/files/k8s/ymls/cert-manager/cert-manager.yaml)

### [验证cert-manager部署成功](https://cert-manager.io/docs/installation/verify/)

1. 查看cert-manager的组件pod是否正常运行:

```bash
kubectl get pods --namespace cert-manager
```

![cert-manager pods](/imgs/k8s/cert-manager/cert-manager-pods.PNG)

## [配置AWS Route53的角色策略](https://cert-manager.io/docs/configuration/acme/dns01/route53/)

此步骤需要了解AWS控制台的使用方法

1. 登陆aws控制台创建策略如下图所示:  
![cert-manager 策略](/imgs/k8s/cert-manager/cert-manager-policy.PNG)

2. 创建cert-manager角色并添加上一步创建的策略权限，如下图所示:  
![cert-manager 角色](/imgs/k8s/cert-manager/cert-manager-role.PNG)

## [配置DNS01验证的证书发行机构](https://cert-manager.io/docs/configuration/acme/dns01/)

1. 将aws_secret_access_key保存到k8s的Secret中:

    ```yaml
    apiVersion: v1
    kind: Secret
    metadata:
      name: route53-credentials-secret
      namespace: cert-manager
    type: Opaque
    stringData:
      secret-access-key: <aws secret access key> # 粘贴 aws_secret_access_key 到这里，不需要 base64 加密。
    ```

2. 创建[Issuer](https://cert-manager.io/docs/reference/api-docs/#cert-manager.io/v1.Issuer)或者ClusterIssuer:

    ```yaml
    apiVersion: cert-manager.io/v1
    kind: Issuer
    metadata:
      name: letsencrypt-staging
      namespace: cert-manager
    spec:
      acme:
        server: https://acme-staging-v02.api.letsencrypt.org/directory
        email: xxxx.xxx@xxxx.com

        # 定义存储ACME账号私钥的secret名，cert-manager会自己创建它
        privateKeySecretRef:
          name: letsencrypt-staging

        # ACME DNS-01 provider configurations
        solvers:
        # 当 'selector' 为空时表示匹配所有域，'selector:{}'
        - selector: 
            dnsZones:
              - "test-domain.com"
          dns01:
            route53:
              region: eu-xxxxx-1
              accessKeyID: aws_access_key_id
              secretAccessKeySecretRef:    # 上一步定义的secret
                name: route53-credentials-secret
                key: secret-access-key
              # AWS的角色定义
              role: arn:aws:iam::xxxxxxxxxxxxxx:role/cert-manager-role
    ```

3. 创建[Certificate](https://cert-manager.io/docs/reference/api-docs/#cert-manager.io/v1.Certificate):

    ```yaml
    apiVersion: cert-manager.io/v1
    kind: Certificate
    metadata:
      name: test-domain.com.cert
      namespace: cert-manager
    spec:
      dnsNames:
      - test-domain.com # 要签发证书的域名
      issuerRef:
        kind: Issuer
        name: letsencrypt-staging # 引用上一步创建的Issuer，指示采用 dns01 方式进行校验
      secretName: test-domain-com-tls # 最终签发出来的证书会保存在这个名为test-domain-com-tls的Secret 里面
    ```

## 查看和使用证书

1. 创建好Certificate后，可以使用kubectl查看是否签发成功:

    ```bash
    $ kubectl get certificate -n cert-manager
    NAME                READY   SECRET                  AGE
    test-domain.com.cert   True    test-domain-com-tls   1m
    ```

    如果 READY 为 False 表示失败，可以通过 describe 查看 event 来排查失败原因:

    ```bash
    kubectl describe certificate -n cert-manager test-domain.com.cert
    ```

    如果为 True 表示签发成功，证书就保存在Secret里 (上面的例子是 cert-manager/test-domain-com-tls)，可以通过 kubectl 查看:

    ```bash
    kubectl edit  secret test-domain-com-tls -n cert-manager
    ```

    备注: tls.crt 就是证书，tls.key 是密钥

2. 使用证书, 在Ingress中引用secret示例:

    ```yaml
    apiVersion: networking.k8s.io/v1beta1
    kind: Ingress
    metadata:
      name: test-ingress
      annotations:
        kubernetes.io/Ingress.class: nginx
    spec:
      rules:
      - host: test-domain.com
        http:
          paths:
          - path: /test-web
            backend:
              serviceName: test-web
              servicePort: 80
      tls:
        hosts:
        - test-domain.com
        secretName: test-domain-com-tls
    ```
