### 概述

表示独一无二的值，js语言的第七种数据类型。其他数据类型：undefined、null、Boolean、String、Number、Object

Symbol值通过Symbol函数生成。凡事属性名属于Symbol类型就是独一无二的可以保证不会与其他属性名产生冲突。

现在对象的属性名可以有两种类型：字符串、Symbol类型

```javascript
// 接受一个字符串作为参数，表示对Symbol实例的描述。主要是为了在控制台显示或者转为字符串时比较容易区分
let s1 = Symbol('foo')
console.log(s1) // Symbol(foo)
let s2 = Symbol()
console.log(s2) // Symbol()

// 如果Symbol的参数是一个对象，就会调用该对象的toString方法将其转为字符串然后才生成一个Symbol值
let obj = {
  toString() {
    return 'abc'
  }
}
let sym = Symbol(obj)
console.log(sym) // Symbol(abc)

// Symbol函数的参数只是对当前Symbol值的描述，因此相同参数的Symbol函数的返回值是不相等的
let s1 = Symbol()
let s2 = Symbol()
console.log(s1 === s2) // false
let s3 = Symbol('foo')
let s4 = Symbol('foo')
console.log(s3 === s4) // false

// Symbol值不能与其他类型的值进行运算，会报错

// Symbol可以显示转换为字符串
let s1 = Symbol('foo')
console.log(String(s1)) // Symbol(foo)
console.log(s1.toString()) // Symbol(foo)

// 布尔值也可以转换
let s1 = Symbol('foo')
console.log(Boolean(s1)) // true

// 不可以转换数值 会报错
```



### Symbol.prototype.description

```javascript
// 读取Symbol的描述需要通过String或toString实现，description可以直接返回Symbol的描述
let s1 = Symbol('foo')
console.log(s1.description) // foo
```



### 作为属性名的Symbol

```javascript
// Symbol的多种写法

// 第一种
let mySymbol = Symbol()
let a = {}
a[mySymbol] = 'Hello'
console.log(a[mySymbol]) // Hello
// 第二种
let mySymbol = Symbol()
let a = {
  [mySymbol]: 'Hello'
}
console.log(a[mySymbol]) // Hello
// 第三种
let mySymbol = Symbol()
let a = {}
Object.defineProperty(a, mySymbol, { value: 'Hello'})
console.log(a[mySymbol]) // Hello
```

```javascript
// Symbol值作为对象属性名时不能使用点运算符
let mySymbol = Symbol()
let a = {}
a.mySymbol = 'Hello'
console.log(a[mySymbol]) // undefined
console.log(a['mySymbol']) // Hello
// 使用Symbol值定义属性时，Symbol值必须放在方括号之中
let mySymbol = Symbol()
let obj = {
  [mySymbol]: 'Hello World!'
}
console.log(obj[mySymbol]) // Hello World!

// Symbol类型还可以用于定义一组常量，保证这组常量的值都是不相等的
```



### 消除魔术字符串

**魔术字符串：**在代码中多次出现，与代码形成强耦合的某一个具体的字符串或者数值。风格良好的代码应该尽量消除魔术字符串，改由含义清晰的变量代替



### 属性名的遍历

Symbol作为属性名，遍历对象的时候该属性不会出现在for...in、for...of循环中，也不会被Object.keys()、Object.getOwnPropertyNames()、JSOM.stringify()返回。

通过Object.getOwnPropertySymbols()方法，可以获取指定对象的所有Symbol属性名。改方法返回一个数组，成员是当前对象的所有用作属性名的Symbol值

```javascript
let obj = {}
let a = Symbol('a')
let b = Symbol('b')
obj[a] = 'Hello'
obj[b] = 'World'
obj['c'] = '!!!'
let objectSymbols = Object.getOwnPropertySymbols(obj)
console.log(objectSymbols) // [Symbol(a), Symbol(b)]

// Reflect.ownKeys()方法可以返回所有类型的键名
console.log(Reflect.ownKeys(obj)) // ["c", Symbol(a), Symbol(b)]

```

由于以Symbol值作为键名，不会被常规方法遍历得到。我们可以利用这个特性为对象定义一些非私有的、但又希望只用于内部的方法



### Symbol.for()、Symbol.keyFor()

**Symbol.for：**接受一个字符串作为参数，搜索有没有该参数作为名称的Symbol值。如果有就返回这个Symbol值，否则就新建一个以该字符串为名称的Symbol值并将其注册到全局

Symbol.for会被登记在全局环境中供搜索，Symbol()不会

+ Symbol.for会先检查给定的key是否已经存在，如果不存在才会新建一个值

+ Symbol没有登记机制每次调用都会返回一个不同的值

```javascript
let s1 = Symbol.for('foo')
let s2 = Symbol.for('foo')
console.log(s1 === s2) // true

let s1 = Symbol('foo')
let s2 = Symbol('foo')
console.log(s1 === s2) // false

let s1 = Symbol('foo')
let s2 = Symbol.for('foo')
console.log(s1 === s2) // false
```

**Symbol.keyFor()：**返回一个已登记的Symbol类型值的key

```javascript
let s1 = Symbol.for('foo')
console.log(Symbol.keyFor(s1)) // foo

// 未登记的Symbol值，返回undefined
let s1 = Symbol('foo')
console.log(Symbol.keyFor(s1)) // undefined
```

```javascript
// Symbol.for为Symbol值登记的名字是全局环境的，不管有没有在全局环境运行
function foo() {
  return Symbol.for('bar')
}
let x = foo()
let y = Symbol.for('bar')
console.log(x === y) // true
```

### 模块的Singleton模式

Singleton模式：调用一个类，任何时候返回的都是同一个实例

### 内置的Symbol值

ES6提供了11个内置的Symbol值，指向语言内部使用的方法

