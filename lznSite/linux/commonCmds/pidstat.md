# pidstat

pidstat是一个常用的进程性能分析工具，用来实时查看进程的CPU、内存、I/O以及上下文切换等性能指标。它是sysstat工具的一个命令。  
pidstat首次运行时显示自系统启动开始的各项统计信息，之后运行pidstat将显示自上次运行该命令以后的统计信息。可以通过指定统计的次数和时间来获得所需的统计信息。  

## 安装命令

1. Debian/Ubuntu系统安装： apt-get install sysstat
2. CentOS/Fedora/RHEL系统安装： yum install sysstat

## 用法
```linux
Usage: pidstat [ options ] [ <interval> [ <count> ] ]
Options are:
[ -d ] [ -h ] [ -I ] [ -l ] [ -r ] [ -s ] [ -t ] [ -U [ <username> ] ] [ -u ]
[ -V ] [ -v ] [ -w ] [ -C <command> ] [ -p { <pid> [,...] | SELF | ALL } ]
[ -T { TASK | CHILD | ALL } ]
```

## 常用参数说明

* -u: 默认参数，显示各个进程的cpu使用统计
* -r: 显示各个进程的内存使用统计
* -d: 显示各个进程的IO使用情况
* -p: 指定进程id
* -w: 显示每个进程的上下文切换情况
* -V: 显示版本号
* -l: 显示命令名和所有参数
* -t: 同时显示线程的统计信息
* -T {TASK | CHILD | ALL}: 这个选项指定了pidstat必须监控的内容，TASK是默认的，单个任务的报告。 CHILD指定了进程和子进程的全局报告。ALL相当于TASK加CHILD。  
注意：TASK和CHILD的全局统计信息和pidstat选项无关。这些统计信息不会对应到当前的统计间隔里，这些统计信息只有在子线程kill或者完成的时候才会被收集。

## 使用示例

1. 
    ```linux
    pidstat -u -p ALL
    ```
    ![pidstat1命令显示内容](/imgs/commonCmds/pidstat1.PNG)

    说明：  
    * PID: 进程ID
    * %usr: 进程在用户空间占用cpu的百分比
    * %system: 进程在内核空间占用cpu的百分比
    * %guest：进程在虚拟机占用cpu的百分比
    * %CPU：进程占用cpu的百分比
    * CPU：处理进程的cpu编号
    * Command：当前进程对应的命令
2. 
    ```linux
    pidstat -r -p 1649 1 4
    ```
    ![pidstat2命令显示内容](/imgs/commonCmds/pidstat2.PNG)

    说明：  
    进程号为1649的进程，4秒内的内存使用情况，每秒展示一次，展示4次！  
    * PID: 进程ID
    * minflt/s：任务每秒发生的次要错误，不需要从磁盘中加载页
    * majflt/s：任务每秒发生的主要错误，需要从磁盘中加载页
    * VSZ： 虚拟地址大小，虚拟内存的使用情况，单位(KB)
    * RSS: 常驻内存大小，非交换区内存使用情况，单位(KB)
    * %MEM：RSS占总内存的百分比
    * Command: 当前进程对应的命令
3. 
    ```linux
    pidstat -d
    ```
    ![pidstat3命令显示内容](/imgs/commonCmds/pidstat3.PNG)

    说明：  
    * PID: 进程ID
    * kB_rd/s：每秒从磁盘读取的数据大小，单位(KB)
    * kB_wr/s：每秒写入磁盘的数据大小，单位(KB)
    * kB_ccwr/s: 任务取消写入磁盘的数据大小，单位(KB)。当任务截断脏pagecache的时候会发生。
    * Command: 当前进程对应的命令
4. 
    ```linux
    pidstat -w
    ```
    ![pidstat4命令显示内容](/imgs/commonCmds/pidstat4.PNG)

    说明：  
    * PID: 进程ID
    * cswch/s：每秒主动任务上下文切换数量
    * nvcswch/s：每秒被动任务上下文切换数量
    * Command: 当前进程对应的命令
5. 
    ```linux
    pidstat -p 1649 -t
    ```
    ![pidstat5命令显示内容](/imgs/commonCmds/pidstat5.PNG)

    说明：  
    * TGID: 表示主进程，显示的是主进程ID
    * TID: 显示子进程ID
    * %usr：进程在用户空间占用cpu的百分比
    * %system：进程在内核空间占用cpu的百分比
    * %guest：进程在虚拟机占用cpu的百分比
    * %CPU：进程占用cpu的百分比
    * CPU: 处理进程的cpu编号
    * Command: 当前进程对应的命令