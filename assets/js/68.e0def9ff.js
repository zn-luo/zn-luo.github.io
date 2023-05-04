(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{402:function(e,t,r){"use strict";r.r(t);var s=r(17),v=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"k8s概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#k8s概述"}},[e._v("#")]),e._v(" K8S概述")]),e._v(" "),t("p",[e._v("Kubernetes能提供路由网关、水平扩展、监控、备份、灾难恢复等一系列运维能力。"),t("br"),e._v("\n记录于张磊老师的课程。")]),e._v(" "),t("h2",{attrs:{id:"k8s架构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#k8s架构"}},[e._v("#")]),e._v(" k8s架构")]),e._v(" "),t("p",[e._v("k8s架构主要由Master和Node两种节点组成，即控制节点和计算节点。架构如图：\n"),t("img",{attrs:{src:"/imgs/k8s/k8s-architecture.png",alt:"k8s架构图"}})]),e._v(" "),t("p",[t("strong",[e._v("控制节点(Master节点)由三个紧密协作的独立组件组合而成：")])]),e._v(" "),t("ol",[t("li",[e._v("kube-apiserver组件负责API服务")]),e._v(" "),t("li",[e._v("kube-scheduler组件负责调度服务")]),e._v(" "),t("li",[e._v("kube-controller-manager组件负责容器编排服务")]),e._v(" "),t("li",[e._v("整个集群的持久化数据则由kube-apiserver处理后保存到etcd数据库中。")])]),e._v(" "),t("p",[t("strong",[e._v("计算节点(Node节点)最核心的是kubelet组件:")])]),e._v(" "),t("p",[e._v("在K8s中kubelet主要负责同容器运行时(如Docker项目)交互。而这个交互所依赖的是一个称作CRI(Container Runtime Interface)的远程调用接口，这个接口定义了 容器运行时的各项核心操作，比如：启动一个容器需要的所有参数。")]),e._v(" "),t("p",[e._v("所以Kubernetes项目并不需要关注底层是什么容器运行时、使用什么技术实现的，只要部署的容器运行时能够运行标准的容器镜像，就可以通过实现CRI接入到Kubernetes项目中。")]),e._v(" "),t("p",[e._v("而具体的容器运行时，如Docker项目，则一般通过OCI这个容器运行时规范与底层的Linux操作系统交互，即把CRI请求转成对应Linux操作系统的调用(操作Linux Namespace和Cgroups等)")]),e._v(" "),t("p",[e._v("kubelet还通过gRPC协议同一个叫Device Plugin的插件进行交互。这是k8s项目用来管理GPU等宿主机物理设备的主要组件。")]),e._v(" "),t("p",[e._v("kubelet还会调用网络插件和存储插件为容器配置网络和持久化存储。这两个插件与kubelet进行交互的接口，分别是CNI(Container Networking Interface)和CSI(Container Storage Interface)。")]),e._v(" "),t("h2",{attrs:{id:"k8s核心功能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#k8s核心功能"}},[e._v("#")]),e._v(" k8s核心功能")]),e._v(" "),t("p",[e._v("k8s以容器为基础单元，根据业务逻辑及调度访问关系设计封装出各种对象，如Pod, Service, Deployment等。核心功能如图：\n"),t("img",{attrs:{src:"/imgs/k8s/k8s%E6%A0%B8%E5%BF%83%E5%8A%9F%E8%83%BD%E5%9B%BE.png",alt:"k8s核心功能图"}})]),e._v(" "),t("ul",[t("li",[e._v("根据基础单元容器间紧密协作的关系，设计封装出Pod对象。")]),e._v(" "),t("li",[e._v("Pod对象与应用实例对应，由于实际生产环境中高可用冗余的要求，需要部署多个应用实例，K8S项目则引出Deployment对象，用来管理Pod的多实例。")]),e._v(" "),t("li",[e._v("有多个相同Pod的实例组会出现不同的IP地址和端口，K8s项目则设计封装Service对象，以负载均衡的方式来转访问流量到Pod上。")]),e._v(" "),t("li",[e._v("当两个不同Pod在互相访问调用时，需要加上授权信息时，如：Web应用对数据库访问时需要凭证信息(用户名和密码)，K8S引出了Secret对象。Secret实现原理实际是一个保存在Etcd里的键值对数据。当把凭证信息以Secret的方式存在Etcd里后，k8s会在你指定的Pod启动时，自动把Secret对象的数据以Volume的方式挂载到容器里，这样指定的Pod就能拿到凭证信息访问另外一个Pod。")]),e._v(" "),t("li",[e._v("基于Pod改进后的对象Job，用来描述一次性运行的Pod,如：大数据任务。")]),e._v(" "),t("li",[e._v("DaemonSet对象，用来描述每个宿主机上必须且只能运行一个副本的守护进程服务。")]),e._v(" "),t("li",[e._v("CronJob对象，用来描述定时任务。")])]),e._v(" "),t("p",[e._v('kubernetes项目设计封装的方法采用"声明式API"。这个API对应的”编排对象“和”服务对象“，都是kubernetes项目中的API对象(API Object)。\n方法步骤：')]),e._v(" "),t("ul",[t("li",[e._v("通过一个”编排对象“，如Pod、Job、CronJob等，来描述管理的应用;")]),e._v(" "),t("li",[e._v("再定义一些”服务对象“，如Service、Secret、Horizontal Pod Autoscaler（自 动水平扩展器）等。这些对象，会负责具体的平台级功能。")])])])}),[],!1,null,null,null);t.default=v.exports}}]);