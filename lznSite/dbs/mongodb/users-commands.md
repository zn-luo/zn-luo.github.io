# 用户角色相关的命令

## 添加超级管理员

```bash
db.getSiblingDB("admin").createUser({
  user: "superAdmin",
  pwd: "super-Admin-passwd",
  roles: [{role: "root", db: "admin"}]
});
```

## 创建指定数据库的拥有者

```bash
db.getSiblingDB("myDB").createUser({
  user: "myDBOwner",
  pwd: "myDBOwner123",
  roles:[{role:"dbOwner",db:"myDB"}]
});
```

<Vssue :title="$title" :options="{ locale: 'zh' }" />