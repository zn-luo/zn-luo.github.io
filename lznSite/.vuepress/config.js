module.exports = {
  title: 'LZN Site',
  description: '个人站点',
  head:[
    ['link',{rel:" shortcut icon", type:"image/x-icon", href:`/imgs/favicon.ico`}]
  ],
  themeConfig:{    
    nav:[
      {text:"主页", link: '/'},
      {text:"Github", link:"https://github.com/luo-zn"},
      {
        text:"前端",
        items:[
          {text:"Vue",link:'/frontEnd/vue'},
          {text:"angular", link:'/frontEnd/angular'}
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
      {text:"外部链接", link:"/external-link.md"}
    ]
  }
}