# [logrotate](https://linux.die.net/man/8/logrotate)

logrotate是一个日志文件管理工具。 它能够自动分割，压缩，删除和邮件发送日志文件。 Linux系统一般默认会安装logrotate工具。  
logrotate是基于CRON来执行定期任务，配置位于/etc/cron.daily/logrotate。

## 默认的配置文件位置

1. /etc/logrotate.conf， 此文件是主配置文件
2. /etc/logrotate.d/， 此目录下的所有文件，在/etc/logrotate.conf主文件会全被引入

## 手动执行命令验证配置文件是否有效

1. logrotate命令加-f参数来执行指定的logrotate配置文件

    ```bash
    /usr/sbin/logrotate  -f /etc/logrotate.d/standalone1-mosquitto  #standalone1-mosquitto新加的配置文件，一般建议按服务名称命名
    ```

2. 执行前可通过-d参数来debug配置文件

    ```bash
    /usr/sbin/logrotate -d -f /etc/logrotate.d/standalone1-mosquitto   #standalone1-mosquitto新加的配置文件，一般建议按服务名称命名
    ```

## 常用参数说明

compress                            通过gzip压缩转储的日志  
nocompress                          不做gzip压缩处理  
create mode owner group             轮转时指定创建新文件的属性，如create 0777 nobody nobody  
delaycompress                       和compress 一起使用时，转存的日志文件等到下一次转存时才压缩  
missingok                           如果日志丢失，不报错继续滚动下一个日志  
ifempty                             即使日志文件为空文件也做轮转，这个是logrotate的默认选项。  
notifempty                          当日志文件为空时，不进行轮转  
mail xxx@xxx.com                    把转存的日志文件发送到指定的地址  
nomail                              转存时不发送日志文件  
olddir directory                    指定存放轮转日志文件的目录，必须和当前日志文件在同一个文件系统  
noolddir                            转存后的日志文件和当前日志文件放在同一个目录下  
dateext                             使用当前日期作为命名格式  
sharedscripts                       运行postrotate脚本，作用是在所有日志都轮转后统一执行一次脚本。如果没有此设置，则每个日志轮转后都会执行一次脚本  
postrotate/endscript                在logrotate转存之后配置执行的指令，例如重启 (kill -HUP) 某个服务！shell命令需要包含在postrotate与endscript之间

例子(/etc/logrotate.d/standalone1-mosquitto)：

```bash
/data/tct-compose/standalone1/mosquitto/log/mosquitto.log {
su jkins devops             #切换到jkins用户devops组
daily                       #每天转存日志
create 0777 jkins devops    #轮转时指定新创建的文件属性
rotate 7                    #保留7个日志文件
missingok                   #如果日志丢失，不报错继续滚动下一个日志  
notifempty                  #当日志文件为空时，不进行轮转
dateext                     #使用当前日期作为命名格式 
sharedscripts               #运行postrotate脚本
postrotate                  #转后重启服务
  if [ -f /var/run/mosquitto.pid ]; then
      kill -USR1 `cat /var/run/mosquitto.pid`
  fi
endscript
}
```

## 容器工具

[blacklabelops/logrotate](https://hub.docker.com/r/blacklabelops/logrotate)可以用来对docker容器的标准输出日志文件进行rotate

```bash
docker run -d \
  -v /var/lib/docker/containers:/var/lib/docker/containers \
  -v /var/log/docker:/var/log/docker \
  -e "LOGS_DIRECTORIES=/var/lib/docker/containers /var/log/docker" \
  blacklabelops/logrotate
```
