# 用户自定义角色

MongoDB提供了许多内置角色。如果内置角色无法满足描述权限集，可以创建自定义角色。

## 角色管理接口

MongoDB提供了[db.createRole()](https://www.mongodb.com/docs/manual/reference/method/db.createRole/#mongodb-method-db.createRole)方法添加角色。MongoDB还提供了更新现有自定义角色的方法。更多方法请查看[Role Management](https://www.mongodb.com/docs/manual/reference/method/#std-label-role-management-methods)。

## 作用域

添加角色时，在指定的数据库中创建角色。MongoDB使用数据库和角色名的组合来唯一定义一个角色。

除了在admin数据库中创建的角色外，角色只能包含适用于其数据库的权限，并且只能从其数据库中的其他角色继承权限。

在admin数据库中创建的角色能够包含应用于admin数据库、其他数据库或集群资源的权限，并且可以从其他数据库和admin数据库中的角色继承权限。

## 角色数据集中化

MongoDB将所有的角色信息存储在admin数据库的system.roles表。

不要直接访问此表，要通过[角色管理命令](https://www.mongodb.com/docs/manual/reference/command/#std-label-role-management-commands)来管理自定的角色。

<Vssue :title="$title" :options="{ locale: 'zh' }" />