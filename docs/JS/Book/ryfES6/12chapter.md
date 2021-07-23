### Promise的含义

Promise是异步编程的一种解决方案。Promise是一个对象，从它可以获取异步操作的消息。Promise提供统一的API，各种异步操作都可以用同样的方法进行处理

**特点：**

+ 对象的状态不受外界影响。三种状态：pending(进行中)、fulfulled(已成功)、rejected(已失败)。只有异步操作的结果可以决定当前是哪一种状态，任何其他操作都无法改变这个状态
+ 一旦状态改变就不会再变，任何时候都可以得到这个结果。Promise对象的状态改变只有两种可能：从pending变成fulfilled 和 从pending变成rejected

Promise对象可以将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数

**缺点：**

+ 无法取消Promise，一旦新建它就会立即执行，无法中途取消
+ 如果不设置回调函数，Promise内部抛出的错误不会反应到外部
+ 当处于pending状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）



### 基本用法

Promise参数：

+ resolve：将Promise对象的状态从‘未完成’变成‘成功’（pending => resolved），在异步操作成功时调用，并将异步操作的结果作为参数传递出去
+ reject：将Promise对象的状态从‘未完成’变成‘失败’（pending => rejected），在异步操作失败时调用，并将异步操作报出的错误作为参数传递出去

Promise实例生成以后可以用then方法分别指定resolved状态和rejected状态的回调函数

Promise新建后会立即执行

```javascript
let promise = new Promise((resolve, reject) => {
  console.log('Promise')
  resolve()
})
promise.then(() => {
  console.log('then')
})
console.log('Hi')
// 打印顺序 Promise Hi then
```

如果调用resolve函数和reject函数时带有参数，那么它们的参数会被传递给回调函数。

reject函数的参数通常是Error对象的实例，表示抛出错误

resolve函数的参数除了正常的值外，还可能是另一个Promise实例

调用resolve或reject并不会终结Promise的参数函数的执行