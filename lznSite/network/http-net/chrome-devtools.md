# [Chrome浏览器开发者工具](https://developer.chrome.com/docs/devtools/network/)

 web开发者快速定位HTTP协议问题的工具

## Network 面板

![Network-面板](/imgs/network/http/chrome-devtool-network-panel.png)

* 控制器： 控制面板的外观与功能
* 过滤器： 过滤请求列表中显示的资源
  * 按住Command(Mac)或 Ctrl(Window/Linux), 然后点击过滤器可以同时选择多个过滤器
* 概览： 显示HTTP请求、响应的时间轴
* 请求列表：默认时间排序，可选择显示列
* 概要： 请求总数、总数据量、总花费时间等

### 控制器

* 红色按钮：可以控制抓包工具的打开与停止
* 灰色的Clear按钮： 可以清除请求
* 勾上Preserve log: 跨页面加载时保存请求log
* Capture screenshots: 屏幕截图
* Replay XHR: 重新执行XHR请求(选中请求右键菜单选择Replay XHR)
* Disable cache: 关掉浏览器缓存
* Clear Browser Cache: 手动清除浏览器缓存
* Offline: 离线模式
* Throttling: 网速调节设置，可自定义网速(可以模拟慢速网络连接)
* Clear Browser Cookies: 手动清除浏览器Cookie(选中请求右键菜单选择Clear Browser Cookies)
* 蓝色的漏斗按钮：隐藏Filters窗格

### 过滤器

类型过滤：

* 可过滤的类型有： XHR、JS、CSS、Img、Media、Font、Doc、WS(WebSocket)、Manifest或Other等
* 多类型同时过滤： 按住Command(Mac)或Ctrl(Windows、Linux)选择多个类型条件
* 按时间过滤： 在概览面板，拖动滚动条
* Hide  data URLs: 有时候web站点会将CSS、图片等小文件以BASE64格式嵌入HTML中，开发者工具也会将这些资源请求列出来，勾上Hide  data URLs可以减少请求列表的HTTP请求数,因为这些资源实际上是与HTML页面是同一个请求返回的

属性过滤

* domain: 仅显示来自指定域名的资源。可以使用通配符(*)
* has-response-header: 显示包含指定HTTP响应标头的资源
* is: 使用is:running 可以查找WebSocket资源，is:from-cache可查找缓存读出的资源
* larger-than: 显示大于指定大小的资源(以字节为单位)。
* method: 显示通过指定HTTP方法类型检索的资源
* mime-type: 显示指定MIME类型的资源
* mixed-content: 显示混合内容资源，如：显示所有混合内容资源(mixed-content:all)，仅显示当前显示的资源(mixed-content:displayed)
* scheme: 显示指定协议的资源。如：显示HTTP资源(scheme:http),显示HTTPS资源(scheme:https)
* set-cookie-domain: 显示具有Set-Cookie标头并且Domain属性与指定值匹配的资源
* set-cookie-name: 显示具有Set-Cookie标头并且名称与指定值匹配的资源
* status-code: 仅显示HTTP状态码与指定代码匹配的资源

    备注：AND操作可以通过空格实现，如: domain:*.alicdn.com method:GET is:from-cache

### 请求列表的字段

* Name: 资源的名称
* Status: HTTP状态代码
* Type: 请求资源的MIME类型
* Initiator: 发起请求的对象或进程。 它可能的取值有如下类型：
    * Parser(解析器): Chrome的HTML解析器发起的请求(如：鼠标悬停触发js脚本功能)
    * Redirect(重定向): HTTP重定向启动的请求
    * Script(脚本): 脚本启动的请求
    * Other(其它): 其它进程或动作发起的请求，如：用户点击链接跳转到页面或在地址栏中输入网址
* Size: 服务器返回的响应大小(包括头部和包体)，可显示解压后的大小
* Time: 总持续时间，从请求的开始到接收响应中的最后一个字节
* Waterfall: 各请求相关活动的直观分析图

### 请求列表的排序

* 时间排序： 默认
* 按列排序
* 按活动时间排序
    * Start Time: 按照请求发起的时间进行排序，发出的第一个请求位于顶部
    * Response Time: 按照第一次响应收到的时间进行排序，开始下载的第一个请求位于顶部
    * End Time: 按照响应接收完成的时间进行排序，完成的第一个请求位于顶部
    * Total Duration: 按照请求所需要的时间进行排序，连接设置时间和请求/响应时间最短的请求位于顶部
    * Latency: 等待最短响应时间的请求位于顶部

###  预览请求内容

点击一个请求时

* 可以查看头部
* 可查看cookie
* 预览响应正文(查看图片是很有用) 
* 查看响应正文
* 时间详细分布
* 导出数据为HAR格式
* 查看未压缩的资源大小: Use Large Request Rows
* 将请求数据复制到剪贴板
    * Copy Link Address: 将请求的网址复制到剪贴板
    * Copy Response: 将响应包体复制到剪贴板
    * Copy as cURL: 以cURL命令形式复制请求
    * Copy All as cURL: 以一系列cURL命令形式复制所有请求
    * Copy All as HAR: 以HAR数据形式复制所有请求
* 查看请求上下游：按住shift键悬停在某个请求上，标绿色的是上游，标红色的下游

### 浏览器加载时间

* 触发流程
    * 解析HTML结构
    * 加载外部脚本和样式表文件
    * 解析并执行脚本代码  //部分脚本会阻塞页面的加载
    * DOM树构建完成     // DOMContentLoaded事件
    * 加载图片等外部文件
    * 页面加载完毕      // load 事件
* 请求时间分布
    * Queueing: 浏览器在以下情况下对请求排队
        * 存在更高优先级的请求
        * 当前domain已打开6个TCP连接，达到限值，仅适用于HTTP/1.0和HTTP/1.1
        * 浏览器正在短暂分配磁盘缓存中的空间
    * Stalled: 请求可能会因Queueing中描述的任何原因而停止
    * DNS Lookup: 浏览器正在解析请求的IP地址
    * Proxy Negotiation: 浏览器正在与代理服务器协商请求
    * Request sent: 发送请求所花费的时间
    * ServiceWorker Preparation: 浏览器正在启动Service Worker
    * Request to ServiceWorker: 正在将请求发送到Service Worker
    * Waiting(TTFB):浏览器正在等待响应的第一个字节。TTFB表示Time To First Byte。此时间包括1次往返延迟时间及服务器准备响应所用的时间。
    * Content Download: 浏览器正在接收响应花费的时间
    * Receiving Push: 浏览器正在通过HTTP/2 服务器推送接收此响应的数据
    * Reading Push: 浏览器正在读取之前收到的本地数据
