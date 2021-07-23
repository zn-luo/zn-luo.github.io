#!/bin/bash

function pgset(){
  local result
  local pgdev=${2:-/proc/net/pktgen/eth0}
  echo "$1" > "$pgdev"
  result=$(grep -F "Result: OK:" < "$pgdev")
  if [ "$result" = "" ];then
     grep " Result:" < "$pgdev"
  fi
}

# 为0号线程绑定 ens33 网卡
pgdev=/proc/net/pktgen/kpktgend_0
pgset "rem_device_all"  "$pgdev" # 清空网卡绑定
pgset "add_device ens33"  "$pgdev" # 添加 ens33 网卡

# 配置 ens33 网卡的测试选项
pgdev=/proc/net/pktgen/ens33
pgset "count 1000000"     "$pgdev"    # 总发包数量
pgset "delay 5000"        "$pgdev"    # 不同包之间的发送延迟(单位纳秒)
pgset "clone_skb 0"       "$pgdev"    # SKB包复制
pgset "pkt_size 64"       "$pgdev"    # 网络包大小
pgset "dst 192.168.89.134"  "$pgdev"    # 目的IP
pgset "dst_mac 00:0c:29:1a:b4:24"  "$pgdev"    # 目的MAC


# 启动测试
pgdev=/proc/net/pktgen/pgctrl
pgset "start" "$pgdev"