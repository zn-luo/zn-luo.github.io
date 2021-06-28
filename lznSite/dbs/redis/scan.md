# [扫描命令](https://redis.io/commands/scan)

从2.8.0版本开始可用。扫描命令可用来批量遍历相关的数据。  
扫描命令有scan,sscan,hscan,zscan命令。  
SCAN: 在当前选定的数据库进行迭代遍历。  
SSCAN: 对Set类型元素迭代遍历。  
HSCAN: 迭代hash类型的字段及其相关的值。  
ZSCAN: 迭代Sorted Set类型的元素及其相关的分数。  

## scan命令

语法如下所示：

```bash
SCAN cursor [MATCH pattern] [COUNT count] [TYPE type]
```

示例如下所示：
![scan用法](/imgs/dbs/redis/redis-scan1.PNG)  
如上图所示第一次调用scan，游标cursor为0，返回的结果为两个值的数组。  
第一位为下次调用时需要用到的游标(cursor),第二位为数组类型的数值结果。  
直到可调用游标为0，则意味着遍历结束。  

* COUNT: 此参数可以设置每次扫描返回元素的个数，默认值为10。
* MATCH: 此参数可以设置glob-style模式匹配，进行过虑。  
  注意：匹配过滤器是在数据从集合检索出来后，返回给客户端前应用的。
* TYPE: 从版本6.0开始可用。此参数可以设置返回指定类型的数据。
  注意：类型过滤器也是在数据从集合检索出来后，返回给客户端前应用的。

### MATCH参数

例子1

```bash
redis 127.0.0.1:6379> sadd newset 1 2 3 basketball baseball badminton
(integer) 6
redis 127.0.0.1:6379> sscan newset 0 match b*
1) "0"
2) 1) "basketball"
   2) "baseball"
   3) "badminton"
```

例子2  
当从集合检索数据后，应用上过滤条件后有可能满足条件的数值为空，则会返回空结果。

```bash
redis 127.0.0.1:6379> scan 0 MATCH *11*
1) "288"
2) 1) "key:911"
redis 127.0.0.1:6379> scan 288 MATCH *11*
1) "224"
2) (empty list or set)                    #当前迭代没有满足MATCH过滤的数值
redis 127.0.0.1:6379> scan 224 MATCH *11*
1) "80"
2) (empty list or set)
redis 127.0.0.1:6379> scan 80 MATCH *11*
1) "176"
2) (empty list or set)
redis 127.0.0.1:6379> scan 176 MATCH *11* COUNT 1000
1) "0"
2)  1) "key:611"
    2) "key:711"
    3) "key:118"
    4) "key:117"
    5) "key:311"
    6) "key:112"
    7) "key:111"
    8) "key:110"
    9) "key:113"
   10) "key:211"
   11) "key:411"
   12) "key:115"
   13) "key:116"
   14) "key:114"
   15) "key:119"
   16) "key:811"
   17) "key:511"
```

### TYPE参数

此参数从版本6.0开始可用。只能SCAN命令才有此参数可用。

例子

```bash
redis 127.0.0.1:6379> GEOADD geokey 0 0 value
(integer) 1
redis 127.0.0.1:6379> ZADD zkey 1000 value
(integer) 1
redis 127.0.0.1:6379> TYPE geokey
zset
redis 127.0.0.1:6379> TYPE zkey
zset
redis 127.0.0.1:6379> SCAN 0 TYPE zset
1) "0"
2) 1) "geokey"
   2) "zkey"
```

## python实现各类大key的删除

![python实现批量删除大数据的key](/files/pys/redis_del_large_key.py)