# 初始化项目

vue create 项目名称

##### 初始化项目配置：

+ 手动features

+ choose Vue version、babel、router、vuex、css pre-processors、linter/formatter

+ use history mode for router？ n

+ Sass/SCSS（width node-sass）

+ ESLint + Standard config

+ Lint on save

+ In dedicated config files

+ 是否保存预设

  

# 初始化项目各文件

+ package.json：描述文件
  + scripts：
  + dependencies：项目运行时依赖
  + devDependencies：项目开发时依赖
+ .browserslistrc：浏览器兼容性配置文件
+ .editorconfig：编辑器配置文件
+ .eslintrc：esLint的配置
+ .gitignore：里面配置的文件不会提交到git
+ babel.config：babel相关的设置
+ package-lock：npm依赖的一个锁，对比package.json版本。版本不一致才会下载新的



# 基础文件配置修改

./public/index.html	禁止用户双击缩放

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
```

+ 配置assets中的fonts文件和scss文件
+ main.js中引入scss的index文件
+ vue.config.js中配置全局引入variable.scss和mixin.scss文件（node-sass版本5.0.0搭配sass-loader版本10.1.0否则会报错）



# 配置tab

Commponents/tab.vue中设置tab组建

views中配置tab下的相关子页面

router/index.js文件配置路由，当点击tab时可以进行跳转



# 配置请求

在vue.config.js中配置node.js的请求，引入backend/rputer文件

安装axios

新建service/base.js配置基本的get请求



新建recommend.js文件。设置recommend相关的接口请求



依赖安装：yarn add pinyin --dev