# [DaemonSet](https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/)

DaemonSet的主要作用是可以在K8S集群里运行Daemon Pod。

## DaemonSet的Pod有如下特点

* 这个Pod运行在k8s集群里的每一个节点上
* 每个节点上只有一个这样的Pod实例
* 当有新的节点加入K8S集群后，该Pod会自动地在新节点上被创建出来;  
  当旧的节点被删除后，此节点上的Pod也会相应地被回收掉  

## 使用场景

* 各种网络插件的Agent组件，都必须运行在每个节点上，用来处理这个节点上的容器网络
* 各种存储插件的Agent组件，也必须运行在每个节点上，用来处理这个节点上挂载远程存储目录，操作容器的Volume目录
* 各种监控组件和日志组件，也必须运行每个节点上，负责这个节点上的监控信息和日志搜集

Note: DaemonSet开始运行时机有时比整个k8s集群出现的时机要早，如：k8s的网络插件Agent组件，没有运行网络插件的k8s集群容器网络不可用，所有worker节点的状态都是NotReady，此时普通pod是不能正常运行在这个集群上。
