# 内置角色

MongoDB通过[基于角色的授权](https://www.mongodb.com/docs/manual/core/authorization/#std-label-roles)授予对数据和命令的访问权，并提供内置的角色，这些角色提供数据库系统中通常需要的不同级别的访问权。MongoDB也提供了[用户自定义角色](https://www.mongodb.com/docs/manual/core/security-user-defined-roles/#std-label-user-defined-roles)功能。

## 数据库用户角色

### read

提供读取所有非系统表和system.js表上的数据的能力。

read角色通过以下操作提供读访问:

* [changeStream](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-changeStream)
* [collStats](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-collStats)
* [dbHash](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-dbHash)
* [dbStats](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-dbStats)
* [find](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-find)
* [killCursors](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-killCursors)
* [listIndexes](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-listIndexes)
* [listCollections](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-listCollections)

### readWrite

readWrite角色包含了read角色所有的权限，同时增加了对所有非系统表和system.js表的修改权限。

readWrite角色提供了以下的操作：

* [changeStream](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-changeStream)
* [collStats](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-collStats)
* [convertToCapped](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-convertToCapped)
* [createCollection](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-createCollection)
* [dbHash](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-dbHash)
* [dbStats](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-dbStats)
* [dropCollection](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-dropCollection)
* [createIndex](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-createIndex)
* [dropIndex](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-dropIndex)
* [find](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-find)
* [insert](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-insert)
* [killCursors](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-killCursors)
* [listIndexes](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-listIndexes)
* [listCollections](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-listCollections)
* [remove](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-remove)
* [renameCollectionSameDB](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-renameCollectionSameDB)
* [update](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-update)

## 数据库管理员角色

数据库管理员角色有dbAdmin, dbOwner, userAdmin三种。

### dbAdmin

此角色提供执行管理任务的能力，例如与模式相关的任务、索引和收集统计信息。

该角色提供以下特权:

* [system.profile](https://www.mongodb.com/docs/manual/reference/system-collections/#mongodb-data--database-.system.profile)
  * [changeStream](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-changeStream)
  * [collStats](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-collStats)
  * [convertToCapped](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-convertToCapped)
  * [createCollection](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-createCollection)
  * [dbHash](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-dbHash)
  * [dbStats](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-dbStats)
  * [dropCollection](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-dropCollection)
  * [find](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-find)
  * [killCursors](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-killCursors)
  * [listCollections](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-listCollections)
  * [listIndexes](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-listIndexes)
  * [planCacheRead](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-planCacheRead)

* 所有非系统的表
  * [bypassDocumentValidation](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-bypassDocumentValidation)
  * [collMod](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-collMod)
  * [collStats](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-collStats)
  * [compact](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-compact)
  * [convertToCapped](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-convertToCapped)
  * [createCollection](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-createCollection)
  * [createIndex](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-createIndex)
  * [dbStats](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-dbStats)
  * [dropCollection](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-dropCollection)
  * [dropDatabase](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-dropDatabase)
  * [dropIndex](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-dropIndex)
  * [enableProfiler](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-enableProfiler)
  * [listCollections](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-listCollections)
  * [listIndexes](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-listIndexes)
  * [planCacheIndexFilter](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-planCacheIndexFilter)
  * [planCacheRead](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-planCacheRead)
  * [planCacheWrite](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-planCacheWrite)
  * [reIndex](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-reIndex)
  * [renameCollectionSameDB](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-renameCollectionSameDB)
  * [storageDetails](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-storageDetails)
  * [validate](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-validate)
  * dbAdmin角色并不包含所有的read权限，如find。

### dbOwner

数据库所有者可以对数据库执行任何管理操作。此角色包含了readWrite, dbAdmin 和 userAdmin角色的所有权限。

### userAdmin

提供了在当前数据库上创建和修改角色与用户的能力。由于userAdmin角色允许用户向任何用户(包括自己)授予任何特权，因此该角色还间接提供了超级用户对数据库的访问(如果作用域为admin数据库)，或者对集群的访问。

userAdmin角色提供以下操作:  

* [changeCustomData](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-changeCustomData)
* [changePassword](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-changePassword)
* [createRole](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-createRole)
* [createUser](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-createUser)
* [dropRole](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-dropRole)
* [dropUser](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-dropUser)
* [grantRole](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-grantRole)
* [revokeRole](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-revokeRole)
* [setAuthenticationRestriction](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-setAuthenticationRestriction)
* [viewRole](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-viewRole)
* [viewUser](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-viewUser)

注意: 具有此角色的用户可以为自己分配对该数据库的任何权限。在admin数据库上授予userAdmin角色具有进一步的安全影响，因为这间接提供了对集群的超级用户访问。在admin范围内，具有userAdmin角色的用户可以授予集群范围的角色或权限，包括userAdminAnyDatabase。

## 集群管理员角色

admin数据库包括以下角色，用于管理整个系统，而不仅仅是单个数据库。这些角色包括但不限于复制集和分片集群管理功能。

### clusterAdmin

提供了最大的集群管理访问权限。该角色结合了clusterManager、clusterMonitor和hostManager角色所具有的权限。此外，该角色还提供dropDatabase操作权限。

### clusterManager

提供了对集群的管理和监控操作权限。具有此角色的用户可以访问config数据库和local数据库。

* [cluster](https://www.mongodb.com/docs/manual/reference/resource-document/#std-label-resource-cluster)
  * [addShard](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-addShard)
  * [appendOplogNote](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-appendOplogNote)
  * [applicationMessage](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-applicationMessage)
  * [cleanupOrphaned](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-cleanupOrphaned)
  * [flushRouterConfig](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-flushRouterConfig)
  * [getDefaultRWConcern(New in version 4.4)](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-getDefaultRWConcern)
  * [listSessions(New in version 3.6)](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-listSessions)
  * [listShards](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-listShards)
  * [removeShard](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-removeShard)
  * [replSetConfigure](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-replSetConfigure)
  * [replSetGetConfig](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-replSetGetConfig)
  * [replSetGetStatus](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-replSetGetStatus)
  * [replSetStateChange](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-replSetStateChange)
  * [resync](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-resync)
  * [setDefaultRWConcern(New in version 4.4)](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-setDefaultRWConcern)
  * [setFeatureCompatibilityVersion](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-setFeatureCompatibilityVersion)
  * [setFreeMonitoring](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-setFreeMonitoring)
* 所有数据库
  * [clearJumboFlag(New in 4.2.3 and 4.0.15)](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-clearJumboFlag) 
  * [enableSharding](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-enableSharding)
  * [refineCollectionShardKey(New in 4.4)](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-refineCollectionShardKey) 
  * [moveChunk](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-moveChunk)
  * [splitVector](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-splitVector)

clusterManager为config和local数据库提供了额外的权限。

在config数据库中，提供了以下操作权限:

* config数据库上所有非系统的表
  * [collStats](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-collStats)
  * [dbHash](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-dbHash)
  * [dbStats](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-dbStats)
  * [enableSharding](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-enableSharding)
  * [find](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-find)
  * [insert](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-insert)
  * [killCursors](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-killCursors)
  * [listCollections](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-listCollections)
  * [listIndexes](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-listIndexes)
  * [moveChunk](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-moveChunk)
  * [planCacheRead](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-planCacheRead)
  * [remove](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-remove)
  * [splitVector](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-splitVector)
  * [update](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-update)
* [system.js](https://www.mongodb.com/docs/manual/reference/system-collections/#mongodb-data--database-.system.js)
  * [collStats](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-collStats)
  * [dbHash](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-dbHash)
  * [dbStats](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-dbStats)
  * [find](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-find)
  * [killCursors](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-killCursors)
  * [listCollections](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-listCollections)
  * [listIndexes](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-listIndexes)
  * [planCacheRead](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-planCacheRead)

在local数据库中，提供了以下操作权限:

* local数据库上所有非系统的表
  * [enableSharding](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-enableSharding)
  * [insert](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-insert)
  * [moveChunk](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-moveChunk)
  * [remove](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-remove)
  * [splitVector](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-splitVector)
  * [update](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-update)
* [system.replset](https://www.mongodb.com/docs/manual/reference/local-database/#mongodb-data-local.system.replset)表
  * [collStats](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-collStats)
  * [dbHash](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-dbHash)
  * [dbStats](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-dbStats)
  * [find](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-find)
  * [killCursors](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-killCursors)
  * [listCollections](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-listCollections)
  * [listIndexes](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-listIndexes)
  * [planCacheRead](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-planCacheRead)

### clusterMonitor

为监控工具提供只读访问权限。

允许在整个集群上执行以下操作:

* [checkFreeMonitoringStatus(New in version 4.0)](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-checkFreeMonitoringStatus)
* [connPoolStats](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-connPoolStats)
* [getCmdLineOpts](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-getCmdLineOpts)
* [getDefaultRWConcern(New in version 4.4)](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-getDefaultRWConcern)
* [getLog](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-getLog)
* [getParameter](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-getParameter)
* [getShardMap](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-getShardMap)
* [hostInfo](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-hostInfo)
* [inprog](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-inprog)
* [listDatabases](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-listDatabases)
* [listSessions(New in version 3.6)](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-listSessions)
* [listShards](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-listShards)
* [netstat](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-netstat)
* [replSetGetConfig](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-replSetGetConfig)
* [replSetGetStatus](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-replSetGetStatus)
* [serverStatus](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-serverStatus)
* [setFreeMonitoring(New in version 4.0)](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-setFreeMonitoring)
* [shardingState](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-shardingState)
* [top](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-top)

允许对集群中的所有数据库执行以下操作:

* [collStats](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-collStats)
* [dbStats](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-dbStats)
* [getShardVersion](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-getShardVersion)
* [indexStats](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-indexStats)
* [useUUID(New in version 3.6)](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-useUUID)

允许对集群的所有system.profile表执行find操作。

在config数据库中，允许执行以下操作:

* config数据库上所有非系统的表
  * [collStats](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-collStats)
  * [dbHash](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-dbHash)
  * [dbStats](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-dbStats)
  * [find](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-find)
  * [getShardVersion](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-getShardVersion)
  * [indexStats](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-indexStats)
  * [killCursors](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-killCursors)
  * [listCollections](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-listCollections)
  * [listIndexes](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-listIndexes)
  * [planCacheRead](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-planCacheRead)
* [system.js](https://www.mongodb.com/docs/manual/reference/system-collections/#mongodb-data--database-.system.js)表
  * [collStats](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-collStats)
  * [dbHash](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-dbHash)
  * [dbStats](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-dbStats)
  * [find](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-find)
  * [killCursors](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-killCursors)
  * [listCollections](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-listCollections)
  * [listIndexes](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-listIndexes)
  * [planCacheRead](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-planCacheRead)

在local数据库中，提供了以下操作权限:

* local数据库上的所有表
  * [collStats](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-collStats)
  * [dbHash](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-dbHash)
  * [dbStats](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-dbStats)
  * [find](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-find)
  * [getShardVersion](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-getShardVersion)
  * [indexStats](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-indexStats)
  * [killCursors](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-killCursors)
  * [listCollections](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-listCollections)
  * [listIndexes](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-listIndexes)
  * [planCacheRead](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-planCacheRead)
* [system.js](https://www.mongodb.com/docs/manual/reference/system-collections/#mongodb-data--database-.system.js)表
  * [collStats](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-collStats)
  * [dbHash](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-dbHash)
  * [dbStats](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-dbStats)
  * [find](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-find)
  * [killCursors](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-killCursors)
  * [listCollections](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-listCollections)
  * [listIndexes](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-listIndexes)
  * [planCacheRead](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-planCacheRead)
* [system.replset](https://www.mongodb.com/docs/manual/reference/local-database/#mongodb-data-local.system.replset), [system.profile](https://www.mongodb.com/docs/manual/reference/system-collections/#mongodb-data--database-.system.profile)
  * [find](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-find)

### hostManager

提供了监控和管理服务器的能力。

在整个集群上，提供以下操作权限:

* [applicationMessage](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-applicationMessage)
* [closeAllDatabases](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-closeAllDatabases)
* [connPoolSync](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-connPoolSync)
* [flushRouterConfig](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-flushRouterConfig)
* [fsync](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-fsync)
* [invalidateUserCache](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-invalidateUserCache)
* [killAnyCursor(New in version 4.0)](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-killAnyCursor) 
* [killAnySession(New in version 3.6)](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-killAnySession) 
* [killop](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-killop)
* [logRotate](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-logRotate)
* [oidReset](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-oidReset)
* [resync](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-resync)
* [rotateCertificates(New in version 5.0)](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-rotateCertificates) 
* [setParameter](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-setParameter)
* [shutdown](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-shutdown)
* [touch](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-touch)
* [unlock](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-unlock)

从4.4版开始，hostManager不再为集群提供[cpuProfiler](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-cpuProfiler)特权操作。

在集群的所有数据库上，提供[killCursors](https://www.mongodb.com/docs/manual/reference/privilege-actions/#mongodb-authaction-killCursors)操作权限。

## Backup与Restoration角色

admin数据库提供backup和restore角色用于备份和恢复数据。

### backup

提供了备份数据所需的最小权限。该角色提供足够的权限使用MongoDB Cloud Manager备份代理、Ops Manager备份代理，或者使用 mongodump备份整个mongod实例。
