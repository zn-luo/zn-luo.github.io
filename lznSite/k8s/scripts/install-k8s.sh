#!/bin/bash
# Created by lzn


function ansibleCmd(){
  docker run -it --network host --rm -v $(pwd):$(pwd) -w $(pwd) jenner/ansible-alpine:2.9.9 $*
}
#ansible-playbook -i ./k8s-inventory  ./kube-install.yml --extra-vars "ansible_sudo_pass=123456"
ansibleCmd "$*"

# kubeadm init --config kubeadm.yaml 
# mkdir -p $HOME/.kube 
# sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config 
# sudo chown $(id -u):$(id -g) $HOME/.kube/config 

# 部署网络插件 
# kubectl apply -f https://git.io/weave-kube-1.6 ==> kubectl apply -f weave-daemonset-k8s-1.7.yaml