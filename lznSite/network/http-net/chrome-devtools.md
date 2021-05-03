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

    备注：AND操作可以通过空格实现，如: domain:*.alicdn.com method:GET is:from-cache