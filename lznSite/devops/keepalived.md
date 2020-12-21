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
