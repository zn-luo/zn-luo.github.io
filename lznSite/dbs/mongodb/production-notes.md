# [生产环境注意事项](https://www.mongodb.com/docs/manual/administration/production-notes/)

**备注**:  
MongoDB 4.2移除了已弃用的MMAPv1存储引擎。要将MMAPv1存储引擎部署改为WiredTiger存储引擎，请查看:  

* [Change Standalone to WiredTiger](https://www.mongodb.com/docs/manual/tutorial/change-standalone-wiredtiger/)
* [Change Replica Set to WiredTiger](https://www.mongodb.com/docs/manual/tutorial/change-replica-set-wiredtiger/)
* [Change Sharded Cluster to WiredTiger](https://www.mongodb.com/docs/manual/tutorial/change-sharded-cluster-wiredtiger/)

## 平台支持

### 平台注意事项

#### x86_64

MongoDB要求最低版本的x86_64微架构，如下所示:

* 对于Intel的x86_64, MongoDB要求以下型号之一:
  * Sandy Bridge 或更高版本的核心处理器。
  * Tiger Lake 或更高版本的 Celeron 或 Pentium 处理器。
* 对于AMD的x86_64, MongoDB要求:
  * Bulldozer 或更高版本的处理器。

从MongoDB 5.0 开始，mongod、mongos 和旧版mongo shell不再支持不满足以下最低微架构要求的x86_64平台。

* MongoDB 仅支持运行 Red Hat Compatible Kernel (RHCK) 的 Oracle Linux。MongoDB 不支持 Unbreakable Enterprise Kernel (UEK)。
* MongoDB 5.0 需要使用 AVX 指令集，可用的Intel和AMD处理器查看<https://en.wikipedia.org/wiki/Advanced_Vector_Extensions#CPUs_with_AVX>

#### ARM64

arm64 上的 MongoDB 需要 ARMv8.2-A 或更高版本的微架构。

从 MongoDB 5.0 开始，mongod、mongos 和传统的 mongo shell 不再支持不满足此最低微架构要求的 arm64 平台。

### 平台支持矩阵

平台支持矩阵明细查看<https://www.mongodb.com/docs/manual/administration/production-notes/#platform-support-matrix>

#### 推荐使用的平台

虽然 MongoDB 支持多种平台，但建议在 x86_64 架构上使用以下操作系统运行生产环境：  

* Amazon Linux 2
* Debian 10
* RHEL / CentOS 7 and 8
* SLES 12 and 15
* Ubuntu LTS 18.04 and 20.04
* Windows Server 2016 and 2019

#### 使用最新的稳定软件包

软件安装都应该使用最新的稳定软件包。所有 MongoDB 版本都可以在[MongoDB下载中心页](http://www.mongodb.com/download-center/?tck=docs)找到。

### MongoDB dbPath

dbPath 目录中的文件必须与配置的存储引擎相对应。如果 dbPath 包含由 --storageEngine 指定的存储引擎以外的存储引擎创建的数据文件，mongod 将不会启动。

mongod 必须拥有指定[dbPath](https://www.mongodb.com/docs/manual/reference/configuration-options/#mongodb-setting-storage.dbPath)的读写权限。

### 并发

#### [WiredTiger](https://www.mongodb.com/docs/manual/core/wiredtiger/#std-label-storage-wiredtiger)

WiredTiger 支持readers和writers对集合中文档的并发访问。客户端可以在写操作进行的同时读取文档，多个线程可以同时修改集合中的不同文档。

### 数据一致性

#### Journaling

MongoDB使用写前日志记录到磁盘上的[journal](https://www.mongodb.com/docs/manual/reference/glossary/#std-term-journal)。Journaling 保证 MongoDB 可以在 mongod 由于崩溃或其他严重故障而终止的情况下快速恢复写入日志但未写入数据文件的[写操作](https://www.mongodb.com/docs/manual/crud/)。

启用日志以确保 mongod 能够恢复其数据文件并在崩溃后保持数据文件处于有效状态。更多信息查看[Journaling](https://www.mongodb.com/docs/manual/core/journaling/)

从 MongoDB 4.0 开始，不能为使用 WiredTiger 存储引擎的副本集成员指定[--nojournal](https://www.mongodb.com/docs/manual/reference/program/mongod/#std-option-mongod.--nojournal)选项或[storage.journal.enabled: false](https://www.mongodb.com/docs/manual/reference/configuration-options/#mongodb-setting-storage.journal.enabled)。

#### Read Concern

从 MongoDB 3.6 开始，如果写请求确认，你可以使用[causally consistent sessions](https://www.mongodb.com/docs/manual/core/read-isolation-consistency-recency/#std-label-sessions)来读取自己的写入。
