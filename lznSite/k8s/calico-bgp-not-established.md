# calico网络故障(BIRD is not ready)

kubekey部署k8s集群,calico网络插件使用BGP协议建立的网络插件无法正常工作  
备注：BGP协议为边界网关协议  

## 问题现象

1. 现象如图

    ![calico未准备好](/imgs/k8s/describe-pod1.png)  
    ![calico未准备好](/imgs/k8s/get-pod1.png)  

2. 解析：

    calico/node is not ready: BIRD is not ready: BGP not established with 172.21.0.1  
    calico未准备好，BGP协议不能与172.21.0.1 IP地址连接  
    而在实际的网卡IP网段中并没有172.21.0.1这个IP，说明calico没有正常地探测到节点实际的网卡名称  
    所以需要调整calicao网络插件的网卡发现机制，修改IP_AUTODETECTION_METHOD的value值

## 解决方法

calicao网络插件的ip识别策略没有额外配置的情况下默认为first-found，这容易导致一个网络异常的ip作为nodeIP被注册，从而影响node之间的网络连接。  
可以修改成can-reach或者interface的策略，尝试连接某一个Ready的node的IP，以此选择出正确的IP

我使用的是kubeky部署工具，在kk二进制执行工具的当前目录有个kubekey目录，里面有个network-plugin.yaml，添加IP_AUTODETECTION_METHOD配置参数  
如果是直接手动使用k8s命令部署时，配置文件名为calico.yaml,同样添加IP_AUTODETECTION_METHOD配置参数  

如下所示：

```yaml
.....
  # Cluster type to identify the deployment type
  - name: CLUSTER_TYPE
    value: "k8s,bgp"
  - name: IP_AUTODETECTION_METHOD       #新添加的配置参数
    value: "interface=ens192"           #ens192改为实际网卡名称
  # Auto-detect the BGP IP address.
  - name: IP
    value: "autodetect"
  # Enable IPIP
  - name: CALICO_IPV4POOL_IPIP
    value: "Always"
......
```

执行如下命令让修改生效：

```bash
kubectl apply -f kubekey/network-plugin.yaml 或者 kubectl apply -f calico.yaml
```
