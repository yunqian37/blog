**property和attribute：**

+ property：修改对象属性，不会体现到html结构中
+ attribute：修改html属性，会改变html结构
+ 两者都有可能引起DOM重新渲染

**cookie的缺点：** 

+ 存储大小，最大4kb
+ http请求时需要发送到服务端，增加请求数据量
+ 只能用document.cookie = '...' 来修改

**localStorage：** 数据会永久存储，除非代码或手动删除

**sessionStroage：** 数据只存在于当前会话，浏览器关闭则清空



**DOM操作：**

+ **innerHTML：** 新建节点
+ **appendChild：** 插入/移动节点
+ **parentNode：** 获取父元素
+ **childNode：** 获取子元素 列表
+ **removeChild：** 删除节点

**DOM性能：** 

+ DOM操作非常昂贵，避免频繁的DOM操作
+ 对DOM查询做缓存
+ 将频繁操作改为一次性操作

```javascript
const listNode = document.getElementById('list')
// 创建一个文档片段，此时还没有插入到DOM树中
const frag = document.createDocumentFragment()

// 执行插入
for (let x = 0; x < 10; x++) {
  const li = document.createElement('li')
  li.innerHTML = 'List item' + x
  frag.appendChild(li)
}

// 都完成后再插入到DOM树中
listNode.appendChild(frag)
```

**事件：**

**event.target：** 获取触发元素

**event.preventDefault:** 阻止默认行为

**event.stopPropagation:** 组织冒泡

**事件代理：** 因为子元素过多，将事件绑定在父元素上

+ 代码简介
+ 减少浏览器内存占用
+ 不可以滥用

**事件冒泡：**

+ 基于DOM树形结构
+ 事件会顺着触发元素向上冒泡
+ 应用场景：代理

