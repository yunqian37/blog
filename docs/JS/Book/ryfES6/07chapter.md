### Object.is()

用来比较两个值是否严格相等，与严格比较运算符的行为基本一致

```javascript
console.log(Object.is(NaN,NaN)) // true
console.log(NaN === NaN) // false

console.log(Object.is(+0,-0)) // false
console.log(+0 === -0) // true
```

### Object.assign()

用于对象的合并，将源对象的所有可枚举属性，复制到目标对象

+ 第一个参数是目标对象，后面的参数都是源对象。如果有同名属性，后面的属性会覆盖前面的属性
+ 如果参数不是对象会先转成对象然后返回
+ 因为undefined和nul无法转成对象，如果作为参数会报错。（不是首参数的情况下不会报错）
+ 只拷贝源对象的自身属性(不拷贝继承属性)，也不拷贝不可枚举属性
+ 属性为Symbol值的属性也会被拷贝

```javascript
let a = { a: 'A'}
let b = { b: 'B', c: 'C'}
let c = { c: 'C'}
console.log(Object.assign(a, b, c)) // {a: "A", b: "B", c: "CC"}
```

**注意点：**

+ Object.assign()方法实行的是浅拷贝
+ 同名属性的替换
+ Object.assign()可以用来处理数组，但是会把数组视为对象
+ 只能进行值的复制，如果要复制的值是一个取值函数，那么将求值后再复制

```javascript
let obj1 = {a: {b: 1}}
let obj2 = Object.assign({}, obj1)
obj1.a.b = 2
console.log(obj2.a.b) // 2
obj2.a.b = 3
console.log(obj1.a.b) // 3
// 处理数组 把数组视为属性名为0、1、2的对象。因此源数组覆盖目标数组
console.log(Object.assign([1, 2, 5], [3, 4])) // [3, 4, 5]

let source = {
  get foo() {
    return 1
  }
}
console.log(Object.assign({},source)) // {foo: 1}
```

**常见用途：**

+ 为对象添加属性
+ 为对象添加方法
+ 克隆对象
+ 合并多个对象
+ 为属性指定默认值



### Object.getOwnPropertyDescriptors()

返回某个对象属性的描述对象，该方法主要是为了解决Object.assign()无法正确拷贝get属性和set属性的问题



### __proto__属性

空置，先深入了解原型链



### Object.keys()、Object.values()、Object.entries()

```javascript
// Object.keys() 遍历对象自身的所有可遍历属性的键名，返回一个数组
let obj = {a: 'A', b: 'B', c:'C'}
console.log(Object.keys(obj)) // ["a", "b", "c"]

/**
* Object.values() 遍历对象自身所有可遍历属性的键值，返回一个数组
* 属性名为数值的属性按照数值大小从小到大遍历
* 会过滤属性名为Symbol值的属性
* 如果参数不是对象，会先将其转换为对象，数值和布尔值则会返回空数组
*/
let obj = {5: 'A', 1: 'B', 2:'C'}
console.log(Object.values(obj)) //  ["B", "C", "A"]

// Object.entries() 返回对象自身所有可遍历属性的键值对数组
let obj = {5: 'A', 1: 'B', 2:'C'}
console.log(Object.entries(obj)) // [["1", "B"],["2", "C"],["5", "A"]]
```



### Object.fromEntries()

Object.entries()的你操作，将一个键值对数组转为对象