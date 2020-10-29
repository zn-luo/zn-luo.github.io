# K8S概述

Kubernetes能提供路由网关、水平扩展、监控、备份、灾难恢复等一系列运维能力。  
笔记来记录于张磊老师的课程。  

## k8s架构

k8s架构主要由Master和Node两种节点组成，即控制节点和计算节点。架构如图：
![k8s架构图](/imgs/k8s/k8s-architecture.png)

**控制节点(Master节点)由三个紧密协作的独立组件组合而成：**

1. kube-apiserver组件负责API服务
2. kube-scheduler组件负责调试服务
3. kube-controller-manager组件负责容器编排服务
4. 整个集群的持久化数据则由kube-apiserver处理后保存到etcd数据库中。

**计算节点(Node节点)最核心的是kubelet组件:**

在K8s中kubelet主要负责同容器运行时(如Docker项目)交互。而这个交互所依赖的是一个称作CRI(Container Runtime Interface)的远程调用接口，这个接口定义了 容器运行时的各项核心操作，比如：启动一个容器需要的所有参数。

所以Kubernetes项目并不需要关注底层是什么容器运行时、使用什么技术实现的，只要部署的容器运行时能够运行标准的容器镜像，就可以通过实现CRI接入到Kubernetes项目中。

而具体的容器运行时，如Docker项目，则一般通过OCI这个容器运行时规范与底层的Linux操作系统交互，即把CRI请求转成对应Linux操作系统的调用(操作Linux Namespace和Cgroups等)

kubelet还通过gRPC协议同一个叫Device Plugin的插件进行交互。这是k8s项目用来管理GPU等宿主机物理设备的主要组件。

kubelet还会调用网络插件和存储插件为容器配置网络和持久化存储。这两个插件与kubelet进行交互的接口，分别是CNI(Container Networking Interface)和CSI(Container Storage Interface)。
