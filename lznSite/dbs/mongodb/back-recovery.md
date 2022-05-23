# 备份与恢复

## 备份的目的

* 防止硬件故障引起的数据丢失
* 防止人为错误导致的误删数据
* 时间回溯
* 监管要求

## 备份的机制与方式

备份机制有  

* 延迟节点备份
* 全量备份 + Oplog 增量

常见的全量备份方式：  

* mongodump
* 复制数据文件
* 文件系统快照

## 复制文件全量备份注意事项

复制数据库文件：  

* 必须先关闭节点才能复制，否则复制到的文件无效
* 也可以选择db.fsyncLock()锁定节点，但完成后要db.fsyncUnlock()解锁
* 可以且应该在从节点上完成
* 该方法会暂时宕机一个从节点，所以整个过程中应注意投票节点总数

文件系统快照：  

* MongoDB支持使用文件系统快照直接获取数据文件在某一时刻的镜像
* 快照过程中可以不用停机
* 数据文件和Journal必须在同一个卷上
* 快照完成后请尽快复制文件并删除快照

mongodump:  

* 使用mongodump备份最灵活，但速度上是最慢的
* mongodump出来的数据不能表示某个时间点，只是某个时间段
* 应该结合oplog进行幂等操作

如下图1所示，当只执行mongodump时，从t0开始dump数据，进行到t1时A还是10，当到t2时A被改为了20，最后在t3时间点结束，此时A的数据仍然是10，因为在t2时间点修改之前A已经被dump出数据库：  
![mongodump](/imgs/dbs/mongodb/mongodump.jpg)

如下图2所示，执行mongodump加oplog操作，由于oplog是幂等性操作的，所以能够保证在执行mongodump时数据被修改的情况：  
![mongodump-oplog.jpg](/imgs/dbs/mongodb/mongodump-oplog.jpg)

## mongodump与mongorestore的重要参数

### [mongodump](https://docs.mongodb.com/v4.0/reference/program/mongodump/#bin.mongodump)

* --oplog: 复制mongodump开始到结束过程中的所有oplog并输出到结果中。输出文件默认位于当前上当的dump/oplog.json

## [mongorestore](https://docs.mongodb.com/v4.0/reference/program/mongorestore/#bin.mongorestore)

* --oplogReplay: 恢复数据文件后再重放oplog。默认重放当前目录下的dump/oplog.json  
* --oplogFile: 指定需要重放的oplog文件位置
* --oplogLimit: 重放oplog时截止到指定时间点

## 分片集群的备份

## 分片集群的备份与复制集群原理相同

* 应该分别为每个分片和config server备份
* 分片集群备份不仅要考虑一个分片内的一致性问题，也要考滤分片间的一致性问题，要尽量保证每个分片能够恢复到同一个时间点

分片集群备份相对复制集群更加复杂一些，主要来自以下两个方面：  

* 各个数据节点的时间不一致：每个数据节点很难完全恢复到一个真正的一致时间点上，通常只能做到大致一致，而这种大致一致通常足够好，除了以下情况
* 分片间的数据迁移：当一部分数据从一个片迁移到另一个片时，最终数据到底在哪里取决于config中的元数据。如果元数据与数据节点之间的时间差异正好导致数据初阶已经迁移到新分片上，而元数据仍然认为数据在旧分片上，就会导致数据丢失情况发生。虽然这种情况发生的概率很小，但仍然有可能导致问题。
* 要避免上述问题，应先停止均衡器，只有在均衡器停止期间，增量恢复才能保证正确