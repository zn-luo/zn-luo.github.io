#!/bin/bash


mkdir  /data/nfs-pv
chmod 777  /data/nfs-pv
yum -y install nfs-utils rpcbind
echo "/data/nfs-pv *(insecure,rw,async,no_root_squash)" >> /etc/exports
systemctl restart nfs rpcbind

kubectl create -f rbac.yaml
kubectl create -f nfs-deployment.yaml
kubectl create -f storage-class.yaml