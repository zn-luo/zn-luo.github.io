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