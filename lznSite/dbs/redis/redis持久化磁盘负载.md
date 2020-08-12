# redis数据持久化磁盘负载问题

redis虽为内存数据库，但为了做到服务down机重启后不丢失数据，从而能继续提供服务，需要让数据持久化到磁盘,所以在实际使用的过程中就容易遇到磁盘I/O负载问题。

## 问题描述

1. 当请求量增长，key的操作频率增加，持久化操作变频繁后磁盘I/O 负载就会变高。  
2. 日志会出现"Asynchronous AOF fsync is taking too long (disk is busy?). Writing the AOF buffer without waiting for fsync to complete, this may slow down Redis."
3. redis服务运行在aws的虚拟机上，磁盘类型为ebs的st1类型，此磁盘类型的底层物理架构为IOPS偏低的机械磁盘类型。

## 监控截图

1. openfalcon磁盘监控  
![openfalcon磁盘监控](/imgs/dbs/disk-io.png)
2. atop磁盘监控  
![atop磁盘监控](/imgs/dbs/atop-disk.png)

## 问题分析

1. 从监控可以看出，当负载增高的情况下，redis对磁盘的写请求增加，当超出磁盘的IOPS时，磁盘的响应会变慢导致阻塞，阻塞的出现会引起资源争抢的恶性循环，导致服务器负载飙升。

## 解决方法

1. 将ebs的磁盘类型升级为gp2(底层物理架构为SSD类型)，相对于st1类型的IOPS增大。(在实际实践中，虽然升级了此磁盘能缓解负载报警但不能根本解决磁盘性能问题，redis日志还是会出现"Asynchronous AOF fsync is taking too long.......")
2. 修改vm.dirty_bytes值：echo "vm.dirty_bytes=37748736" >> /etc/sysctl.conf　&& sysctl -p  
3. 最佳解决方案： 磁盘采用ssd固态硬盘的同时调整设置vm.dirty_bytes参数。因为高性能的磁盘类型能够很好地支撑redis同时做RBD和AOF持久化。
