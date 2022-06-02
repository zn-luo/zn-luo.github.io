# 切片相关的命令

## 将按区分片的User表取消切片

步骤一:

```bash
sh.disableBalancing("testZone.users")   #关掉平衡功能
sh.removeTagRange(                      #移除CN区域范围
  "testZone.users",
  { "country" : "CN", "_id" : MinKey },
  { "country" : "CN", "_id" : MaxKey },
  "CN"
)
sh.removeShardTag("rs1","CN")           #移除切片rs1的CN标签

sh.removeTagRange(                      #移除RU区域范围
  "testZone.users",
  { "country" : "RU", "_id" : MinKey },
  { "country" : "RU", "_id" : MaxKey },
  "RU"
)
sh.removeShardTag("rs0","RU")           #移除切片rs0的RU标签
sh.moveChunk("testZone.users",{ "country" : "CN", "_id" : "*" }, "rs0") #将rs1上的数据动到rs0上
```

步骤二：
执行下面删除切片键的步骤，将旧的切片键删除。

## 删除切片键

```bash
mongos> use config
switched to db config
mongos> db.collections.remove({_id:"test.coll"})  
WriteResult({ "nRemoved" : 1 })
mongos> db.chunks.remove({ns:"test.coll"})
WriteResult({ "nRemoved" : 20 })
mongos> db.locks.remove({_id:"test.coll"})
WriteResult({ "nRemoved" : 1 })
mongos> use admin
switched to db admin
mongos> db.adminCommand("flushRouterConfig")  ##刷新路由配置
```

<Vssue :title="$title" :options="{ locale: 'zh' }" />