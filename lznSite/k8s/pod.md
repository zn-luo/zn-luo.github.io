# [Pod](https://kubernetes.io/docs/concepts/workloads/pods/)

Pod 是Kubernetes项目中最小的API对象，即是Kubernetes项目的原子调度单位。Pod是一个或多个容器的组，具有共享的存储/网络资源，以及关于如何运行容器的规范。Pod的共享上下文是一组Linux名称空间、cgroups和可能的其他方面的隔离——与Docker容器隔离相同的事情。就Docker概念而言要，Pod类似于一组具有共享名称空间和共享文件系统卷的Docker容器。
