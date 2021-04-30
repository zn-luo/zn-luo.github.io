# [StatefulSets](https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/)

StatefulSet 是用来管理有状态应用的工作负载 API 对象。

## .spec.selector 字段

设置.spec.selector字段，使之匹配其在.spec.template.metadata.labels中设置的标签。  
在Kubernetes 1.8版本之前，被忽略的.spec.selector字段会获得默认设置值。  
在1.8和以后的版本中，未指定匹配的 Pod 选择器将在创建 StatefulSet 期间导致验证错误。  

```yaml
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: mongodb
spec:
  selector:
    matchLabels:
      app: mongodb
  replicas: 3
  template:
    metadata:
      labels:
        app: mongodb
```
