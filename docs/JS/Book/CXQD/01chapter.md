**JS的语言类型：** Undefined、Null、Boolean、String、Number、Symbol、Object



# Undefined、Null

**Undefined：** 表示未定义，任何变量在赋值前都是Undefined类型。

**void：** 一元运算符，出现在操作数的左边。操作数可以是任意类型的值



编程规范要求用void 0 代替undefined

因为：undefined并不是js中的保留字，我们可以使用undefined作为变量名字然后给他赋值。void 0输出的唯一结果为undefined，保证了不变性



**Null：** 定义了但是为空，js关键字



# String

**字符串的最大长度 2^53 - 1**

字符串的最大长度受字符串的编码长度影响，字符串的操作：charAt、charCodeAt、length等方法针对的都是UTF16编码



# Number

在js中有 +0 和 -0，加法运算中没有区别，但是除法的场合需要特别留意区分

```javascript
let a = +0
let b = -0
console.log(a + 3) // 3
console.log(b + 3) // 3
console.log(a / 3) // 0
console.log(b / 3) // -0
```

比较0.1 + 0.2 = 0.3的方式

```javascript
let a = 0.1 + 0.2
console.log(Math.abs(a - 0.3) <= Number.EPSILON)
```



# Symbol

**Symbol：** 可以具有字符串类型的描述，即使描述相同Symbol也不相等



# Object

**Object：** js的核心机制之一，是一切有形和无形物体的总称

**对象：** 属性的集合，属性分为数据属性和访问器属性



3 与 new Number(3)是完全不同的值，一个是Number类型，一个是对象类型

```javascript
console.log(new Number(3)) // Number {3}
```

Number、String、Boolean三个构造器是两用的。当跟new搭配时它们产生对象，当直接调用时它们表示强制类型转换



# 类型转换

== 运算符试图实现跨类型的比较，规则非常复杂一般不推荐使用

**装箱转换：** 将基本类型转换为对应的对象

**拆箱转换：** 将对象类型转换为基本类型