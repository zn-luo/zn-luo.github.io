(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{441:function(n,i,s){"use strict";s.r(i);var t=s(17),e=Object(t.a)({},(function(){var n=this,i=n._self._c;return i("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[i("h1",{attrs:{id:"win10的vpn无法连接ipsec访问外网的解决方法"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#win10的vpn无法连接ipsec访问外网的解决方法"}},[n._v("#")]),n._v(" win10的VPN无法连接ipsec访问外网的解决方法")]),n._v(" "),i("h2",{attrs:{id:"win10的vpn无法连接ipsec网络"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#win10的vpn无法连接ipsec网络"}},[n._v("#")]),n._v(" win10的VPN无法连接ipsec网络")]),n._v(" "),i("p",[n._v("解决方法:")]),n._v(" "),i("ol",[i("li",[n._v("快捷键执行win + R,在弹出的运行界面中输入regedit,如下图所示\n"),i("img",{attrs:{src:"/imgs/windwos/win10-ipsec-vpn/run-ui.PNG",alt:"打开注册表"}})]),n._v(" "),i("li",[n._v("找到 计算机\\HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Services\\PolicyAgent,将AssumeUDPEncapsulationContextOnSendRule的值设置为2，如下图所示\n"),i("img",{attrs:{src:"/imgs/windwos/win10-ipsec-vpn/PolicyAgent.PNG",alt:"注册表"}})]),n._v(" "),i("li",[n._v("找到 计算机\\HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Services\\RasMan\\Parameters，将ProhibitIPSec值设置为0，将AllowL2TPWeakCrypto值设置为1，如下图所示\n"),i("img",{attrs:{src:"/imgs/windwos/win10-ipsec-vpn/RasMan-Parameters.PNG",alt:"注册表"}})]),n._v(" "),i("li",[n._v("重启计算机")])]),n._v(" "),i("h2",{attrs:{id:"win10的vpn连接ipsec成功后-仍不能访问外网"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#win10的vpn连接ipsec成功后-仍不能访问外网"}},[n._v("#")]),n._v(" win10的VPN连接ipsec成功后，仍不能访问外网")]),n._v(" "),i("p",[n._v("win10的VPN客户端正常配置，连接成功，但网络及无法访问外网")]),n._v(" "),i("p",[n._v("解决方法:")]),n._v(" "),i("ol",[i("li",[n._v("右键单击开始菜单图标,再点击网络连接，如下图所示"),i("br"),n._v(" "),i("img",{attrs:{src:"/imgs/windwos/win10-ipsec-vpn/net-conn.PNG",alt:"网络连接"}})]),n._v(" "),i("li",[n._v("点击以太网，再选择更改适配器选项，如下图所示\n"),i("img",{attrs:{src:"/imgs/windwos/win10-ipsec-vpn/net-conn-setting.PNG",alt:"网络连接设置"}})]),n._v(" "),i("li",[n._v("右键VPN网卡(如下图名为ipsec的VPN口)，在弹出的菜单中点击属性\n"),i("img",{attrs:{src:"/imgs/windwos/win10-ipsec-vpn/net-conn-vpn-interface.PNG",alt:"网络连接VPN"}})]),n._v(" "),i("li",[n._v("选择网络选项卡，再点击属性，如下图所示\n"),i("img",{attrs:{src:"/imgs/windwos/win10-ipsec-vpn/net-conn-vpn-R.PNG",alt:"网络连接VPN-R"}})]),n._v(" "),i("li",[n._v("在弹出框中点击高级按钮，如下图所示\n"),i("img",{attrs:{src:"/imgs/windwos/win10-ipsec-vpn/net-conn-vpn-V.PNG",alt:"网络连接VPN-V"}})]),n._v(" "),i("li",[n._v("在弹出框中将在远程网络上使用默认网关打勾，然后点击确定，如下图所示\n"),i("img",{attrs:{src:"/imgs/windwos/win10-ipsec-vpn/net-conn-vpn-U.PNG",alt:"网络连接VPN-U"}})])]),n._v(" "),i("Vssue",{attrs:{title:n.$title,options:{locale:"zh"}}})],1)}),[],!1,null,null,null);i.default=e.exports}}]);