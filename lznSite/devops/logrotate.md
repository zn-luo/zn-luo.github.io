# [logrotate](https://linux.die.net/man/8/logrotate)

logrotate是一个日志文件管理工具。 它能够自动分割，压缩，删除和邮件发送日志文件。 Linux系统一般默认会安装logrotate工具。   

## 默认的配置文件位置

1. /etc/logrotate.conf， 此文件是主配置文件
2. /etc/logrotate.d/， 此目录下的所有文件，在/etc/logrotate.conf主文件会全被引入
