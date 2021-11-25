**原型：** 在js中，构造函数拥有原型。实例对象通过prototype关键字可以访问原型，实现js原型继承机制

+ 无论何时，只要创建一个函数就会按照特定的规则为这个函数创建一个prototype属性（只想原型对象）

```javascript
function Person() {}

Person.prototype.name = "MoMo"
Person.prototype.age = 28
Person.prototype.job = 'teacher'
Person.prototype.sayName = function() {
  console.log(this.name)
}

let person1 = new Person()
person1.sayName() // console MoMo

let person2 = new Person()
person2.sayName() // console MoMo
```



```javascript
// 声明构造函数
function Person() {}
// 构造函数的原型链
console.log(typeof Person.prototype) // object
console.log(Person.prototype) // constructor: f Person()

/**
  * 注：构造函数有一个prototype属性，引用其原型对象
  *    原型对象也有一个constructor属性，引用这个构造函数
  * 即：两者循环引用
*/
console.log(Person === Person.prototype.constructor) // true

let person1 = new Person()
person2 = new Person()

// 构造函数、原型对象和实例是3个完全不同的对象
console.log(person1 !== Person) // true
console.log(person1 !== Person.prototype) // true
console.log(Person.prototype !== Person) // true

/**
  * 实例通过__proto__链接到原型对象，它实际上指向隐藏特性[[Prototype]]
  * 构造函数通过prototype属性链接到原型对象
  * 
  * 实例与构造函数没有直接联系，与原型对象有直接联系
*/
console.log(person1.__proto__ === Person.prototype) // true
console.log(person1.__proto__.constructor === Person) // true

// 同一个构造函数创建的两个实例共享同一个原型对象
console.log(person1.__proto__ === person2.__proto__) // true

// instanceof 检查实例的原型链中是否包含指定构造函数的原型
console.log(person1 instanceof Person) // true
console.log(person1 instanceof Object) // true
console.log(Person.prototype instanceof Object) // true
```



**正常的原型链都会终止于Object的原型对象，Object原型的原型是null** 


**原型关系：**

+ 每个class都有显示原型 prototype
+ 每个实例都有隐式原型  __  proto  __
+ 实例的__  proto __指向对应class的prototype

**执行规则：**

+ 现在自身属性和方法寻找
+ 找不到则自动去__ proto __中查找

