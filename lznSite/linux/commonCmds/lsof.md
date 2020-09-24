# lsof

lsof(list open files)是一个列出当前系统打开文件的工具。在linux环境中一切皆文件，通过文件不仅仅可以访问常规数据，还可以访问网络连接和硬件。网络连接如传输控制协议(TCP)和用户数据报协议(UDP)套接字等，系统在后台都为该应用程序分配了一个文件描述符，无论文件的本质如何，该文件描述符为应用程序与基础操作系统之间的交互提供了通用接口。因为应用程序打开文件描述符列表提供了大量关于这个应用程序本身的信息，因此lsof工具可以用于系统监测及排错。

## lsof输出信息的字段解释

* COMMAND：进程的名称
* PID：进程标识符
* PPID：父进程标识符（需要指定-R参数）
* USER：进程所有者
* PGID：进程所属组
* FD：文件描述符，应用程序通过文件描述符识别该文件
* TYPE: 文件类型
* DEVICE: 指定磁盘的名称
* SIZE: 文件的大小
* NODE: 索引节点（文件在磁盘上的标识）
* NAME: 打开文件的确切名称

![lsof显示内容](/imgs/commonCmds/lsof.PNG)

### FD文件描述符列表

* cwd：表示current work dirctory，即：应用程序的当前工作目录，这是该应用程序启动的目录，除非它本身对这个目录进行更改
* txt：该类型的文件是程序代码，如应用程序二进制文件本身或共享库，如上列表中显示的 /sbin/init 程序
* lnn：library references (AIX)（库引用）
* er：FD information error (see NAME column)（fd信息错误）
* jld：jail directory (FreeBSD)（监控目录）
* ltx：shared library text (code and data)（共享库文本）;
* mxx ：hex memory-mapped type number xx（十六进制内存映射类型号xx）；
* m86：DOS Merge mapped file(DOS合并映射文件);
* mem：memory-mapped file(内存映射文件);
* mmap：memory-mapped device（内存映射设备）;
* pd：parent directory（父目录）;
* rtd：root directory（跟目录）;
* tr：kernel trace file (OpenBSD)（内核跟踪文件）;
* v86 VP/ix mapped file（VP/IX映射文件）;
* 0：表示标准输出
* 1：表示标准输入
* 2：表示标准错误