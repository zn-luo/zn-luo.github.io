const path=require("path");

module.exports = {
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
    nav:[
      {text:"主页", link: '/'},
      {text:"Github", link:"https://github.com/zn-luo/zn-luo.github.io"},
      {
        text:"前端",
        items:[
          {text:"Vue",link:'/frontEnd/'}
          // {text:"angular", link:'/frontEnd/angular/'}
        ]
      },
      {
        text:"Server",
        items:[
          {
            text:"linux",
            items:[
              {text:"常用命令", link:'/linux/commonCmds/'}
            ]
          },
          {
            text:"设计模式",
            items:[
              {text:"工厂",link:'/designPattern/factory/'},
              {text:"单例", link:'/designPattern/singleton/'}
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
              {text:"切片集群部署", link:'/dbs/mongodb/'},
            ]
          },
          {
            text:"redis",
            items:[
              {text:"redis持久化磁盘负载", link:'/dbs/redis/redis-disk-load'}
            ]
          },
        ]
      },
      {
        text:"运维",
        items:[
          {text:"膜拜Netfix", link:'/devops/' },
          {text:"微服务", link:'/devops/microsoft-core.md' },
          {text:"将工作标准化", link:'/devops/standardized-systems-and-models.md' },
          {text:"CMDB", link:'/devops/cmdb.md' },
          {text:"如何打造运维组织架构", link:'/devops/build-devops-structure.md' },
          {text:"高可用架构的探索与实现", link:'/devops/ha-architecture-exploration-implementation.md' }
        ]
      },
      {
        text:"算法",
        items:[
          {text:"数据结构与算法", link:'/algorithm/data-structure.md' },
          {text:"时间复杂度", link:'/algorithm/time-complexity.md' }
        ]
      },
      {
        text:"k8s",
        items:[
          {text:"容器基础", link:'/k8s/container-basis.md' },
          {text:"K8S概述", link:'/k8s/k8s-base-overview.md' },
          {text:"修改docker与kubelet的Cgroup驱动", link:'/k8s/change-cgroup.md' }
        ]
      },
      {
        text:"箴言",
        items:[
          {text:"职场箴言", link:'/motto/job-motto.md' }
        ]
      },
      {text:"外部链接", link:"/external-link.md"}
    ]
  }
}