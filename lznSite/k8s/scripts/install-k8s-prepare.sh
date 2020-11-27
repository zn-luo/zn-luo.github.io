#!/bin/bash
# Created by lzn


function ansibleCmd(){
  docker run -it --network host --rm -v $(pwd):$(pwd) -w $(pwd) jenner/ansible-alpine:latest $*
}
#ansible-playbook -i ./k8s-inventory  ./kube-install.yml --extra-vars "ansible_sudo_pass=123456"
ansibleCmd "$*"