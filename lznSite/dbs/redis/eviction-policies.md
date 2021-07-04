# [Redis内存驱逐策略](https://redis.io/topics/lru-cache)

Redis是比较流行的缓存系统。为防止内存无限制地增长，需要将内存中旧数据占用的空间释放出来给新添加数据使用。  
所以redis提供了最大内存(maxmemory)设置及旧数据驱逐策略的功能。

## maxmemory 配置

1. 在配置文件redis.conf添加如下配置，可以限制redis的最大内存使用量：

    ```bash
    maxmemory 14Gb
    ```

2. 通过命令设置最大内存使用量,此方式设置不会持久化：

    ```bash
    config set maxmemory 14Gb
    ```

备注：maxmemory 被设置为0意味着无内存限制。64位的系统默认不限制，32位系统默认情况隐式地限制最大内存为3G。

## 驱逐策略

当redis内存达到maxmemory限制时，会根据maxmemory-policy设置的策略进行内存调整。

可用的策略有：

1. noeviction: 当内存达到最大限制后客户端尝试执行可能导致使用更多内存的命令时返回错误(一般情况是写命令)。
2. allkeys-lru: 为新数据腾出内存空间时，优先驱逐最近使用较少(LRU)的key。
3. volatile-lru: 优先驱逐最近使用较少的且已设置过期的key。
4. allkeys-random: 为新数据腾出内存空间时，随机删除旧key。
5. volatile-random: 随机删除已设置过期的key。
6. volatile-ttl: 驱逐已设置过期的key，且优先驱逐TTL比较短的key。

当前提条件不匹配时，volatile-lru, volatile-random 与 volatile-ttl 策略行为会和noeviction 相似。

### 配置驱逐策略

1. 在配置文件redis.conf添加如下配置：

    ```bash
    maxmemory-policy noeviction  #默认配置
    ```

2. 通过命令设置策略,此方式设置不会持久化：

    ```bash
    config set maxmemory-policy allkeys-lru
    ```

### 驱逐流程

* 客户端执行新命令，导致产生新数据。
* Redis检查内存使用情况，如果大于maxmemory限制，会根据策略驱逐旧数据。
* Redis执行新命令，以此类推。
