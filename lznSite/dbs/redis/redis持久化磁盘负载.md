# redis数据持久化磁盘负载问题

redis虽为内存数据库，但为了做到服务down机重启后能继续提供服务，需要让数据持久化到磁盘。在实际使用的过程中就容易引起磁盘I/O负载高。

## 问题描述

当数据量增加，key的操作频率增加，就持久化操作变频繁，磁盘I/O 负载高
日志会出现"Asynchronous AOF fsync is taking too long (disk is busy?). Writing the AOF buffer without waiting for fsync to complete, this may slow down Redis."

## 监控截图

1. [openfalcon磁盘监控](/imgs/dbs/disk-io.png)
2. [atop磁盘监控](/imgs/dbs/atop-disk.png)
