### HTML语义化

+ 有利于SEO：和搜索引擎建立良好沟通，有助于爬虫抓取更多的有效信息。爬虫依赖于标签来确定上下文和各个关键字的权重
+ 提升用户体验：例如title、alt可以用于名称或者解释图片信息，以及label标签的灵活运用
+ 便于团队开发和维护
+ 方便其他设备解析
+ 增加代码可读性，有利于维护

### HTML5之前的语义化标签

h1 ～ h6、p、br、ul、ol、li、dl、dt、dd、em、strong、table、thead、tbody、tfoot、td、th、caption

### HTML5新增语义化标签

+ header：定义页面的介绍展示区域，通常包括网站logo、主导航、全站链接以及搜索框。也适合对页面内部一组介绍性或导航性内容进行标记
+ nav：定义页面的导航链接部分区域
+ aside： 定义与主要内容相关的内容块，通常显示为侧边栏
+ article：定义页面独立的内容，可以有自己的header、footer、sections等
+ section：用于标记文档的各个部分
+ footer：定义文档的底部区域，通常包含文档的作者，著作权信息，链接的使用条款，联系信息等
+ main：规定文档的主体内容

### 块级元素

默认情况下，块级元素会新起一行。一般块级元素可以包含行内元素和其他块级元素

div、h1 ～ h6、p、ul、ol、dl、li、form、table、hr以及上面的新增标签

### 行内元素

一般情况下行内元素只能包含数据和其他行内元素，行内元素不会以新行开始

a、img、span、i(斜体)、em(强调)、sub(下标)、sup(上标)

### 行内块元素

button、input、textarea、select

### 样式转换

display：block

display：inline

display：inline-block