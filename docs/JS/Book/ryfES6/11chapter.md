### 概述

**Proxy（代理器）**

Proxy用于修改某些操作的默认行为，等同于在语言层面做出修改，属于一种‘元编程’，即对编程语言进行编程

在目标对象之前架设一层‘拦截’，外界对该对象的访问都必须先通过这层拦截。可以对外界的访问进行过滤和改写。

**Proxy支持的拦截操作：**

+ get(target, propKey, receiver)：拦截对象属性的读取
+ set(tarfet, propKey, value, receiver)：拦截对象属性的设置
+ has(target, propKey)：拦截propKey in proxy的操作
+ deleteProperty(target, propKey)：拦截delete proxy[propKey]的操作，返回一个布尔值
+ ownKeys(target)：拦截Object.getOwnPropertyNames(proxy)、object.getOwnPropertySymbols(proxy)、Object.keys(proxy)、for...in循环，返回一个数组。该方法返回目标对象所有自身的属性的属性名。而Object.keys()的返回结果仅包括目标对象自身的可遍历属性
+ getOwnPropertyDescriptor(target,propkey)：拦截Object.getOwnPropertyDescriptor(proxy, propKey)，返回属性的描述对象

........还有好多，看书去吧



### Proxy实例的方法

**get：**拦截某个属性的读取操作，参数：目标对象、属性名、proxy实例本身(操作行为所针对的对象，该参数可选)

```javascript
let person = {
  name: '张三'
}
let proxy = new Proxy(person, {
  get: function(target, propKey) {
    if (propKey in target) {
      return target[propKey]
    } else {
      // 访问目标对象不存在的属性处理
      // throw new ReferenceError("Prop name \"" + propKey + "\" does not exist.")
      return 'error'
    }
  }
})
console.log(proxy.name) // 张三
console.log(proxy.age) // error
```