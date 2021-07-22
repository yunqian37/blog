### set

ES6提供的新的数据结构，类似于数组。但成员的值都是唯一的，没有重复的值

```javascript
// add()方法：向set结构加入成员。
let list = [1, 2, 3, 4, 5, 3, 2, 1]
let setArr = new Set()
list.forEach(x => setArr.add(x))
for (let i of setArr) {
  console.log(i) // 依次打印1 2 3 4 5
}

// set初始化
let list = [1, 2, 3, 4, 5, 3, 2, 1]
let setArr = new Set(list)
console.log(setArr) // {1, 2, 3, 4, 5}
console.log(setArr.size) // 5

// 向Set加入值的时候不会发生类型转换,在set内部NaN是相等的,两个对象总是不相等的
let list = [1, 2, 3, NaN, NaN, 3, '2', 1]
let setArr = new Set(list)
console.log(setArr) // {1, 2, 3, NaN, "2"}
```

**set实例的属性和方法**

```javascript
// add：添加某个值，返回set结构本身
let setArr = new Set()
setArr.add(1).add(2).add(2)
console.log(setArr) // {1, 2}

// delete：删除某个值，返回一个布尔值，表示删除是否成功
let list = [1, 2, 3, 2, 1]
let setArr = new Set(list)
setArr.delete(2)
console.log(setArr) // {1, 3}
// has：返回一个布尔值，表示该值是否为set的成员
let list = [1, 2, 3, 2, 1]
let setArr = new Set(list)
console.log(setArr.has(2)) // true
// clear：清楚所有成员，没有返回值
let list = [1, 2, 3, 2, 1]
let setArr = new Set(list)
setArr.clear()
console.log(setArr) // {}

// Array.from方法可以将set结构转为数组
let list = [1, 2, 3, 2, 1]
let setArr = new Set(list)
console.log(Array.from(setArr)) // [1, 2, 3]
```

**遍历操作**

+ keys：返回键名的遍历器 Set结构没有键名只有键值(或者说键值和键名是同一个值)所以keys和values方法的行为完全一致
+ values：返回键值的遍历器
+ entries：返回键值对的遍历器
+ forEach：使用回调函数遍历每个成员

for...of方法可以循环遍历Set

Set结构的实例与数组一样，也拥有forEach方法对每个成员执行某种操作，没有返回值

**遍历的应用**

+ 扩展运算符内部使用for...of循环，所以也可以用于Set结构
+ 扩展运算符与Set结构相结合，就可以去除数组的重复成员
+ 数组的map和filter可以直接用于Set
+ 使用Set可以很容易地实现并集、交集和差集

```javascript
let list = [1, 2, 3, 2, 1]
let setArr = [...new Set(list)]
console.log(setArr) // [1, 2, 3]
```

### WeakSet

WeakSet结构与Set类似，是不重复值的集合。WeakSet的成员只能是对象

+ WeakSet中的对象都是弱引用，如果其他对象都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存。不考虑该对象还存在与WeakSet中
+ WeakSet是一个构造函数，可以接受一个数组或类似数组的对象作为参数。该数组的所有成员都会自动称为WeakSet实例对象的成员

```javascript
// 数组的成员成为WeakSet的成员，而不是数组本身
let a = [[1, 2], [3, 4]]
let ws = new WeakSet(a)
console.log(ws) // {[3, 4], [1, 2]}

let a = [1, 2]
let ws = new WeakSet(a)
console.log(ws) // 报错
```

**WeakSet结构的方法：**

+ add：向WeakSet实例添加一个新成员
+ delete：清除WeakSet实例的指定成员
+ has：表示某个值是否在WeakSet实例之中

WeakSet没有size属性，没有办法遍历它的成员。因为：成员都是弱引用，随时可能消失。遍历机制无法保证成员的存在。

WeakSet可以储存DOM节点，而不用担心这些节点从文档移除时会引发内存泄漏



### Map

Map数据结构：类似于对象，也是键值对的集合。但是'键'的范围不限于字符串，各种类型的值都可以当作‘键’。需要‘键值对’的结构数据时，Map比Object更合适

```javascript
let m = new Map()
let o = {p: 'Hello World'}
m.set(o, 'content') // 使用set方法将对象o当作m的一个键
console.log(m.get(o)) // 'content' 使用get方法读取这个键
console.log(m.has(o)) // true 使用has方法确认有无该键
m.delete(o) // 使用delete方法删除该键
console.log(m.has(o)) // false
```

```javascript
/**
* Map可以接受一个数组作为参数，数组的成员是一个个表示键值对的数组。
* 如果同一个键多次赋值，后面的值将覆盖前面的值。
* 读取未知的值返回undefined。
* 只有同一个对象的引用，Map结构才将其视为同一个键。
*/
let map = new Map([
  ['name', '张三'],
  ['title', 'hello']
])
console.log(map.size) // 2
console.log(map.has('name')) // true
console.log(map.get('name')) // 张三
console.log(map.get('title')) // world
console.log(map.get('world')) // undefined

```

Map的键实际上是跟内存地址绑定的，只要内存地址不一样就视为两个键。这样就解决了同名属性碰撞的问题

如果Map的键是一个简单类型的值(Number、String、Boolean)，则只要两个值严格相等，Map将其视为一个键。

undefined和null也是两个不同的键

NaN被Map视为同一个键

```javascript
let map = new Map()
map.set(-0, 123)
console.log(map.get(+0)) // 123

let map = new Map()
map.set(NaN, 123)
console.log(map.get(NaN)) // 123
```

**实例的属性和操作方法：**

+ size属性：返回Map结构的成员总数
+ set(key,value)：设置key对应的键值为，然后返回整个Map结构。如果key已经有值，则键值会被更新，否则就新生成该键。可以采用链式写法添加多个
+ get：读取key对应的键值，如果找不到key则返回undefined
+ has：返回一个布尔值，表示某个键是否在当前Map对象之中
+ delete：删除某个键，成功返回true，失败返回false
+ clear：清除所有成员，没有返回值

**遍历方法：**

​	keys、values、entries、forEach

注：Map的遍历顺序就是插入顺序

**与其他数据结构的互相转换：**

+ Map转为数组：使用扩展运算符最方便
+ 数组转Map：将数组传入Map构造函数
+ Map转为对象：如果所有Map的键都是字符串它可以无损地转为对象。如果有非字符串的键名，那么这个键名会被转为字符串再作为对象的键名
+ 对象转Map：Object.entries()
+ Map转JSON
+ JSON转Map



### WeakMap

WeakMap结构与Map结构类似，也是用于生成键值对的集合

