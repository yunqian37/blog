### 盒子模型

盒子模型由四个部分组成：margin、border、padding、content(Html元素的内容)。

盒子的大小：

​	宽度：width + padding-left + padding-right + border-left + border-right + margin-left + margin-right

​	高度：height + padding-top + padding-bottom + border-top + borde-bottom + margin-top + margin-bottom

以上是默认计算，盒子的宽高计算方式可以通过box-sizing属性控制

box-sizing属性值：

​	content-box：默认值，设定的宽高不包括padding和border

​	border-box：已经设定的宽高包含padding和border，这种盒子模型被称为IE盒子模型

​	inherit：从父元素继承box-sizing属性