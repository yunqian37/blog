# 盒子模型

盒子模型由四个部分组成：margin、border、padding、content(Html元素的内容)。

盒子的大小：

​	宽度：width + padding-left + padding-right + border-left + border-right + margin-left + margin-right

​	高度：height + padding-top + padding-bottom + border-top + borde-bottom + margin-top + margin-bottom

以上是默认计算，盒子的宽高计算方式可以通过box-sizing属性控制

box-sizing属性值：

​	content-box：默认值，设定的宽高不包括padding和border

​	border-box：已经设定的宽高包含padding和border，这种盒子模型被称为IE盒子模型

​	inherit：从父元素继承box-sizing属性

# 垂直居中布局

```css
/* flex布局 */
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* flex布局 二 */
.wrapper {
  display: flex;
}
.inner {
  margin: auto;
}

/* 定位 */
.wrapper {
  position: relative;
}
.inner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```



# css选择器

+ id选择器
+ 类选择器
+ 属性选择器
+ 伪类选择器
+ 标签选择器
+ 相邻选择器(h1 + p)
+ 子选择器(ul > li)
+ 后代选择器(li a)
+ 通配符选择器(*)

!important > 行内样式 > ID选择器 > 类选择器 > 标签 > 通配符



# BFC

块级格式化上下文，一个独立的渲染区域，规定了内部BOX如何布局并且这个区域的子元素不会影响到外面的元素

**BFC的原理布局规则：**

+ 内部的box会在垂直方向一个接一个的放置
+ box垂直方向的距离有margin决定。属于同一个BFC的两个相邻box的margin会发生重叠
+ 每个元素的margin box的左边，与包含块border box的左边相接触
+ BFC的区域不会与float box重叠
+ BFC是一个独立容器，容器里面的子元素不会影响到外面的元素
+ 计算BFC的高度时，浮动元素也参与计算高度
+ 元素的类型和display属性，决定了这个box的类型

**创建BFC：** 

+ float的值不为none
+ position为absolute或fixed
+ display的值为inline-block、table-cell、table-caption
+ overflow的值不为visible

**使用场景：** 

+ 去除边距重叠现象
+ 清除浮动
+ 避免某元素被浮动元素覆盖
+ 避免多列布局由于宽度计算四舍五入而自动换行



# 隐藏页面中某个元素的方法

+ opacity：0
+ display：none
+ visibility：hidden



# 清除浮动

```css
/* 伪元素清除浮动 */
.parent:after {
  content: '';
  display: block;
  height: 0;
  visibility: hidden;
  clear: both; /* 关键*/
}
```



### 参考

<a href="https://juejin.cn/post/7016593221815910408#heading-19">连八股文都不懂还指望在前端混下去么</a>

