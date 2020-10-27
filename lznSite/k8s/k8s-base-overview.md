# K8S概述

Kubernetes能提供路由网关、水平扩展、监控、备份、灾难恢复等一系列运维能力。

## k8s架构

k8s架构主要由Master和Node两种节点组成，即控制节点和计算节点。架构如图：
![k8s架构图](/imgs/k8s/k8s-architecture.png)

控制节点(Master节点)由三个紧密协作的独立组件组合而成：

1. kube-apiserver组件负责API服务
2. kube-scheduler组件负责调试服务
3. kube-controller-manager组件负责容器编排服务
4. 整个集群的持久化数据则由kube-apiserver处理后保存到etcd数据库中。

计算节点(Node节点)最核心的是kubelet组件:

在K8s中kubelet主要负责同容器运行时(如Docker项目)交互。而这个交互所依赖的是CRI(Container Runtime Interface)远程调用接口。