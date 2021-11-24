**值类型：** undefined、字符串、Number、Boolean、Symbol

**引用类型：** 

+ 对象
+ 数组
+ null：特殊引用类型，指针指向为空地址
+ function：特殊引用类型，但不用于存储数据。所以没有拷贝、复制一说

**typeof：**

+ 识别所有值类型
+ 识别函数 返回function
+ 判断是否是引用类型（不可再细分）返回Object


**类型转换：** 除了 == null之外其他一律用 === 

**深拷贝和浅拷贝最根本的区别在于是否真正获取一个对象的复制实体，而不是引用。**

假设：B复制了A，当修改A时B跟着变了则是浅拷贝，B没有变则是深拷贝

**浅拷贝：** 将原对象或原数组的引用直接赋给新对象、新数组。新对象、新数组只是对原对象的一个引用

**深拷贝：** 创建一个新的对象和数组，将原对象的各项属性的“值”（数组的所有元素）拷贝过来

### 基本数据类型和引用数据类型

**基本数据类型：** 直接存储在栈中的数据。String、Number、Boolean、Symbol、Undefined、Null

+ 是直接按值存放的可以直接访问
+ 值不可变，动态修改了基本数据类型的值，它的原始值也是不会改变的

```javascript
let a = 'hello'
a[1] = 'world'
// console.log(a[1] = 'world') // world
console.log(a)
```

**引用数据类型：** 存储的是该对象在栈中引用，真实的数据存放在堆内存里。Object

+ 变量实际上是一个存放在栈内存的指针，这个指针指向堆内存中的地址。每个空间大小不一样要根据情况进行特定的分配

```javascript
let b = [1, 2, 3]
b[1] = 6
// console.log(b[1] = 6) // 6
console.log(b) // [1, 6, 3]
```

### 赋值和浅拷贝、深拷贝的区别

**赋值：** 赋的其实是该对象在栈中的地址，而不是堆中的数据。两个对象指向的是同一个存储空间，无论哪个对象发生改变，改变的都是存储空间的内容。所以两个对象是联动的

+ 和原数据是否指向同一对象：是

+ 第一层数据为基本数据类型：改变会使原数据一同改变
+ 原数据包含子对象：改变会使原数据一同改变

**浅拷贝：** 重新在堆中创建内存。拷贝前后对象的基本数据类型互不影响，但拷贝前后对象的引用类型因共享同一块内存会相互影响

+ 第一层数据为基本数据类型：改变不会使原数据一同改变
+ 原数据中包含子对象：改变会使原数据一同改变

**深拷贝：** 从堆内存中开辟一个新的区域存放新对象。对对象中的子对象进行递归拷贝，拷贝前后的两个对象互不影响

|        | 和原数据是否指向同一对象 | 第一层数据为基本数据类型 |  原数据中包含子对象  |
| :----: | :----------------------: | :----------------------: | :------------------: |
|  赋值  |            是            |    会使原数据一同改变    |  会使原数据一同改变  |
| 浅拷贝 |            否            |   不会使原数据一同改变   |  会使原数据一同改变  |
| 深拷贝 |            否            |   不会使原数据一同改变   | 不会使原数据一同改变 |

### 浅拷贝的实现方法

**Object.assign**

```javascript
// Object.assign()可以把任意多个的源对象自身的可枚举属性拷贝给目标对象，然后返回目标对象
let obj1 = {
  person: {
    name: 'momo',
    age: 18,
  },
  sports:'sleep'
}
let obj2 = Object.assign({},obj1)
obj2.person.age = 13
obj2.sports = 'football'
console.log('obj1',obj1) // {person: {name: "momo", age: 13}, sports: "sleep"}
console.log('obj2',obj2) // {person: {name: "momo", age: 13}, sports: "football"}
```

**函数库lodash的_.clone方法**

**展开运算符（...)**

```javascript
let obj1 = {
  person: {
    name: 'momo',
    age: 18,
  },
  sports:'sleep'
}
let obj2 = {...obj1}
obj2.person.age = 13
obj2.sports = 'football'
console.log('obj1',obj1) // {person: {name: "momo", age: 13}, sports: "sleep"}
console.log('obj2',obj2) // {person: {name: "momo", age: 13}, sports: "football"}
```

**Array.prototype.concat**

```javascript
let arr = [1, 2, {username: 'momo'}]
let arr1 = arr.concat(4)
arr1[2].username = '墨墨'
console.log(arr) // [1, 2, {username: "墨墨"}]
console.log(arr1) // [1, 2, {username: "墨墨"}, 4]
```

**Array.prototype.slice**

```javascript
let arr = [1, 2, {username: 'momo'}]
let arr1 = arr.slice()
arr1[2].username = '墨墨'
console.log(arr) // [1, 2, {username: "墨墨"}]
console.log(arr1) // [1, 2, {username: "墨墨"}]
```

### 深拷贝的实现方式

**JSON.parse(JSON.stringify())**

```javascript
// 这种方法可以实现数组或对象深拷贝，但不能处理函数和正则
let arr = [1, 2, {username: 'momo'}]
let arr1 = JSON.parse(JSON.stringify(arr))
arr1[2].username = '墨墨'
console.log(arr) // [1, 2, {username: "momo"}]
console.log(arr1) // [1, 2, {username: "墨墨"}]
```

**函数库lodash的_.cloneDeep方法**

**jQuery.extend()方法**

**递归：** 遍历对象、数组知道里边都是基本数据类型，然后再去复制

```javascript
let obj1 = {
  age: 18,
  name: 'momo',
  address: {
    province: '江苏',
    city: '常州'
  },
  skill: ['html', 'css', 'js']
}

let obj2 = deepClone(obj1)
// let obj2 = obj1
obj2.age = 20
obj2.name = 'MoMo'

console.log('obj1',obj1)

// 深拷贝方法 设置默认值为{}
function deepClone( obj = {} ) {
  // 进行类型判断，如果不是引用类型或者null则不进行深拷贝
  if (typeof(obj) !== 'object' || null) {
    return obj
  }

  let result
  // 判断该参数为数组还是对象
  if (obj instanceof Array) {
    result = []
  } else {
    result = {}
  }
  // 遍历循环
  for (let key in obj) {
    if (obj.hasOwnProperty[key]) {
      result[key] = deepClone(obj[key])
    }
  }

  return result
}
```



### 参考

<a href='https://blog.csdn.net/jiang7701037/article/details/98728249'>内存分区</a>

<a href='https://blog.csdn.net/jiang7701037/article/details/98738487'>深拷贝和浅拷贝</a>

<a href='https://juejin.cn/post/6844904197595332622'>掘金-深拷贝浅拷贝</a>

