# netstat

netstat 命令用于显示各种网络相关信息，如网络连接，路由表，接口状态 (Interface Statistics)，masquerade 连接，多播成员 (Multicast Memberships) 等等。

## 参数说明

* -a 或 -all             显示所有套接字
* -c 或 -continuous      持续列出网络状态
* -t 或 -tcp             仅显示tcp相关选项
* -u 或 -udp             仅显示udp相关选项
* -n 或 -numeric         拒绝显示别名，能显示数字的全部转化为数字
* -l 或 -listening       仅列出在Listen(监听)的服务状态
* -p 或 -programs        显示建立相关链接的程序名
* -s 或 -statistice      显示网络统计数据
* -M 或 –masquerade      显示伪装的网络连线
* -h 或 –help            帮助

## 查询TCP连接数

```bash
netstat -ant|awk '/^tcp/ {++S[$NF]} END {for(a in S) print (a,S[a])}'
```

结果输出：

LAST_ACK 63  
LISTEN 39  
SYN_RECV 75  
CLOSE_WAIT 46  
ESTABLISHED 96754  
FIN_WAIT1 60  
FIN_WAIT2 59  
CLOSING 11  
SYN_SENT 98  
TIME_WAIT 70  

## TCP连接状态表说明

状态        | 说明
------------| ------------
CLOSED      | 表示TCP连接是“关闭着的”或“未打开的”。
LISTEN      | 服务器端的某个SOCKET处于监听状态，可以接受客户端的连接。
SYN_SENT    | 表示客户端已发送SYN报文。客户端的SOCKET执行connect()进行连接时，首先发送SYN报文，随后进入到SYN_SENT状态，等待服务端的确认报文。
SYN_RCVD    | 表示服务端接收到了客户端请求连接的SYN报文。同时服务端也会回送ACK确认报文给客户端。
ESTABLISHED | 表示TCP连接已经成功建立，正常数据传输状态。
FIN_WAIT_1  | SOCKET在ESTABLISHED状态时，调用close()主动关闭连接，向对方发送了FIN报文，然后进入到FIN_WAIT_1状态。
FIN_WAIT_2  | SOCKET在FIN_WAIT_1状态时，收到对方的ACK响应报文后，则进入到FIN_WAIT_2状态。*注：FIN_WAIT_2是没有超时时钟，累积越来越多的FIN_WAIT_2状态会导致内核crash。*
TIME_WAIT   | SOCKET在FIN_WAIT_2状态时，收到了对方的FIN报文，并发送出了ACK报文，则进入到TIME_WAIT状态。此状态下的TCP连接会等待2*MSL(Max Segment Lifetime，最大分段生存期，指一个TCP报文在Internet上的最长生存时间)
CLOSING     | 两边同时尝试关闭。
CLOSE_WAIT  | 表示正在等待关闭。服务端收到客户端的FIN报文请求断开后，给客户端响应ACK确认服务，此时服务端TCP进入CLOSE_WAIT状态。等待服务端发送未传完的数据后再关闭服务端与客户端方向的连接。
LAST_ACK    | SOCKET在CLOSE_WAIT状态时，发送FIN报文后，等待对方的ACK报文的时候，就处于LAST_ACK状态。当收到对方的ACK报文后，也就可以进入到CLOSED 可用状态了。

## 常用用法

1. 查找请求数前20个IP（常用于查找攻来源）

   ```linux
   netstat -anlp |grep 80 |grep tcp |awk '{print $5}' |awk -F: '{print $1}' |sort |uniq -c |sort -nr |head -n20
   ```

2. 查找较多time_wait连接

   ```linux
   netstat -n |grep TIME_WAIT |awk '{print $5}' |sort |uniq -c |sort -rn 
   ```
  
3. 找查较多的SYN连接

   ```linux
   netstat -an | grep SYN | awk '{print $5}' | awk -F: '{print $1}' | sort | uniq -c | sort -nr
   ```
