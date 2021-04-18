# MongoDB索引机制

## 索引机制中常见的术语

* Index: 索引
* Key: 键
* DataPage: 数据页
* Fetch: 抓取
* Covered Query: 查询覆盖（是指所需要的字段都在索引中，不需要额外的字段，就可以不再需要从数据页中加载数据）
* IXSCAN: 索引扫描
* COLLSCAN: 集合扫描
* Index Prefix: 索引前缀(当创建复合索引时，会有索引前缀)
    如: db.user.createIndex({firstName:1, lastName:1, gender:1, age: 1})  
    则此索引的前缀有：  
    {firstName:1}  
    {firstName:1, lastName:1}  
    {firstName:1, lastName:1, gender:1}  
    查询条件命中此索引的前缀，该索引也会生效，所以不需要过多地创建索引  
* Selectivity: 过滤性
    如在一个有10000条记录的集合中有：
    * 满足gender=F的记录有4000条
    * 满足city=SZ的记录有1000条
    * 满足ln=parker的记录有100条
    条件ln能过滤掉最多的数据，city其次，gender最少。所以ln的过滤性大于city大于gender。  
    所以假设要给条件gender==F && city== SZ && ln ==parker建索引的话，  
    应该是:db.user.createIndex({ln:1, city: 1, gender:1})

## 索引的工作原理：B-树结构