# mpstat

mpstat全称为Multiprocessor Statistics。是实时系统监控工具。

## 语法

```linux
Usage: mpstat [ options ] [ <interval> [ <count> ] ]
Options are:
[ -A ] [ -u ] [ -V ] [ -I { SUM | CPU | SCPU | ALL } ]
[ -P { <cpu> [,...] | ON | ALL } ]
```
-P 表示监控哪个CPU， \<cpu\>的取值范围为0到cpu个数-1, ALL表示监控所有  
interval 相邻的两次采样的间隔时间  
count 采样的次数  

当没有参数时mpstat则显示系统启动以后所有信息的平均值。当有interval时，第一行的信息为自系统启动以来的平均信息。从第二行开始，输出为前一个interval时间段的平均信息。  

## 使用示例
1. 
    ```linux
    mpstat
    ```
    ![mpstat命令显示内容](/imgs/commonCmds/mpstat1.PNG)
2. 
    ```linux
    mpstat 2 3
    ```
    ![mpstat命令显示内容](/imgs/commonCmds/mpstat2.PNG)
3. 
    ```linux
    mpstat -P ALL 1
    ```
    ![mpstat命令显示内容](/imgs/commonCmds/mpstat3.PNG)