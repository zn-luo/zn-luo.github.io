#!/bin/bash
# Created By lzn

function amIRoot() {
  ! ((${EUID:-0} || "$(id -u)"))
}

function execCmd(){
  local cmd="$*"
  if amIRoot; then
    $cmd
  else
    sudo $cmd
  fi
}

function aptRemove(){
  execCmd "apt-get -y remove docker docker-engine docker.io containerd runc"
}

function installPrepare(){
  execCmd "apt-get update && apt-get install apt-transport-https ca-certificates curl gnupg-agent software-properties-common"
  curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
}

function addAptRepo(){
  sudo add-apt-repository  "deb [arch=amd64] https://download.docker.com/linux/ubuntu  $(lsb_release -cs)   stable "
}

function installDockerce(){
  aptRemove
  installPrepare
  addAptRepo
  
  if amIRoot; then
    apt-get update && apt-get install -y docker-ce=18.06.3~ce~3-0~ubuntu
  else
    sudo apt-get update && sudo apt-get install -y docker-ce=18.06.3~ce~3-0~ubuntu 
  fi
  
}

function main(){
  $1
}

main "$@"