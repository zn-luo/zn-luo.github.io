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
              {text:"常用命令", link:'/linux/commonCmds'}
            ]
          },
          {
            text:"设计模式",
            items:[
              {text:"工厂",link:'/designMode/factory'},
              {text:"单例", link:'/designMode/singleton'}
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
          {text:"将工作标准化", link:'/devops/standardized-systems-and-models.md' }
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