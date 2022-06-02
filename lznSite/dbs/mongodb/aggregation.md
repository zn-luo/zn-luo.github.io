# 聚合

整个聚合运算过程称为管道(Pipline),它是由多个步骤(Stage)组成的  
每个管道:
* 接受一系列文档(原始数据)
* 每个步骤对这些文档进行一系列运算
* 结果文档输出给下一个步骤

## 聚合运算的基本格式
```bash
pipline = [$stage1, $stage2, ...$stageN];  
db.<collection>.aggregate(
    pipline,
    {options}
);
```

## 步骤对比

步骤         |   作用  | SQL等价运算符    |
-------------|---------|-----------------|
$match       |   过滤  |  WHERE          | 
$project     |   投影  |  AS             |
$sort        |   排序  |  ORDER BY       |
$group       |   分组  |  GROUP BY       |
$skip/$limit | 结果限制 | SKIP/LIMIT     |
$lookup      | 左外连接 | LEFT OUTER JOIN|
$unwind      | 展开数组 |       N/A      |
$graphLookup |  图搜索  |       N/A      |
$facet/$bucket|分面搜索 |       N/A      |

## 常见步骤中的运算符

1. $match
    * $eq/$gt/$gte/$lt/$lte  
    * $and/$or/$not/$in  
    * $geoWithin/$intersect  
2. $project
    * 选择需要的或排除不需要的字段
    * $map/$reduce/$filter
    * $range
    * $multiply/$divide/$substract/$add
    * $year/$month/$dayOfMonth/$hour/$minute/$second
3. $group
    * $sum/$avg
    * $push/$addToSet
    * $first/$last/$max/$min

## MSQL与SQL几个对比
1. 例子1
    ```sql
    SELECT
        first_name AS '名',
        last_name AS '姓'
    FROM users
    WHERE gender = '男'
    SKIP 200
    LIMIT 15
    ```
    ```mql
    db.users.aggregate([
        {$match:{gender:"男"}},
        {$skip: 200},
        {$limit: 15},
        {$project:{
            "名": "$first_name",
            "姓": "$last_name"
        }}
    ]);
    ```
2. 例子2
    ```sql
    SELECT 
        department,
        COUNT(NULL) AS emp_qty
    FROM users
    WHERE gender = "女"
    GROUP BY department HAVING COUNT(*) < 10
    ```
    ```MQL
    db.users.aggregate([
        {$match:{gender:"女"}},
        {$group:{
            _id: "$department",
            emp_qty:{$sum:1}
        }},
        {$match:{
            emp_qty:{$lt:10}
        }}
    ]);
    ```

<Vssue :title="$title" :options="{ locale: 'zh' }" />