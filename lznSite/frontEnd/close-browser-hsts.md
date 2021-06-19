# 关闭浏览器的HSTS功能

## Chrome 浏览器

* 在浏览器地址栏输入 chrome://net-internals/#hsts
* 在Delete domain security policies 中输入域名，并点击Delete按钮删除

## Safari 浏览器

* 完全关闭 Safari
* 删除 ~/Library/Cookies/HSTS.plist 这个文件
* 重新打开 Safari 即可
* 极少数情况下，需要重启系统