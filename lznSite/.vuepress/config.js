const path=require("path");

module.exports = {
  plugins: [
    ['@vssue/vuepress-plugin-vssue', {
      platform: 'github',
      owner: 'zn-luo',
      repo: 'zn-luo.github.io',
      clientId: '9a7e95404883b145e727',
      clientSecret: '1f4982c512b561db9f68fb87348df9eef63e93b2',
    }],
  ],
  configureWebpack:{
    resolve:{
      alias:{
        "@vuepress-imgs": path.join(__dirname,"/imgs")
      }
    }
  },
  title: 'LZN Site',
  description: '个人站点',
  head:[
    ['link',{rel:"icon",  href:"/imgs/favicon.ico"}]
  ],
  themeConfig:{   
    sidebarDepth: 3, 
    nav:[
      {text:"主页", link: '/'},
      {
        text:"开源站点",
        items:[
          {text:"Github", link:"https://github.com/zn-luo/zn-luo.github.io"},
          {text:"OSCHINA", link:"https://my.oschina.net/jennerlo"},
        ]
      },      
      {
        text:"前端",
        items:[
          {
            text:"vue",
            items:[
              {text:"事件", link:'/frontEnd/vue/vue-event.md' },
              {text:"属性", link:'/frontEnd/vue/vue-property.md' },
              {text:"插槽", link:'/frontEnd/vue/vue-slot.md' },
              {text:"双向绑定和单向数据流", link:'/frontEnd/vue/bind-flow.md' }
            ]
          },
          {
            text:"其它",
            items:[
              {text:"关闭浏览器的HSTS功能", link:'/frontEnd/close-browser-hsts.md' }
            ]
          }
        ]
      },
      {
        text:"服务端",
        items:[
          {
            text:"linux",
            items:[
              {text:"常用命令", link:'/linux/commonCmds/'},
              {text:"Buffer/Cache", link:'/linux/buffer-cache.md'},
              {text:"缓解DDoS攻击的方法", link:'/linux/performance/resist-ddos.md'},
              {text:"平均负载", link:'/linux/performance/load-average.md'}
            ]
          },
          {
            text:"windows",
            items:[
              {text:"windows查看系统证书", link:'/windows/manage-system-certs.md'},
              {text:"win10的VPN无法连接ipsec访问外网的解决方法", link:'/windows/vpn-ipsec-gateway.md'}
            ]
          },        
          {
            text:"运维",
            items:[
              {text:"膜拜Netfix", link:'/devops/netfix.md' },
              {text:"微服务", link:'/devops/microsoft-core.md' },
              {text:"将工作标准化", link:'/devops/standardized-systems-and-models.md' },
              {text:"CMDB", link:'/devops/cmdb.md' },
              {text:"如何打造运维组织架构", link:'/devops/build-devops-structure.md' },
              {text:"高可用架构的探索与实现", link:'/devops/ha-architecture-exploration-implementation.md' },
              {text:"高可用组件keepalived", link:'/devops/keepalived.md' },
              {text:"日志文件管理工具logrotate", link:'/devops/logrotate.md' }
            ]
          }
        ]
      },
      {
        text:"网络",
        items:[
          {
            text:"http",
            items:[
              {text:"URI与URL", link:'/network/http-net/uri-url.md'},
              {text:"Web架构的七大关键属性", link:'/network/http-net/web-7-key-properties.md'},
              {text:"URI编码", link:'/network/http-net/uri-encoding.md'},
              {text:"请求行", link:'/network/http-net/request-line.md'},
              {text:"HTTP响应状态码", link:'/network/http-net/response-code.md'},
              {text:"Chrome浏览器开发者工具", link:'/network/http-net/chrome-devtools.md'}
            ]
          },  
          {
            text:"tcp",
            items:[
              {text:"tcp-keepalive", link:'/network/tcp-net/tcp-keepalive.md'},
              {text:"TCP三次握手", link:'/network/tcp-net/tcp-three-way-handshake.md'},
              {text:"数据传输与MSS分段", link:'/network/tcp-net/data-transmission-mss.md'},
              {text:"tcp握手的性能优化与安全", link:'/network/tcp-net/tcp-performance-security.md'}
            ]
          }, 
          {
            text:"tr-069",
            items:[
              {text:"介绍", link:'/network/TR-069/introduction.md'},
              {text:"架构", link:'/network/TR-069/architecture.md'}
            ]
          }, 
        ]
      },
      {
        text:"数据库",
        items:[
          {
            text:"mongodb",
            items:[
              {text:"切片集群架构", link:'/dbs/mongodb/'},
              {text:"聚合", link:'/dbs/mongodb/aggregation.md'},
              {text:"模型设计基础", link:'/dbs/mongodb/basics-model-design.md'},
              {text:"分片集群的设计", link:'/dbs/mongodb/shard-design.md'},
              {text:"规范", link:'/dbs/mongodb/specification.md'},
              {text:"内置角色", link:'/dbs/mongodb/built-in-roles.md'},
              {text:"自定义角色", link:'/dbs/mongodb/user-defined-roles.md'},
              {text:"备份与恢复", link:'/dbs/mongodb/back-recovery.md'},
              {text:"常用命令", link:'/dbs/mongodb/commands.md'}
            ]
          },
          {
            text:"redis",
            items:[
              {text:"redis持久化磁盘负载", link:'/dbs/redis/redis-disk-load'},
              {text:"redis字条串类型", link:'/dbs/redis/string.md'},
              {text:"Redis内存驱逐策略", link:'/dbs/redis/eviction-policies.md'},
              {text:"批量遍历命令scan", link:'/dbs/redis/scan.md'}
            ]
          },
        ]
      },
      {
        text:"架构与设计",
        items:[
          {
            text:"微服务",
            items:[
              {text:"什么是微服务", link:'/architecture/microservice.md'},
              {text:"微服务利弊", link:'/architecture/microservice-advantages-disavantages.md'}
            ]
          }, 
          {
            text:"设计模式",
            items:[
              {text:"5大要素",link:'/designPattern/5-elements.md'},
              {text:"面向对象",link:'/designPattern/oo.md'},
              {text:"工厂",link:'/designPattern/factory/'},
              {text:"单例", link:'/designPattern/singleton/'}
            ]
          } 
        ]
      },
      {
        text:"算法",
        items:[
          {text:"数据结构与算法", link:'/algorithm/data-structure.md' },
          {text:"时间复杂度", link:'/algorithm/time-complexity.md' },
          {text:"栈", link:'/algorithm/stack.md' },
          {text:"算法实现例子", link:'/algorithm/example.md' }
        ]
      },
      {
        text:"云",
        items:[
          {
            text: "k8s",
            items:[
              {text:"容器基础", link:'/k8s/container-basis.md' },          
              {text:"K8S概述", link:'/k8s/k8s-base-overview.md' },
              {text:"pod", link:'/k8s/pod.md' },
              {text:"K8S支持的资源类型及缩写", link:'/k8s/resources-type-aliases.md' },
              {text:"docker0网桥", link:'/k8s/docker-bridge.md' },
              {text:"修改docker与kubelet的Cgroup驱动", link:'/k8s/change-cgroup.md' },
              {text:"kubeadmin+ansible安装k8s v.111.1", link:'/k8s/kubeadmin-install-k8s-v1.11.1.md' },
              {text:"calico网络故障(BIRD is not ready)", link:'/k8s/calico-bgp-not-established.md' },
              {text:"长连接服务新扩容的pod无法接收请求", link:'/k8s/scale-keepalive.md' },
              {text:"使用cert-manager签发Let's Encrypt免费证书", link:'/k8s/cert-manager-route53-dns01.md' }
            ]
          },{
            text: "AWS",
            items:[
              {text:"AWS云主机重启后无法ssh登陆", link:'/aws/ec2/instance-not-restart.md' }, 
              {text:"IoT Core 策略", link:'/aws/iot-core/iot-core-security/iot-core-policy/' },
              {text:"IoT Core 策略 actions", link:'/aws/iot-core/iot-core-security/iot-core-policy/policy-actions.md' },       
              {text:"AWS IoT Core 策略变量", link:'/aws/iot-core/iot-core-security/iot-core-policy/policy-variables.md' },      
              {text:"AWS IoT Core action resources", link:'/aws/iot-core/iot-core-security/iot-core-policy/action-resources.md' },
              {text:"物品(Thing)策略变量", link:'/aws/iot-core/iot-core-security/iot-core-policy/thing-policy-variables.md' },
              {text:"Route53 域名转移步骤", link:'/aws/Route53/transferring-domains/' },
              {text:"Route53 顶级域名的转移要求", link:'/aws/Route53/transferring-domains/Transfer-requirements-for-top-leveldomain.md' },
            ]
          }
        ]
      },
      {
        text:"箴言",
        items:[
          {text:"职场箴言", link:'/motto/job-motto.md' },
          {
            text: "典故箴言",
            items: [
              {text:"事前控制", link:'/motto/allusion/feedforward-control.md'}
            ]
          }
        ]
      },
      {text:"外部链接", link:"/external-link.md"}
    ]
  }
}