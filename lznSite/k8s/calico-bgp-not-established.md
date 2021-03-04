# calico网络故障(BIRD is not ready)

kubekey部署k8s集群,calico网络插件建立的网络插件无法正常工作

## 问题现象

![calico未准备好](/imgs/k8s/describe-pod1.png)  

calico/node is not ready: BIRD is not ready: BGP not established with 172.21.0.1
\\calico未准备好，BGP协议不能与172.21.0.1 IP地址连接

BGP协议:边界网关协议