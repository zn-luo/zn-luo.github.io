# window 访问共享资源报错

windows访问samba共享资源报错:不允许一个用户使用一个以上用户名与一个服务器或共享资源的多重连接。如下图所示  
![多重连接](/imgs/windwos/net-use.PNG)

## 原因分析

曾经对此服务器的资源有过连接，连接断开后操作系统并未将连接状态清除。  
可以使用net use命令查看缓存状态，如下图所示:  
![net use](/imgs/windwos/net-use-1.PNG)

## 解析方法

用命令删除缓存:

```sh
net use \\192.168.1.55\shareA /del /y
```

删除后重新连接登陆

<Vssue :title="$title" :options="{ locale: 'zh' }" />