# AWS云主机重启后无法ssh登陆

导致重启后无法ssh登陆的原因大体有两种:  

1. 系统能正常加载启动, ssh服务无法正常启动连接
2. 系统无法正常加载启动

当然具体原因还需要根据系统启动日志来定位问题。

## 解决方法步骤

### 分析原因

1. 登陆AWS云控制台<https://console.aws.amazon.com>
2. 进入EC2实例页面，右键单击有故障的云主机,选中监控和故障排队，点击获取系统日志，如下图所示  
  ![系统日志菜单](/imgs/aws/ec2-restart-failed/aws-ec2-system-log-menu.PNG "系统日志菜单")
3. 进入获取系统日志页面，直接在控制台查看日志，或者点击右边的下载按钮(如下图所示)把日志文件下载下来。  
  ![ec2系统日志](/imgs/aws/ec2-restart-failed/system-log.PNG "ec2系统日志")
4. 分析日志(我是直接把日志下载分析),如下图所示，从日志可以看到系统不断地在挂载一个名为nvme1n1i磁盘，尝试了很多次的挂载都没成功，启动的很多挂载job都time out失败了,最终Dependency failed for /data，挂载nvme1n1i到/data目录失败。  
  ![ec2实例日志](/imgs/aws/ec2-restart-failed/instance-system-log.PNG "ec2实例日志")
5. 所以系统上的/etc/fstab文件应该被人不小心修改过了，我印象当中磁盘名应该为nvme1n1，所以需要修正fstab。  
    如果不知正确的磁盘名，可以将fstab挂载/data的磁盘注释掉，或者添加nofail参数，让系统挂载启动后，再用fdisk找出正确盘名改正。

### 修正/etc/fstab文件

1. 备份当前实例,这样可以确保如果发生意外，可以从备份中取回之前的数据。  
  备份方式有: 1. 建立AMI [4]; 2. 是建立快照[5]
2. 将实例停机
3. 将实例的根卷(系统盘)分离(detach)[2],在同一个区域内(AZ)找一台可用实例或者新建一台小型号的实例，将刚刚分离的卷附加(attach)[3]可用实例。
4. 登陆可用实例，将刚才附加的卷挂载(mount)为/data, 若无法正常挂载，查看[挂载报错](#挂载报错)
5. 编辑/data/etc/fstab,将错误的nvme1n1i(如下图error fstab所示)名改为nvme1n1名(如下图error fixed所示)  
  ![fstab-error](/imgs/aws/ec2-restart-failed/fstab-error.PNG "error fstab")
  ![fstab-fixed](/imgs/aws/ec2-restart-failed/fstab-error.PNG "error fixed")
6. 或者将挂载/data那一行注释掉，或者修改为如下参数:  

    ```sh
    LABEL=cloudimg-rootfs	/	 ext4	defaults,discard	0 0
    /dev/nvme1n1    	 /data   ext4	defaults,nofail  0  2
    ```

7. 修正文件后，卸载(umount)刚才挂载的卷，将它挂回原来的实例当中(这里的默认根卷名为/dev/sda1)。
8. 启动实例

## 挂载报错

挂载根卷时报错[6]:wrong fs type, bad option, bad superblock on /dev/xvdf, missing codepage or helper program, or other error, 如下图挂载报错所示  
![挂载报错](/imgs/aws/ec2-restart-failed/mount-error.PNG "挂载报错")

原因是此卷已经被分区了，执行fdisk -l命令可以看到分区的名字为/dev/xvdf1,如下图fdisk所示，所以不能直接挂载/dev/xvdf,面要挂载/dev/xvdf1,如下图mount-success所示。
![fdisk-l](/imgs/aws/ec2-restart-failed/mount-error.PNG "fdisk")
![mount-success](/imgs/aws/ec2-restart-failed/mount-error.PNG "mount-success")

## 文档引用

[1] <https://unix.stackexchange.com/questions/148714/cant-ssh-connection-terminates-immediately-with-exit-status-254>  
[2] <https://docs.aws.amazon.com/zh_cn/AWSEC2/latest/UserGuide/ebs-detaching-volume.html#umount-detach-volume>  
[3] <https://docs.aws.amazon.com/zh_cn/AWSEC2/latest/UserGuide/ebs-attaching-volume.html>  
[4] <https://docs.aws.amazon.com/zh_cn/AWSEC2/latest/UserGuide/creating-an-ami-ebs.html#how-to-create-ebs-ami>  
[5] <https://docs.aws.amazon.com/zh_cn/AWSEC2/latest/UserGuide/ebs-creating-snapshot.html#ebs-create-snapshot>  
[6]<https://serverfault.com/questions/632905/cannot-mount-an-existing-ebs-on-aws>  

<Vssue :title="$title" :options="{ locale: 'zh' }" />