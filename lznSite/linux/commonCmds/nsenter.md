# [nsenter](https://man7.org/linux/man-pages/man1/nsenter.1.html)

nsenter命令可以进入到目标程序所在的命名空间中执行指定的命令。可以用于在宿主机上调试容器中运行的程序。

## 用法

nsenter [options] [program [arguments]]

nsenter会在命名空间中执行program。如果program没有指定，则会执行${SHELL}。

## 参数说明

* -a, --all: 进入目标进程的所有命名空间，默认为/proc/[pid]/ns/* 命名空间路径。
* -t, --target PID: 指定目标进程的进程ID。
* -m, --mount[=file]: 进入挂载命名空间。如果指定了file，则进入file的命名空间。如果不指定文件，则进入target的挂载命名空间。
* -u, --uts[=file]: 进入UTS命名空间。如果指定了file，则进入file的命名空间。如果不指定文件，则进入target的UTS命名空间。
* -i, --ipc[=file]: 进入IPC命名空间。如果指定了file，则进入file的命名空间。如果不指定文件，则进入target的IPC命名空间。
* -n, --net[=file]: 进入网络命名空间。如果指定了file，则进入file的命名空间。如果不指定文件，则进入target的网络命名空间。
* -p, --pid[=file]: 进入PID命名空间。如果指定了file，则进入file的命名空间。如果不指定文件，则进入target的PID命名空间。
* -U, --user[=file]: 进入用户命名空间。如果指定了file，则进入file的命名空间。如果不指定文件，则进入target的用户命名空间。
* -C, --cgroup[=file]: 进入cgroup命名空间。如果指定了file，则进入file的命名空间。如果不指定文件，则进入target的cgroup命名空间。
* -T, --time[=file]: 进入time命名空间。如果指定了file，则进入file的命名空间。如果不指定文件，则进入target的time命名空间。
* -G, --setgid gid: 设置将在进入的命名空间中使用的组ID，并删除补充组。默认是0。
* -S, --setuid uid: 设置将在进入的命名空间中使用的用户ID。
* --preserve-credentials: 在进入用户命名空间时，不要修改UID和GID。默认情况是删除补充组，并将GID和UID设置为0。
* -r, --root[=directory]: 设置根目录。如果没指定目录，则将根目录设置为target进程的根目录。
* -w, --wd[=directory]: 设置工作目录。如果没指定目录，则将工作目录设置为target进程的工作目录。
* -F, --no-fork: 在exec指定的程序之前不要fork。默认情况下，当进入一个PID命名空间时，nsenter会在调用exec之前调用fork，这样任何子进程也会在新进入的PID命名空间中。
* -Z, --follow-context: 根据--target PID指定的已经运行的进程设置用于执行新进程的SELinux安全上下文。

## 主要用途

在容器化的环境中，容器为了轻量级，大多都是不包含基础网络管理工具的。所以使用nsenter可以用来进入容器的网络命名空间，使用宿主机的命令来调试容器的网络。

## 例子

1. 进入容器命名空间步骤:  

    ```linux
    PID=$(docker inspect -f {{.State.Pid}} 容器名或ID)
    nsenter -a -t ${PID} <命令> 或 nsenter -m -u -i -n -p -t ${PID} <命令>
    ```

2. 纯docker环境:  
    ![nsenter命令进入容器](/imgs/commonCmds/nsenter-docker.PNG)

3. K8S环境:  
   ![nsenter命令进入容器](/imgs/commonCmds/nsenter-k8s.PNG)