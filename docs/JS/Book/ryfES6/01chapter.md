### ECMAScript和JavaScript的关系

ECMAScript是JavaScript的规格

JavaScript是ECMAScript的一种实现

### let与const命令

**let**

+ 只在let命令所在的代码块内有效
+ 声明的变量一定要在声明后使用，否则报错
+ 暂时性死区：只要一进入当前作用域，所要使用的变量就已经存在了，但是不可获取，只有等到声明变量的那一行代码出现才可以获取和使用该变量
+ 不允许重复声明

**const**

+ 只读常量，一旦声明常量的值就不能改变(变量指向的那个内存地址)
+ 只声明，不赋值会报错
+ 只在所在的块级作用域内有效
+ 暂时性死区

```javascript
// 简单类型的数据（数值、字符串、布尔值），值就保存在变量指向的那个内存地址，因此等同于常量
// 复合类型的数据（主要是对象和数组），const只能保证这个指针是固定的。数据结构可变

const animal = {
  type:'dog'
}
animal.name = 'duoduo'
console.log('animal ==>',animal)// animal ==> {type: "dog", name: "duoduo"}

const animal = {
  type:'dog'
}
animal = {
  name:'duoduo'
}
console.log('animal ==>',animal)// 报错

const animal = []
animal.push('dog')
console.log('animal ==>',animal)// animal ==> ["dog"]

const animal = []
animal=['dog']
console.log('animal ==>',animal)// 报错
```



**var**

+ 变量提升，在声明之前使用值为undefined



**ES6声明变量的方法：var、function、let、const、import、class** 



### 顶层对象的属性

var和function声明的全局变量依旧是顶层对象的属性

let、const、class命令声明的全局变量不属于顶层对象的属性

```javascript
var a = 'A'
let b = 'B'
const c = 'C'
function d () {
  console.log('这里是D')
}
console.log('window ==>',window) // 打印出 a:'A'
window.d() // 打印出 这里是D
```

