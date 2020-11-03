# netstat

netstat 命令用于显示各种网络相关信息，如网络连接，路由表，接口状态 (Interface Statistics)，masquerade 连接，多播成员 (Multicast Memberships) 等等。

## 查询TCP连接数

```bash
netstat -ant|awk '/^tcp/ {++S[$NF]} END {for(a in S) print (a,S[a])}'
```

结果输出：

LAST_ACK 34  
SYN_RECV 328  
ESTABLISHED 80  
FIN_WAIT1 229  
FIN_WAIT2 36  
CLOSING 34  
TIME_WAIT 16722  

## TCP连接状态表说明

状态        | 说明
------------| ------------
CLOSED      | 表示TCP连接是“关闭着的”或“未打开的”。
LISTEN      | 服务器端的某个SOCKET处于监听状态，可以接受客户端的连接。
SYN_SENT    | 表示客户端已发送SYN报文。客户端的SOCKET执行connect()进行连接时，首先发送SYN报文，随后进入到SYN_SENT状态，等待服务端的确认报文。
SYN_RCVD    | 表示服务端接收到了客户端请求连接的SYN报文。同时服务端也会回送ACK确认报文给客户端。
ESTABLISHED | 表示TCP连接已经成功建立，正常数据传输状态。
FIN_WAIT_1  | SOCKET在ESTABLISHED状态时，调用close()主动关闭连接，向对方发送了FIN报文，然后进入到FIN_WAIT_1状态。
FIN_WAIT_2  | SOCKET在FIN_WAIT_1状态时，收到对方的ACK响应报文后，则进入到FIN_WAIT_2状态。
TIME_WAIT   | SOCKET在FIN_WAIT_2状态时，收到了对方的FIN报文，并发送出了ACK报文，则进入到TIME_WAIT状态。
