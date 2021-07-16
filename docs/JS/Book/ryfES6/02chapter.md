解构赋值：从数组和对象中提取值，对变量进行赋值

规则：只要等号右边的值不是对象或数组，就先将其转换为对象。由于undefined和null无法转为对象所以对它们进行解构赋值都会报错

### 数组的解构赋值

```javascript
// 数组的元素按次序排列，变量的取值由它的位置决定。从数组中提取值，按照对应位置对变量赋值，不成功的则为undefined
let [a, b, c] = [1, 2, 3]
console.log('a => ' + a, 'b => ' + b, 'c => ' + c)//a => 1 b => 2 c => undefined

let [a, b, c] = [1, [2, 3], {a:'A'}]
console.log('a => ' + a, 'b => ' + b, c)//a => 1  b => 2,3  c => {a: "A"}

// 如果等号右边不是可遍历解构就会报错
```

**默认值**

```javascript
// 解构赋值允许指定默认值 
let [a = 'A', b, c = 'C'] = []
console.log('a => ' + a, 'b => ' + b, 'c => ' + c)// a => A b => undefined c => C

// ES6内部使用严格相等运算符，判断一个位置是否有值。所以当一个数组成员严格等于undefined默认值才会生效
let [a = 'AA'] = [undefined]
console.log(a) // AA
let [b = 'BB'] = [null]
console.log(b) // null

// 如果默认值是一个表达式 那么这个表达式是惰性求值
function f() {
  console.log('aaa')
}
let [x = f()] = [1]
console.log(x) // 1

// 默认值可以引用解构赋值的其他变量，但该变量必须已经声明
let [a = 'A', b = a] = []
console.log('a => ' + a, 'b => ' + b) // a => A b => A

let [a = b, b = 'B'] = []
console.log('a => ' + a, 'b => ' + b) // 报错
```



### 对象的解构赋值

```javascript
// 对象的属性没有次序，变量必须与属性同名才能取到正确的值，取不到值的则为undefined
let {a, b} = {b: 'B', a: 'A'}
console.log('a => ' + a, 'b => ' + b)// a => A b => B c => undefined

// 可以将现有对象的方法赋值到某个变量
let {max, min} = Math
console.log('max => ' , max(2,4,6)) // 6
console.log('min => ' , min(2,4,6)) // 2

// 变量名与属性名不一致，对象解构赋值的内部机制：先找同名属性然后再赋值给对应的变量
let { foo: baz } = { foo: 'aaa', bar: 'bbb'}
console.log('baz', baz) // aaa
console.log('foo', foo) // 报错

// 嵌套解构的对象
let obj = {
  p: ['Hello', { y: 'World'}]
}
let { p: [x, { y }] } = obj
console.log('x => ', x) // Hello
console.log('y => ', y) // World
// 如果p要被赋值
let { p, p: [x, { y }] } = obj

// 如果解构模式是嵌套的对象，而且子对象所在的父属性不存在那么将会报错

// 对象的解构赋值可以取到继承的属性

```

**默认值**

```javascript
// 指定默认值
let { x = 1 } = {}
console.log('x => ', x) // x =>  1

let { x: y = 3 } = { x: 5 }
console.log('y => ', y) // 5
console.log('x => ', x) // 报错

// 默认值生效条件：对象的属性值严格等于undefined

```

注意点暂时没有记录进来



### 字符串的解构赋值

字符串也可以解构赋值，因为此时字符串被转换成了一个类似数组的对象



### 数值和布尔值的解构赋值

```javascript
// 目前没发现有实际可操作业务
let { toString: a } = 100
console.log('a => ', a === Number.prototype.toString) // true
```



### 函数参数的结构赋值

```javascript
function add([x, y]) {
  return x + y
}
console.log(add([2, 3])) // 5

// 默认值
function move({ x = 1, y = 2} = {}) {
  return [x, y]
}
console.log(move()) // [1, 2]
console.log(move({ x : 11})) // [11, 2]

function move({ x, y } = { x : 0, y : 0 }) {
  return [x, y]
}
console.log(move()) // [0,0]
console.log(move({})) // [undefined, undefined]

function move([x, y] = [5, 6]) {
  return [x, y]
}
console.log(move()) // [5, 6]
console.log(move([3])) // [3, undefined]
```



### 圆括号问题

不使用圆括号的情况

+ 变量语句声明
+ 函数参数
+ 赋值语句的模式

可以使用圆括号的情况

+ 赋值语句的非模式部分

```javascript
[(b)] = [3]
console.log('b => ', b) // 3

// 还有两种目前没明白
```



### 用途

+ 交换变量的值
+ 从函数返回多个值
+ 函数参数的定义
+ 提取JSON数据
+ 函数参数的默认值
+ 遍历Map结构
+ 输入模块的指定方法

