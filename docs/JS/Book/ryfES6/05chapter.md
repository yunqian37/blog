### 扩展运算符(...)

将一个数组转为用逗号分隔的参数序列

```javascript
// 扩展运算符后面可以放置表达式
let x = -1
let arr = [
  ...(x > 0 ? ['a'] : []), 'b'
]
console.log(arr) // ['b']
```

### 扩展运算符的应用

```javascript
// 复制数组 数组是复合的数据类型，直接复制只是复制了指向底层数据结构的指针，而不是克隆一个全新的数组

// 修改a2会导致a1改变
let a1 = [1, 2, 3]
let a2 = a1
console.log('a1 => ', a1) // [1, 2, 3]
console.log('a2 => ', a2) // [1, 2, 3]
a2[0] = 6
console.log('a1 => ', a1) // [6, 2, 3]
console.log('a2 => ', a2) // [6, 2, 3]

let a1 = [1, 2, 3]
let a2 = [...a1]
console.log('a1 => ', a1) // [1, 2, 3]
console.log('a2 => ', a2) // [1, 2, 3]
a2[0] = 6
console.log('a1 => ', a1) // [1, 2, 3]
console.log('a2 => ', a2) // [6, 2, 3]


// 合并数组 浅拷贝
let a1 = [1, 2, 3]
let a2 = [4, 5, 6]
let a3 = [...a1, ...a2]
console.log(a3) // [1, 2, 3, 4, 5, 6]

// 与解构赋值结合 如果扩展运算符用于数组赋值，只能放在参数的最后一位，否则会报错
let [a, ...b] = [1, 2, 3, 4]
console.log(a) // 1
console.log(b) // [2, 3, 4]

// 字符串 扩展运算符可以将字符串转为真正的数组
console.log([...'hello']) // ["h", "e", "l", "l", "o"]

// 实现了Iterator接口的对象：任何定义了遍历器接口的对象都可以用扩展运算符转为真正的数组
```

### Array.form()

```javascript
// Array.form()方法用于将两类对象转为真正的数组：类似数组的对象，和可遍历的对象

// 类似数组对象
let arr = {
  '0': 'a',
  '1': 'b',
  '2': 'c',
  length: 3
}
let arr1 = Array.from(arr)
console.log('arr1 => ', arr1) // ["a", "b", "c"]
```

### Array.of()

```javascript
console.log(Array.of(1, 2, 3)) // [1, 2, 3]
```

### 数组实例的copyWithin()

**参数：**

+ target(必需)：从该位置开始替换数据，如果为负值表示倒数
+ start(可选)：从该位置开始读取数据，默认为0，如果为负值表示从末尾开始计算
+ end(可选)：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示从末尾开始计算

```javascript
// 在当前数组内部，将指定位置的成员复制到其他位置(会覆盖原有成员)，然后返回当前数组。即这个方法会修改当前数组

// 目前没看懂替换方式
```

### 数组实例的find()和findIndex()

**find()：**找出第一个符合条件的数组成员，参数是一个回调函数，所有数组成员依次执行该回调函数，直至找出第一个返回值为true的成员。如果没有符合条件的成员则返回undefined

**findIndex：**用法与find类似，返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件则返回-1

```javascript
let arr = [1, 2, 3, 4, 5, 6]
let findData = arr.find((n) => {
  return n > 5
})
console.log(findData) // 6

arr.find((value, index, arr) => {
  // value：当前的值
  // index：当前的位置
  // arr：原数组
})
```

### fill()

```javascript
// 使用给定值，填充一个数组
let arr = [1, 2, 3]
arr.fill(4)
console.log(arr) // [4, 4, 4]
// 参数2:指定填充的起始位置，参数3:指定填充的结束位置
let arr = [1, 2, 3]
arr.fill(5, 0, 1)
console.log(arr) // [5, 2, 3]
// 如果填充的类型为对象，那么被赋值的是同一个内存地址的对象，而不是深拷贝对象
let arr = [
  { name: 'aa' },
  { name: 'bb'}
]
arr.fill({ name: 'cc' })
console.log(arr) // [{ name: 'cc' }, { name: 'cc' }]

let arr = [
  { name: 'aa' },
  { name: 'bb'}
]
let arr1 = arr.fill({ name: 'cc' })
console.log(arr) // [{ name: 'dd' }, { name: 'dd' }]
console.log(arr1) // [{ name: 'dd' }, { name: 'dd' }]
arr1[0].name = 'dd' // 该代码还未执行，但上面console已经为dd了
```

### 数组实例的entries()、keys()、values()

```javascript
// entries 对键值对的遍历
let arr = ['a', 'b', 'c']
for (let val of arr.entries()) {
  console.log(val) // 依次打印 [0, "a"] [1, "b"] [2, "c"]
}

// keys 对键名的遍历
let arr = ['a', 'b', 'c']
for (let val of arr.keys()) {
  console.log(val) // 依次打印 0 1 2
}

// values 对键值的遍历
let arr = ['a', 'b', 'c']
for (let val of arr.values()) {
  console.log(val) // 依次打印 a b c
}

// 如果不使用for...of循环，可以手动调用遍历器对象的next方法进行遍历
let arr = ['a', 'b', 'c']
let entries = arr.entries()
console.log(entries.next().value) // [0, "a"]
```

### 数组实例的includes()

```javascript
// 返回一个布尔值，表示某个数组是否包含给定的值。第二个参数表示搜索的起始位置默认为0，如果参数为负数则表示倒数的位置，如果大于数组的长度则会重置为0开始
let arr = ['a', 'b', 'c']
console.log(arr.includes('a')) // true
console.log(arr.includes('d')) // false
console.log(arr.includes(NaN)) // true

// 与indexOf比较：indexOf内部使用严格相等运算符判断，无法准确判断NaN
```

### 数组实例的flat(),flatMap()

```javascript
// 将嵌套的数组拉平，变成一维数组，有空位会跳过。返回一个新数组，对原数据没有影响
let arr = [1, , [3, 4], 5]
console.log(arr.flat()) // [1, 3, 4, 5]

// 多层嵌套 将flat方法的参数写成一个整数，表示要拉平的层数。默认值 1
let arr = [1, 2, [3, 4, [5, 6]], 7]
console.log(arr.flat()) // [1, 2, 3, 4, [5, 6], 7]
console.log(arr.flat(2)) // [1, 2, 3, 4, 5, 6, 7]
// 不管有多少层都要转为一维数组，可以用Infinity关键字作为参数
console.log(arr.flat(Infinity)) // [1, 2, 3, 4, 5, 6, 7]

// flatMap() 一维数组转多维数组
```

### 数组的空位

指数组的某一个位置没有任何值，由于空位的处理规则非常不统一，所以应避免出现空位

