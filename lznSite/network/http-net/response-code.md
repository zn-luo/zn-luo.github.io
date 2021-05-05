# HTTP响应状态码

响应码规范：RFC6585(2012.4)、RFC7231(2014.6)

## 1开头的响应状态码

1xx 响应状态码表示请求已接收到，需要进一步处理才能完成，HTTP1.0不支持

* 100 ：Continue  
  客户端上传大文件前使用。由客户端发起的请求中携带Expect: 100-continue 头部触发
* 101 ：Switch Protocols  
  协议升级时使用。 由客户端发起的请求中推带Upgrade: 头部触发，如升级websocket或者http/2.0
* 102 ：Processing  
   WebDAV 请求可能包含许多涉及文件操作的子请求，需要很长时间才能完成请求。该代码表示服务器已经收到并正在处理请求，但无响应可用。这样可以防止客户端面超时，并假设请求丢失。

## 2开头的响应状态码

2xx 响应状态码表示成功处理请求

* 200 ： OK  
  处理成功返回的响应
* 201 ： Created  
  有新资源在服务器端被成功创建
* 202 ： Accepted  
  服务器接收并开始处理请求，但请求并未处理完成。这种模糊概念有使用的场景有：异步、需要长时间处理的任务
* 203 ：Non-Authoritative Information  
  当代理服务器修改了origin server的原始响应包体时(如更换了HTML中的元素值),代理服务器可以通过修改200为203的方式告知客户端，方便客户端为这种情况作出相应的处理。203响应可以被缓存。
* 204 ：No Content  
  成功执行了请求无返回响应包体，告知客户端无需更新当前的页面视图
* 205 : Reset Content  
  成功执行了请求无返回响应包体，指明客户端需要更新当前页面视图
* 206 ： Partial Content  
  使用range协议时返回部分内容时使用的状态码
* 207 ： Multi-Status  
  RFC4918,在WEBDAV协议中以XML方式返回多个资源的状态
* 208 ：Already Reported  
  RFC5842, 为避免相同集合下资源在207响应码下重复上报，使用208可以使用父集合的响应码。

## 3开头的响应状态码

3xx 状态码表示重定向使用Location指向的资源或者缓存中的资源。在RFC2068中规定客户端重定向次数不应超过5次，以防止死循环。

* 300 ：Multiple Choices  
  资源有多种表述，通过300返回给客户端后由其自行选择访问哪一种表述。
* 301 ：Moved Permanently  
  资源永久性地重定向到另一个URI中。
* 302 ：Found  
  资源临时地重定向到另一个URI中。
* 303 ：See Other  
  重定向到其他资源，常用于POST/PUT等方法的响应中
* 304 ：Not Modified  
  当客户端拥有可能过期的缓存时，会携带缓存的标识etag、时间等信息询问服务器缓存是否仍可复用，而304是告诉客户端可以复用缓存
* 307 ：Temporary Redirect  
  类似302，但明确重定向后请求方法必须与原请求方法相同，不得改变
* 308 : Permanent Redirect  
  类似301，但明确重定向后请求方法必须与原请求访求相同，不得改变

## 4开头的响应状态码

4xx 状态码表示客户端出现错误

* 400 ：Bad Request  
  服务器认为客户端出现了错误，但不能明确判断为以下哪种错误时使用的状态码。如HTTP请求格式错误
* 401 ：Unauthorized  
  用户认证信息缺失或者不正确，导致服务器无法处理请求
* 403 ：Forbiddden  
  客户端没有权限执行此请求
* 404 : Not Found  
  服务器没有找到对应的资源
* 405 ：Method Not Allowed  
  服务器不支持请求行中的method方法
* 406 ：Not Acceptable  
  表示对客户端指定的资源表述不存在(例如对语言或者编码有要求)，服务器返回表述列表供客户端选择
* 407 ：Proxy Authentication Required  
  对需要经由代理的请求，认证信息未通过代理服务器的验证
* 408 ：Request Timeout  
  服务器接收请求超时
* 409 ：Conflict  
  资源冲突，如在上传文件时，目标位置已经存在版本更新的资源
* 410 ：Gone  
  服务器没有找到对应的资源，且明确的知道该位置永性找不到该资源
* 411 ：Length Required  
  如果请求含有包体且未携带Content-Length头部，且不属于chunk类请求时，返回的状态码
* 412 ：Precondition Failed  
  复用缓存时传递的If-Unmodified-Since或If-None-Match头部不被满足
* 413 ： Payload Too Large/Request Entity Too Large  
  请求的包体超出服务器能处理的最大长度
* 414 : URI Too Long  
  请求的URI超出服务器能接受的最大长度
* 415 ：Unsupported Media Type  
   上传的文件类型不被服务器支持
* 416 ：Range Not Satisfiable  
   无法提供Range请求中指定的那段包体
* 417 ：Expectation Failed  
   对于Expect请求头部期待的情况无法满足时的响应码
* 421 ：Misdirected Request  
  服务器认为这个请求不该发给它，因为它没有能力处理
* 426 ：Upgrade Required  
  服务器拒绝基于当前HTTP协议提供服务，通过Upgrade头部告知客户端必须升级协议才能继续处理
* 428 ：Precondition Required  
  用户请求中缺失了条件类头部，如If-Match
* 429 ：Too Many Requests  
  客户端发送请求的速率过快
* 431 ：Request Header Fields Too Large  
  请求的HEADER头部大小超过限制
* 451 : Unavailable For Legal Reasons  
  RFC7725,由于法律原因资源不可访问

## 5开头的响应状态码

5xx 状态码表示服务端出现错误

* 500 ：Internal Server Error  
  服务器内部错误，且不属于以下错误类型
* 501 ：Not Implemented  
  服务器不支持实现请求所需要的功能
* 502 : Bad Gateway  
  代理服务器无法获取到合法响应
* 503 ：Service Unavailable  
  服务器资源尚未准备好处理当前请求
* 504 ：Gateway Timeout  
  代理服务器无法及时地从上游获得响应
* 505 ：HTTP Version Not Supported  
  请求使用的HTTP协议版本不支持
* 507 ： Insufficient Storage  
  服务器没有足够的空间处理请求
* 508 ： Loop Detected  
  访问资源时检测到循环
* 511 ： Network Authentication Required  
  代理服务器发现客户端需要进行身份验证才能获得网络访问权限