# kubeadmin 安装k8s v.111.1

此部署方案使用ansible来进行跨主机安装所需软件及修改相应配置,基本所有的部署流程都已经kube-install.yml实现

## 部署准备

   资源   |  配置    |
----------|---------|
CPU       |   >=2   |
内存       |  >=8GB  |
磁盘       | >=2块   |
系统盘     | >=30GB  |
服务器     | 最好3台  |
网卡数量   |   >=1   |

   软件   |         版本           |
--------- |-----------------------|
Ubuntu    |      18.04.2          |
kernel    |       >=3.10          |
docker-ce | 18.06.3~ce~3-0~ubuntu |
kubeadm   |        v1.11.1        |
kubelet   |        v1.11.1        |
kubectl   |        v1.11.1        |

备注：保证服务器之前网络互通，可以访问外网，docker.io

## 下载部署所需文件

1. install-docker-ce.sh
2. install-k8s.sh
3. k8s-inventory
4. kube-install.yml
5. kubeadm.yaml
6. weave-daemonset-k8s-1.7.yaml
7. k8s-dashboard-v1.10.1.yaml
8. rook-ceph-common-1.3.yaml
9. rook-ceph-operator-1.3.yaml
10. rook-ceph-cluster-1.3.yaml

备注： 所有文件应该下载在相同目录

## 安装部署k8s v1.11.1

进入刚才下载部署所需的文件目录,执行如下操作

1. 在当前主机配置/etc/hosts, 设置ip与主机名
2. 编辑k8s-inventory，配置好主机名，ssh用户名密码等
3. 执行如下命令:

```bash
bash install-docker-ce.sh installDockerce #如果已经安装docker-ce可不用执行
bash install-k8s.sh           #此部署脚本可重复执行，如果遇到网络问题突然中断可重复执行
```
