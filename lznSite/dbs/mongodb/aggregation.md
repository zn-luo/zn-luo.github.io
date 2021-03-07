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

## 常见步骤对比

步骤         |   作用  | SQL等价运算符    |
-------------|---------|-----------------|
$match       |   过滤  |  WHERE          | 
$project     |   投影  |  AS             |
$sort        |   排序  |  ORDER BY       |
$group       |   分组  |  GROUP BY       |
$skip/$limit | 结果限制 | SKIP/LIMIT     |
$lookup      | 左外连接 | LEFT OUTER JOIN|