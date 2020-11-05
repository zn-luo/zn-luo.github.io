# 修改docker与kubelet的Cgroup驱动

## 修改docker的Cgroup Driver为systemd

1. 编辑/etc/docker/daemon.json,添加如下内容

   ```bash
   {
    "exec-opts": ["native.cgroupdriver=systemd"]
   }
   ```

2. 重启docker服务

   ```bash
   systemctl daemon-reload
   systemctl restart docker
   ```

## 修改kubelet的Cgroup Driver

1. 编辑/etc/systemd/system/kubelet.service.d/10-kubeadm.conf

   ```bash
   Environment="KUBELET_KUBECONFIG_ARGS=--bootstrap-kubeconfig=/etc/kubernetes/bootstrap-kubelet.conf --kubeconfig=/etc/kubernetes/kubelet.conf --cgroup-driver=cgroupfs"
   ```

2. 重启kubelet服务

   ```bash
   systemctl daemon-reload
   systemctl restart kubelet
   ```
