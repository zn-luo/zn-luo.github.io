# URI与URL

## 定义

URL：RFC1738(1994.12), Uniform Resource Locator,表示资源的位置，期望提供查找资源的方法  
URN: RFC2141(1997.5), Uniform Resource Name,期望为资源提供持久的、与位置无关的资源标识方式，并允许简单地将多个命名空间映射到单个URN命名空间  
URI：RFC1630(1994.6)、RFC3986(2005.1,取代RFC2396和RFC2732)，Uniform Resource Identifier,用以区分资源，是URL和URN的超集，用以取代URL和URN概念

### Uniform Resource Identifier 统一资源标识符

* Uniform统一
    * 允许不同种类的资源在同一上下文中出现(例如：同一个html页面中可以包含多个资源链接，图片、视频、javascript脚本资源链接等)
    * 对不同种类的资源标识符可以使用同一种语义进行解读(例如：pdf文档和mp4等不同种类的资源可以用同一种下载方式去执行)
    * 引入新标识符时不会对已有标识符产生影响(例如：早期的http协议中uri主要指向的是图片和文字, 后期引入视频等新的方式不会对旧的产生影响)
    * 允许同一资源标识符在不同的、internet规模下的上下文中出现
* Resource资源
    * 可以是图片、文档、今天某地的温度等，也可以是不能通过互联网访问的实体，例如人、公司、实体书、也可以是抽象概念，例如亲属关系或数字符号
    * 一个资源可以有多个URI
* Idenfifier标识符
    * 将当前资源与其它资源区分开的名称

## URI的组成

组成结构： schema, user information, host, port, path, query, fragment
