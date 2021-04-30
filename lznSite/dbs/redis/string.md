# String类型

将字符串值 value 关联到 key 。  
时间复杂度： O(1)

## SET

```bash
redis> SET key "value"
OK
```

1. 可选参数

    * EX seconds ： 将键的过期时间设置为 seconds 秒。
    * PX milliseconds ： 将键的过期时间设置为 milliseconds 毫秒。
    * NX ： 只在键不存在时， 才对键进行设置操作。
    * XX ： 只在键已经存在时， 才对键进行设置操作。

2. 示例

    使用 EX 选项：

    ```bash
    redis> SET key-with-expire-time "hello" EX 10086
    等同于
    redis> SETEX key-with-expire-time 10086 "hello" 
    ```

    使用 PX 选项：

    ```bash
    redis> SET key-with-expire-time "hello" PX 10086
    等同于
    redis> PSETEX key-with-expire-time 10086 "hello" 
    ```

    使用 NX 选项：

    ```bash
    redis> SET not-exists-key "value" NX
    OK  # 键不存在时，返回OK, 设置成功
    等同于
    redis> SETNX not-exists-key "value"
    ```

## STRLEN key

返回键 key 储存的字符串值的长度。  
复杂度： O(1)

示例

```bash
redis> SET key "Hello Redis"
OK

redis> STRLEN key
(integer) 11
```

## APPEND key value

把 value 追加到键 key 现有值的末尾。如果 key 不存在， APPEND 就简单地将键 key 的值设为 value ， 就像执行 SET key value 一样。  
时间复杂度： 平摊O(1)  

示例

```bash
```
