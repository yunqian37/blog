**event loop(事件循环)：**

+ 同步代码一行一行放在Call Stack执行
+ 遇到异步会先记录下，等待时机
+ 时机到了移动到Callback Queue
+ 如果Call Stack为空（即同步代码执行完）Event Loop开始工作
+ 轮询查找Callback Queue，如有则移动到Call Stack执行
+ 然后继续轮询查找

**宏任务&微任务：**

+ **宏任务：** setTimeout、setInterval、Ajax、DOM事件，DOM渲染后触发

+ **微任务：** Promise async/await，DOM渲染前触发

  **微任务执行时机比宏任务要早** 

  **区别：**

  + 微任务是ES6语法规定的
  + 宏任务是由浏览器规定的

**Event Loop和DOM渲染：**

+ 每次Call Stack清空（即每次轮询结束），同步任务执行完成
+ DOM结构如有改变则重新渲染
+ 触发下一次Event Loop

注：alert会阻断js执行，也会阻断DOM渲染



**promise：**

初始化promise时传入的函数会立刻被执行

