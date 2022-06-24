# win10的VPN无法连接ipsec访问外网的解决方法

## win10的VPN无法连接ipsec网络

解决方法:  

1. 快捷键执行win + R,在弹出的运行界面中输入regedit,如下图所示
    ![打开注册表](/imgs/windwos/win10-ipsec-vpn/run-ui.PNG)
2. 找到 计算机\HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\PolicyAgent,将AssumeUDPEncapsulationContextOnSendRule的值设置为2，如下图所示
    ![注册表](/imgs/windwos/win10-ipsec-vpn/PolicyAgent.PNG)
3. 找到 计算机\HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\RasMan\Parameters，将ProhibitIPSec值设置为0，将AllowL2TPWeakCrypto值设置为1，如下图所示
    ![注册表](/imgs/windwos/win10-ipsec-vpn/RasMan-Parameters.PNG)
4. 重启计算机

## win10的VPN连接ipsec成功后，仍不能访问外网

win10的VPN客户端正常配置，连接成功，但网络及无法访问外网

解决方法:  

1. 右键单击开始菜单图标,再点击网络连接，如下图所示  
    ![网络连接](/imgs/windwos/win10-ipsec-vpn/net-conn.PNG)
2. 点击以太网，再选择更改适配器选项，如下图所示
    ![网络连接设置](/imgs/windwos/win10-ipsec-vpn/net-conn-setting.PNG)
3. 右键VPN网卡(如下图名为ipsec的VPN口)，在弹出的菜单中点击属性
    ![网络连接VPN](/imgs/windwos/win10-ipsec-vpn/net-conn-vpn-interface.PNG)
4. 选择网络选项卡，再点击属性，如下图所示
    ![网络连接VPN-R](/imgs/windwos/win10-ipsec-vpn/net-conn-vpn-R.PNG)
5. 在弹出框中点击高级按钮，如下图所示
    ![网络连接VPN-V](/imgs/windwos/win10-ipsec-vpn/net-conn-vpn-V.PNG)
6. 在弹出框中将在远程网络上使用默认网关打勾，然后点击确定，如下图所示
    ![网络连接VPN-U](/imgs/windwos/win10-ipsec-vpn/net-conn-vpn-U.PNG)

<Vssue :title="$title" :options="{ locale: 'zh' }" />