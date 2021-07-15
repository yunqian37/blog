module.exports = {
  title:'云轻',
  description: '一个前端小菜鸡的学习之路',
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
      "/Node/":[
        {
          title:'深入浅出Node.js',
          children: [
            ['Book/srqcNodeJs/01chapter','01-Node简介'],
            ['Book/srqcNodeJs/02chapter','02-模块机制'],
            ['Book/srqcNodeJs/03chapter','03-异步I/O'],
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
      ],
      "/Question/":[
        {title:'Html',path:'Html/'},
        {title:'Css',path:'Css/'},
        {title:'JS',path:'JS/'},
        {title:'Vue',path:'Vue/'},
        {title:'React',path:'React/'},
        {title:'Node',path:'Node/'},
        {title:'Other',path:'Other/'},

      ]
    }
  }
}