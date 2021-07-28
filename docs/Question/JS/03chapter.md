**防抖：** 任务频繁触发的情况下只有任务触发的间隔时间超过指定间隔的时候任务才会执行

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <button id='debounce'>防抖</button>
  <script>
    window.onload = function() {
      let myDebounce = document.getElementById('debounce')
      myDebounce.addEventListener('click', debounce(sayDebounce))
    }
    function debounce(fn) {
      let timeout = null
      return function() {
        console.log('1111')
        clearTimeout(timeout)
        timeout = setTimeout(() => {
          fn.call(this.arguments)
        },1000)
      }
    }
    function sayDebounce() {
      console.log('防抖..........')
    }
  </script>
</body>
</html>
```

**节流：** 规定在一个单位时间内，只能触发一次函数。如果这个单位时间内触发多次函数只有一次生效

**应用：**

+ 懒加载监听计算滚动条的位置，使用节流按一定时间的频率获取
+ 用户点击提交按钮

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <button id='throttle'>节流</button>
  <script>
    window.onload = function() {
      let myThrottle = document.getElementById('throttle')
      myThrottle.addEventListener('click', throttle(sayThrottle))
    }
    function throttle(fn) {
      let canRun = true
      return function() {
        if (!canRun) {
          return
        }
        canRun = false
        setTimeout(() => {
          fn.call(this.arguments)
          canRun = true
        }, 1000)
      }
    }
    function sayThrottle() {
      console.log('节流..........')
    }
  </script>
</body>
</html>
```

参考：<a href='https://juejin.cn/post/6844903795420299278#heading-3'>掘金</a>