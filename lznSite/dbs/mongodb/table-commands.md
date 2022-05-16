# 表相关的命令

## 给不存在的字段s添加空字符串

```bash
db.users.update({'country': {$exists: false}}, {$set:{'country':''}}, {multi:true})
```
