### 创建数组

ES6为了规避通过Array构造函数创建数组时的怪异行为，所以添加了新的方法

**Array构造函数：**

```javascript
// 传入数值类型：数组的length属性会被设为该值
let items = new Array(2)
console.log(items.length) // 2
console.log(items[0]) // undefined
console.log(items[1]) // undefined

// 传入一个非数值类型的值，那么这个值会成为目标数据的唯一项
let items = new Array('2')
console.log(items.length) // 1
console.log(items[0]) // 2
console.log(items[1]) // undefined

// 传入多个值，无论这些值是不是数值类型的都会变为数组的元素
let items = new Array(1,'2')
console.log(items.length) // 2
console.log(items[0]) // 1
console.log(items[1]) // 2
```

**Array.of：** 无论有多少参数，无论参数是什么类型都会创建一个包含所有参数的数组

```javascript
let items = Array.of(1, 2)
console.log(items.length) // 2
console.log(items[0]) // 1
console.log(items[1]) // 2

let items = Array.of(2)
console.log(items.length) // 1
console.log(items[0]) // 2
console.log(items[1]) // undefined

let items = Array.of('2')
console.log(items.length) // 1
console.log(items[0]) // 2
console.log(items[1]) // undefined
```

**Array.form:**  可以接受可迭代对象或类数组对象作为第一个参数，最终返回一个数组。