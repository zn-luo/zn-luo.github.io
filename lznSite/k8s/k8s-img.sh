#!/bin/bash
kubeV=v1.11.1
images=(kube-proxy-amd64:$kubeV kube-scheduler-amd64:$kubeV kube-controller-manager-amd64:$kubeV kube-apiserver-amd64:$kubeV
etcd-amd64:3.2.18 coredns:1.1.3 pause:3.1 kubernetes-dashboard-amd64:v1.8.3 k8s-dns-sidecar-amd64:1.14.9 k8s-dns-kube-dns-amd64:1.14.9
k8s-dns-dnsmasq-nanny-amd64:1.14.9 )

for imageName in ${images[@]} ; do
  # docker pull registry.cn-hangzhou.aliyuncs.com/k8sth/$imageName
  # docker tag registry.cn-hangzhou.aliyuncs.com/k8sth/$imageName k8s.gcr.io/$imageName
  # docker tag registry.cn-hangzhou.aliyuncs.com/k8sth/$imageName k8simgs/$imageName
  docker push k8simgs/$imageName
  #docker rmi registry.cn-hangzhou.aliyuncs.com/k8sth/$imageName
done

#https://www.cnblogs.com/cocowool/p/kubeadm_install_kubernetes.html