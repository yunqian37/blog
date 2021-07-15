module.exports = {
  title:'MoMo',
  description:'yq的blog',
  base: "/blog/",
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
      {text: 'HTML', link: '/HTML/'},
      {text: 'JS', link: '/JS/'},
      {text: '学习笔记', link: '/Notes/'},
    ],
    sidebar: {
      "/Notes/":[
        {
          title:'VUE 学习',
          path:"vueStudy"
        },
        {
          title:'react 学习',
          path:"reactStudy"
        },
        {
          title:'二级目录',
          children: [
            ['VUE/','二级vue']
          ]
        },
      ]
    }
  }
}