# [keepalived](https://www.keepalived.org/index.html)

## [容器化运行](https://github.com/acassen/keepalived/tree/master/docker)

docker run --name keepalived --cap-add=NET_ADMIN --net=host -d keepalived

## [keepalived.conf](https://www.keepalived.org/manpage.html)

keepalived.conf 由关键字和{}组成层级结构。  
'#' 或 '!' 开头的为注释行。  

### include 文件名

include关键字可以用来引入其他配置文件。文件名可以是完全限定的或相对的路径名，可以包含通配符，可以包含csh风格的大括号表达式，如："{foo/{,cat,dog},bar}"