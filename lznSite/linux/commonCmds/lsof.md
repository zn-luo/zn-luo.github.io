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

#### 在标准输出、标准错误、标准输入后还会跟着文件状态模式

* u：表示该文件被打开并处于读取/写入模式。
* r：表示该文件被打开并处于只读模式。
* w：表示该文件被打开并处于。
* 空格：表示该文件的状态模式为unknow，且没有锁定。
* -：表示该文件的状态模式为unknow，且被锁定。

#### 在文件状态模式后面的相关锁

* N：for a Solaris NFS lock of unknown type(对于未知类型的Solaris NFS锁);
* r：for read lock on part of the file(用于对文件的一部分进行读取锁定);
* R：for a read lock on the entire file(整个文件的读取锁定);
* w：for a write lock on part of the file;（文件的部分写锁）
* W：for a write lock on the entire file;（整个文件的写锁）
* u：for a read and write lock of any length(对于任意长度的读写锁);
* U：for a lock of unknown type(对于未知类型的锁);
* x：for an SCO OpenServer Xenix lock on part of the file(对于文件的sco openserver xenix锁);
* X：for an SCO OpenServer Xenix lock on the entire file(对于整个文件的sco openserver xenix锁);
* space：if there is no lock(如果没有锁).

### 文件类型

* DIR：表示目录。
* CHR：表示字符类型。
* BLK：块设备类型。
* UNIX： UNIX 域套接字。
* FIFO：先进先出 (FIFO) 队列。
* IPv4：网际协议 (IP) 套接字。

## 常用方式

1. 列出所有打开的文件: lsof
2. 查看占用文件的进程: lsof   /filepath/file
3. 递归查看某个目录的文件信息: lsof +D /filepath/filepath2/
4. 列出指定用户打开的文件: lsof -u userName
5. 列出指定pid打开的文件： lsof -p 1527
6. 查看指定进程名打开的文件： lsof -c mongo 或 lsof -c mongo -c sh
7. 查看指定IP: lsof -i @10.0.11.14 -n
8. 查看指定IP及端口: lsof -i @10.0.11.14:22 -n
9. 查看指定端口: lsof -i :22 -n
10. 查看指定协议: lsof -i UDP
