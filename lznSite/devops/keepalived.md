# [keepalived](https://www.keepalived.org/index.html)

Keepalived是一个用C语言编写的路由软件。可以实现服务架构的负载均衡和高可用。

## [容器化运行](https://github.com/acassen/keepalived/tree/master/docker)

docker run --name keepalived --cap-add=NET_ADMIN --net=host -d keepalived

## [keepalived.conf](https://www.keepalived.org/manpage.html)

keepalived.conf 由关键字和{}组成层级结构。  
'#' 或 '!' 开头的为注释行。  

### include 文件名

include关键字可以用来引入其他配置文件。  
文件名可以是完全限定的或相对的路径名，可以包含通配符，可以包含csh风格的大括号表达式，如："{foo/{,cat,dog},bar}"。  
打开include文件后，当前目录被设置为文件本身的目录，因此从文件中包含的任何相对路径都是相对于包含文件本身的目录的。  

### 参数语法

BOOL类型的值选项有： on|off|true|false|yes|no  
TIMER类型的值是一个以秒为单位的时间值，包含小数的，如2.71828 或 3  

### 常用的例子配置

```conf
global_defs {
    notification_email {                           #接收通知的邮件地址
      xiaoming@example.com
      xiaodong@example.com
    }
    notification_email_from adminwo@example.com    #发送通知的邮件地址，keepalived在发生例如切换操作时会发送通知邮件。
    smtp_server mail.example.com                   #邮件服务器地址
    smtp_connect_timeout 30                        #smtp服务器连接超时时间
    router_id lb01                                 #机器标识，默认值为local host name
}
vrrp_instance VI_1 {
    state BACKUP #指定实例的初始状态MASTER或BACKUP。当所有的机器都正常启动后会触发选举机制，优先权最高的会成master节点，所以初始状态不一定是最终状态 
    interface eth1  #实例绑定的网卡
    virtual_router_id 55 #设置虚拟路由ID，取值范围1-255。用于区分运行在同一NIC上的多个vrrpd实例。
    priority 100          #设置本节点的优先级
    advert_int 1          #设置检查间隔，默认为1秒。Master每隔这样一个时间间隔会发送广播报文以通知组内其它路由器自己正常工作
    authentication {      #设置认证方式和密码，主从要一样
        auth_type PASS    #设置类型有PASS|AH两种，一般建议使用PASS，AH建议使用。
        auth_pass 123456
    }
    virtual_ipaddress { #设置虚拟IP地址，会随着state的变化而增删，当state为master时添加，当state为backup时删除。
        192.168.11.5 dev eth1 label eth1:1
    }
    track_script {  
        check_nginx  
    }
}
vrrp_script check_nginx {  
    script "/etc/keepalived/nginx_check.sh"  #检测 nginx 状态的脚本路径
    interval 2  #检测时间间隔,每2秒检测一次
    weight -5  #检测失败(脚本执行状态码返回非0)则优先级减5
    fall 3    #连续检测3次失败才算是真失败。会修改优级级，用weight的值来减。
    rise 2    #检测2次成功才算是成功，不会修改优先级。
}  
```
