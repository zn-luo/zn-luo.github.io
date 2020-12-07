# [Pod](https://kubernetes.io/docs/concepts/workloads/pods/)

Pod 是Kubernetes项目中最小的API对象，即是Kubernetes项目的原子调度单位。Pod是一个或多个容器的组，具有共享的存储/网络资源，以及关于如何运行容器的规范。Pod的共享上下文是一组Linux名称空间、cgroups和可能的其他方面的隔离——与Docker容器隔离相同的事情。就Docker概念而言要，Pod类似于一组具有共享名称空间和共享文件系统卷的Docker容器。

## pods的使用

一般情况我们不需要直接创建pod来使用，而是通过工作负载资源(如[Deployment](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/)或者[Job](https://kubernetes.io/docs/concepts/workloads/controllers/job/)等)来创建pods。如果创建的pods需要跟踪状态的可以使用[StatefulSet](https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/)资源。

k8s集群使用pods的主要两种方式：

1. pod运行单个容器。
2. pod运行多个需要协调工作的容器：Pod可以封装由多个位于同一位置的紧密耦合且需要共享资源的容器组成的应用程序。这些位于同一位置的容器形成了单个内聚服务单元。如一个容器将存储在共享卷中的数据向外提供服务，而另一个sidecar容器刷新或更新这些文件。Pod将这些容器、存储资源和短暂的网络标识包装为一个单独的单元。

## pod几个重要字段的含义和用法

1. [NodeSelector](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/)： 此字段的作用是将 Pod 与 Node 进行绑定的字段。如下所示:

    ```yaml
    apiVersion: v1
    kind: Pod
    metadata:
      name: nginx
      labels:
        env: test
    spec:
      containers:
      - name: nginx
        image: nginx
        imagePullPolicy: IfNotPresent
      nodeSelector:
        disktype: ssd
    ```
  
    意味着这个 Pod 永远只能运行在携带了“disktype: ssd”标签（Label）的节点 上；否则，它将调度失败。

2. [HostAliases](https://kubernetes.io/docs/concepts/services-networking/add-entries-to-pod-etc-hosts-with-host-aliases/): 定义 Pod 的 hosts 文件（比如 /etc/hosts）里的内容。如下所示:

    ```yaml
    apiVersion: v1
    kind: Pod
    metadata:
      name: hostaliases-pod
    spec:
      restartPolicy: Never
      hostAliases:
      - ip: "10.0.1.2"
        hostnames:
        - "rs0.mongo"
        - "rs1.mongo"
      containers:
      - name: cat-hosts
        image: busybox
        command:
        - cat
        args:
        - "/etc/hosts"
    ```

    在这个 Pod 的 YAML 文件中，设置了一组 IP 和 hostname 的数据。这个 Pod 启动后，/etc/hosts 文件的内容将如下所示：  
    ![hostAliases](/imgs/k8s/hostaliases-pod.png)
