module.exports = {
  title:'云轻',
  description: 'Hello World',
  base: "/",
  head: [
    ['link', {rel: 'icon', href: '/logo.png'}]
  ],
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': 'path/to/some/dir'
      }
    }
  },
  themeConfig: {
    nav: [
      {text: 'Home', link: '/'},
      {text: 'JS', link: '/JS/'},
      {text: 'Node', link: '/Node/'},
      {text: '其他', link: '/Other/'},
      {text: '面试题', link: '/Question/'},
    ],
    sidebar: {
      "/JS/":[
        {
          title:'ECMAScript 6 入门教程',
          children: [
            ['Book/ryfES6/01chapter','01-let和const'],
            ['Book/ryfES6/02chapter','02-解构赋值'],
            ['Book/ryfES6/03chapter','03-数值的扩展'],
            ['Book/ryfES6/04chapter','04-函数的扩展'],
            ['Book/ryfES6/05chapter','05-数组的扩展'],
            ['Book/ryfES6/06chapter','06-对象的扩展'],
            ['Book/ryfES6/07chapter','07-对象的新增方法'],
            ['Book/ryfES6/08chapter','08-运算符的扩展'],
            ['Book/ryfES6/09chapter','09-Symbol'],
            ['Book/ryfES6/10chapter','10-Set和Map数据结构'],
            ['Book/ryfES6/11chapter','11-Proxy'],
            ['Book/ryfES6/12chapter','13-Promise'],
          ]
        },
      ],
      "/Node/":[
        {
          title:'深入浅出Node.js',
          children: [
            ['Book/srqcNodeJs/01chapter','01-Node简介'],
            ['Book/srqcNodeJs/02chapter','02-模块机制'],
            ['Book/srqcNodeJs/03chapter','03-异步I/O'],
            ['Book/srqcNodeJs/04chapter','04-异步编程'],
          ]
        },
        {
          title:'immoc视频学习笔记',
          children: [
            ['Video/basics/','基础入门'],
          ]
        },
      ],
      "/Other/":[
        {title:'命令行',path:'command'},
        {title:'项目BUG及解决方案',path:'bug'},
      ],
      "/Question/":[
        {title:'Html',path:'Html/'},
        {title:'Css',path:'Css/'},
        {
          title:'JS',
          children: [
            ['JS/event','JS事件循环机制'],
          ]
        },
        {title:'Vue',path:'Vue/'},
        {title:'React',path:'React/'},
        {title:'Node',path:'Node/'},
        {
          title:'Other',
          children: [
            ['Other/url','从输入URL到页面加载的过程'],
          ]
        },
      ]
    }
  }
}