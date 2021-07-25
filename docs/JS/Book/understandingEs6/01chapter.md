### 迭代器

**迭代器：** 一种特殊对象，具有一些专门为迭代过程设计的专有接口，所有的迭代器对象都有一个next()方法，每次调用都会返回一个结果对象。

结果对象有两个属性：

+ value：下一个将要返回的值
+ done：一个布尔类型的值，当没有更多可返回数据时返回true

迭代器还会保存一个内部指针，用来指向当前集合中值的位置，没屌用一次next()方法都会返回下一个可用的值。

对象中属性done的值为true时，属性value则包含迭代器最终返回的值，这个返回值不是数据集的一部分，它与函数的返回值蕾丝，是函数调用过程中最后一次给调用者传递信息的方法。如果没有相关数据则返回undefined

```javascript
// ES5语法创建的迭代器
function createIterator(items) {
  var i = 0
  return {
    next: function() {
      var done = (i >= items.length)
      var value = !done ? items[i++] : undefined
      return {
        done: done,
        value: value
      }
    }
  }
}
var iterator = createIterator([1, 2, 3])
console.log(iterator.next()) // {done: false, value: 1}
console.log(iterator.next()) // {done: false, value: 2}
console.log(iterator.next()) // {done: false, value: 3}
console.log(iterator.next()) // {done: true, value: undefined}
```

### 生成器

**生成器：** 一种返回迭代器的函数，通过function关键字后的*来表示，函数中会用到新的关键字yield

```javascript
function *createIterator() {
  yield 1
  yield 2
  yield 3
}
let iterator = createIterator()
console.log(iterator.next()) // {value: 1, done: false}
console.log(iterator.next()) // {value: 2, done: false}
console.log(iterator.next()) // {value: 3, done: false}
console.log(iterator.next()) // {value: undefined, done: true}
```

**yield:** 通过yield来指定调用迭代器的next方法时的返回值及返回顺序，每当执行完一条yield语句后函数就会自动停止执行

使用yield关键字可以返回任何值或表达式，所以可以通过生成器函数批量地给迭代器添加元素

```javascript
// 在循环中使用yield关键字
function *createIterator(items) {
  for (let i = 0; i < items.length; i++) {
    yield items[i]
  }
}
let iterator = createIterator([1, 2, 3])
console.log(iterator.next()) // {value: 1, done: false}
console.log(iterator.next()) // {value: 2, done: false}
console.log(iterator.next()) // {value: 3, done: false}
console.log(iterator.next()) // {value: undefined, done: true}
```

注：yield关键字只可在生成器内部使用，在其他地方使用会导致程序抛出语法错误，即便在生成器的内部函数里使用也是如此

### 生成器函数表达式

不能用箭头函数创建生成器

```javascript
// createIterator:生成器函数表达式，匿名函数表达式*直接放在function关键字和小括号之间
let createIterator = function *(items) {
  for (let i = 0; i < items.length; i++) {
    yield items[i]
  }
}
let iterator = createIterator([1, 2, 3])
console.log(iterator.next()) // {value: 1, done: false}
console.log(iterator.next()) // {value: 2, done: false}
console.log(iterator.next()) // {value: 3, done: false}
console.log(iterator.next()) // {value: undefined, done: true}
```

### 生成器对象的方法

由于生成器本身就是函数，因此可以将它们添加到对象中

```javascript
// ES5
let o = {
  createIterator: function *(items) {
    for (let i = 0; i < items.length; i++) {
      yield items[i]
    }
  }
}
let iterator = o.createIterator([1, 2, 3])
// ES6
let o = {
  *createIterator(items) {
    for (let i = 0; i < items.length; i++) {
      yield items[i]
    }
  }
}
let iterator = o.createIterator([1, 2, 3])
```

### 可迭代对象和for...of循环

在ES6中所有的集合对象（数组、Set集合及Map集合）和字符串都是可迭代对象，这些对象中都有默认的迭代器

由于生成器默认会为Symbol.iterator属性赋值，因此所有通过生成器创建的迭代器都是可迭代对象

for-of循环每执行一次都会调用可迭代对象的next方法，并将迭代器返回的结果对象的value属性存储在一个变量中，循环将持续这一过程知道返回对象的done属性的值为true

```javascript
// 以下代码通过调用values数组的Symbol.iterator方法来获取迭代器，这一过程是在js引擎背后完成的
let values = [1, 2, 3]
for (let num of values) {
  console.log(num) // 依次输出 1 2 3
}
```

### 访问默认迭代器

```javascript
// 通过Symbol.iterator来访问对象的默认迭代器
let values = [1, 2, 3]
let iterator = values[Symbol.iterator]()
console.log(iterator.next()) // {value: 1, done: false}
console.log(iterator.next()) // {value: 2, done: false}
console.log(iterator.next()) // {value: 3, done: false}
console.log(iterator.next()) // {value: undefined, done: true}

// 检测对象是否为可迭代对象,是否存在默认的函数类型迭代器。for-of循环在执行前也会做相似的检查
function isIterable(object) {
  return typeof object[Symbol.iterator] === 'function'
}
console.log(isIterable([1, 2, 3])) // true
console.log(isIterable('Hello')) // true
console.log(isIterable(new Map())) // true
console.log(isIterable(new Set())) // true
console.log(isIterable(new WeakMap())) // false
console.log(isIterable(new WeakSet())) // false
```

### 创建可迭代对象

默认情况下开发者定义的对象都是不可迭代对象，但如果给Symbol.iterator属性添加一个生成器，则可以将其变为可迭代对象

```javascript
let collection = {
  items: [],
  // 创建生成器并赋值给对象的Symbol.iterator属性来创建默认的迭代器
  *[Symbol.iterator]() {
    // 通过for-of循环迭代this.items并用yield返回每一个值
    for (let item of this.items) {
      yield item
    }
  }
}
// collection对象默认迭代器的返回值由迭代器this.items自动生成，而非手动遍历来定义返回值
collection.items.push(1)
collection.items.push(2)
collection.items.push(3)
for (let x of collection) {
  console.log(x) // 依次输出 1 2 3
}
```

### 内建迭代器

在ES6中已经默认为许多内建类型提供了内建迭代器，只有当这些内建迭代器无法实现你的目标时才需要自己创建

**集合对象迭代器：** 在ES6中有三种类型的集合对象，数组、Map集合、Set集合，为了更好地访问对象中的内容这三种对象都内建了一下三种迭代器

+ entries：返回一个迭代器，其值为多个键值对
+ values：返回一个迭代器，其值为集合的值
+ keys：返回一个迭代器，其值为集合中所有的键名

```javascript
// 每次调用next方法时entries迭代器都会返回一个数组，数组中的两个元素分别表示集合中每个元素的键与值

// 数组：第一个元素是数字类型的索引
let colors = ['red', 'green', 'blue']
for (let enrty of colors.entries()) {
  console.log(enrty) // 依次打印[0, "red"] [1, "green"] [2, "blue"]
}

// Set集合：第一个元素与第二个元素都是值（Set集合中的值被同时作为键与值使用）
let tracking = new Set([1234, 5678, 9012])
for (let enrty of tracking.entries()) {
  console.log(enrty) // 依次打印[1234, 1234] [5678, 5678] [9012, 9012]
}

// Map集合：第一个元素为键名
let data = new Map()
data.set('title','ES6')
data.set('format','ebook')
for (let enrty of data.entries()) {
  console.log(enrty) // 依次打印["title", "ES6"] ["format", "ebook"]
}
```

```javascript
// 调用values迭代器时会返回集合中所存的所有值,返回的是每个集合中所包含的真正的数据而不会包含数据在集合中的位置信息

let colors = ['red', 'green', 'blue']
for (let value of colors.values()) {
  console.log(value) // 依次打印 red green blue
}

let tracking = new Set([1234, 5678, 9012])
for (let value of tracking.values()) {
  console.log(value) // 依次打印 1234 5678 9012
}

let data = new Map()
data.set('title','ES6')
data.set('format','ebook')
for (let value of data.values()) {
  console.log(value) // 依次打印 ES6 ebook
}
```

```javascript
// keys迭代器会返回集合中存在的每一个键

let colors = ['red', 'green', 'blue']
for (let key of colors.keys()) {
  console.log(key) // 依次打印 0 1 2
}

let tracking = new Set([1234, 5678, 9012])
for (let key of tracking.keys()) {
  console.log(key) // 依次打印 1234 5678 9012
}

let data = new Map()
data.set('title','ES6')
data.set('format','ebook')
for (let key of data.keys()) {
  console.log(key) // 依次打印 title format
}
```

**不同集合类型的默认迭代器** 

每个集合类型都有一个默认的迭代器，在for-of循环中如果没有显示指定则使用默认的迭代器

```javascript
// 数组默认的迭代器是valuse方法
let colors = ['red', 'green', 'blue']
for (let value of colors) {
  console.log(value) // 依次打印 red green blue
}
// Set集合默认的迭代器也是values方法
let tracking = new Set([1234, 5678, 9012])
for (let num of tracking) {
  console.log(num) // 依次打印 1234 5678 9012
}
// Map集合的默认迭代器是entries方法，按照Map构造函数参数的格式返回相同的数组内容
let data = new Map()
data.set('title','ES6')
data.set('format','ebook')
for (let entry of data) {
  console.log(entry) // 依次打印 ["title", "ES6"] ["format", "ebook"]
}
```

注：WeakSet集合与WeakMap集合就没有内建的迭代器，由于要管理弱引用因而无法确切地知道集合中存在的值，也就无法迭代这些集合

```javascript
// 解构与for-of循环
let data = new Map()
data.set('title','ES6')
data.set('format','ebook')
for (let [key, value] of data) {
  console.log(key) // 依次打印 title format
  console.log(value) // 依次打印 ES6 ebook
}
```

### 字符串迭代器

```javascript
var msg = "A 吉 B"
for (let c of msg) {
  console.log(c) // 依次打印 A 空格 吉 空格 B
}
```

### NodeList迭代器

DOM标准中有一个NodeList类型，代表页面文档中所有元素的集合。

NodeList对象和数组都是用length属性来表示集合中元素的数量，都可以用[]来访问集合中的独立元素

```javascript
// 自从ES6添加了默认迭代器后，DOM定义中的NodeList类型也拥有了默认迭代器，其行为与数组的默认迭代器完全一致
<div id="one">111</div>
<div id="two">222</div>
<div id="three">333</div>

var divs = document.getElementsByTagName('div')
for (let div of divs) {
  console.log(div.id) // 依次打印 one two three
}
```

### 展开运算符与非数组可迭代对象

展开运算符可以作用于任意可迭代对象，因此如果想将可迭代对象转换为数组这是最简单的方法

### 高级迭代器功能

```javascript
// 给迭代器传递参数

function *createIterator() {
  let first = yield 1
  let second = yield first + 2
  yield second + 3
}
let iterator = createIterator()
/**
*	第一次调用next方法时无论传入什么参数都会被丢弃
* 由于传给next方法的参数会替代上一次yield的返回值而在第一次调用next方法前不会执行任何yield语句，因此第一次调用next方法时传递参数是毫无意义的
*/ 
console.log(iterator.next()) // {value: 1, done: false}
/**
*	第二次调用next方法传递的参数最后会被复制给生成器函数内部的变量first。
*	在一个含yield语句中表达式右侧等价于第一次调用next方法后的下一个返回值
* 表达式左侧等价于第二次调用next方法后在函数继续执行前得到的返回值
*/ 
console.log(iterator.next(1)) // {value: 3, done: false}
console.log(iterator.next(2)) // {value: 5, done: false}
console.log(iterator.next()) // {value: undefined, done: true}
console.log(iterator.next(3)) // {value: undefined, done: true}

// 给迭代器的next方法传值时yield语句可以返回相应计算后的值
```

**在迭代器中抛出错误**

除了给迭代器传递数据外，还可以给它传递错误条件。通过throw方法，当迭代器恢复执行时可令其抛出一个错误。模拟结束函数执行的两种方法（返回值 或 抛出错误）这样可以增强生成器内部的编程弹性。

```javascript
function *createIterator() {
  let first = yield 1
  let second = yield first + 2
  yield second + 3
}
let iteator = createIterator()
console.log(iteator.next()) // {value: 1, done: false}
console.log(iteator.next(3)) // {value: 5, done: false}
console.log(iteator.throw(new Error('Boom'))) // 报错
console.log(iteator.next(4)) // 不执行


function *createIterator() {
  let first = yield 1
  let second
  try {
    second = yield first + 2
  } catch (ex) {
    second = 6
  }
  yield second + 3
}
let iterator = createIterator()
console.log(iterator.next()) // {value: 1, done: false}
console.log(iterator.next(3)) // {value: 5, done: false}
console.log(iterator.throw(new Error('Boom'))) // {value: 9, done: false}
console.log(iterator.next()) // {value: undefined, done: true}
```

### 生成器返回语句

由于生成器也是函数，因此可以通过return语句提前退出函数执行。对于最后一次next方法调用可以主动为其指定一个返回值。

在生成器中return表示所有操作已经完成，属性done被设置为true。如果同时提供了相应的值则属性value会被设置为这个值

```javascript
function *createIterator() {
  yield 1
  return
  yield 2
  yield 3
}
let iterator = createIterator()
console.log(iterator.next()) // {value: 1, done: false}
console.log(iterator.next()) // {value: undefined, done: true}

function *createIterator() {
  yield 1
  return 23
}
let iterator = createIterator()
console.log(iterator.next()) // {value: 1, done: false}
console.log(iterator.next()) // {value: 23, done: true}
console.log(iterator.next()) // {value: undefined, done: true}
```

注：展开运算符与for-of循环语句会直接忽略通过return语句指定的任何返回值，只要done一变为true就立即停止读取其他的值

### 委托生成器

在某些情况下需要将两个迭代器合二为一，这时可以创建一个生成器，再给yield语句添加一个*就可以将生成数据的过程委托给其他迭代器

```javascript
function *createNumberIterator() {
  yield 1
  yield 2
}
function *createColorIterator() {
  yield 'red'
  yield 'green'
}
function *createCombinedIterator() {
  yield *createNumberIterator()
  yield *createColorIterator()
  yield true
}
var iterator = createCombinedIterator()
console.log(iterator.next()) // {value: 1, done: false}
console.log(iterator.next()) // {value: 2, done: false}
console.log(iterator.next()) // {value: 'red', done: false}
console.log(iterator.next()) // {value: 'green', done: false}
console.log(iterator.next()) // {value: true, done: false}
console.log(iterator.next()) // {value: undefined, done: true}

function *createNumberIterator() {
  yield 1
  yield 2
  return 3
}
function *createRepeatingIterator(count) {
  for (let i = 0; i < count; i++) {
    yield 'repeat'
  }
}
function *createCombinedIterator() {
  // 返回值3 赋值给result
  let result = yield * createNumberIterator()
  // result 的3作为参数传递
  yield *createRepeatingIterator(result)
}
var iterator = createCombinedIterator()
console.log(iterator.next()) // {value: 1, done: false}
console.log(iterator.next()) // {value: 2, done: false}
console.log(iterator.next()) // {value: 'repeat', done: false}
console.log(iterator.next()) // {value: 'repeat', done: false}
console.log(iterator.next()) // {value: 'repeat', done: false}
console.log(iterator.next()) // {value: undefined, done: true}
```

注：yield *也可以直接应用于字符串，例：yield * “hello”

### 异步任务执行

例如在读取文件时如果需要嵌套回掉或序列化一系列的异步操作，这时就可以使用yield语句

### 简单任务执行

由于执行yield语句会暂停当前函数的执行过程并等待下一次调用next方法。因此可以创建一个函数，在函数中调用生成器生成相应的迭代器。从而在不调用函数的基础上实现异步调用next方法

```javascript
function run(taskDef) {
  // 创建一个无使用限制的迭代器
  let task = taskDef()
  // 开始执行任务
  let result = task.next()
  // 循环调用next函数
  function step() {
    // 如果任务未完成则继续执行
    if (!result.done) {
      result = task.next()
      step()
    }
  }
  // 开始迭代执行
  step()
}
// 借助run函数可以像这样执行一个包含多条yield语句的生成器
run(function *() {
  console.log(1)
  yield
  console.log(2)
  yield
  console.log(3)
})
```

### 向任务执行器传递数据

给任务执行器传递数据最简单的办法是把yield返回的值传人下一次next方法的调用

```javascript
// 数据在yield调用间互相传递
function run(taskDef) {
  // 创建一个无使用限制的迭代器
  let task = taskDef()
  // 开始执行任务
  let result = task.next()
  // 循环调用next函数
  function step() {
    // 如果任务未完成则继续执行
    if (!result.done) {
      result = task.next(result.value)
      step()
    }
  }
  // 开始迭代执行
  step()
}
run(function *() {
  let value = yield 5
  console.log(value) // 5
  value = yield value + 3
  console.log(value) // 8
})
```

### 异步任务执行器

由于yield表达式会将值返回给任务执行器，所有的函数调用都会返回一个值。因而在某种程度上这也是一个异步操作，任务执行器会一直等待直到操作完成

```javascript
function fetchData() {
  return function(callback) {
    setTimeout(function() {
      callback(null, 'Hi')
    }, 50)
  }
}
function run(taskDef) {
  // 创建一个无使用限制的迭代器
  let task = taskDef()
  // 开始执行任务
  let result = task.next()
  // 循环调用next函数
  function step() {
    // 如果任务未完成则继续执行
    if (!result.done) {
      if (typeof result.value === 'function') {
        result.value(function(err, data) {
          if (err) {
            result = task.throw(err)
            return
          }
          result = task.next(data)
          step()
        })
      } else {
        result = task.next(result.value)
        step()
      }
    }
  }
  // 开始迭代执行
  step()
}
// 没有具体的执行举例，书上使用的是Node.js中的大文件读取案例
```
