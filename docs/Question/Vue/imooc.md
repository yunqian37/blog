# vue基础
## computed&watch

computed有缓存，data不变则不会重新计算

watch引用类型深度监听，deep:true

引用类型拿不到old value，因为指针问题



## 遍历

key值尽量不要使用index

**数组：** v-for="(item, index) in listArr"

**对象：** v-for="(val, key, index) in listObj"

V-for 与 v-if不能一起循环使用



## 事件

```vue
<template>
  <div @click="changeLoginTab('2',$event)">
    <span class="login_tab_title">短信登录</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loginTabActive:'1',
    }
  },
  methods: {
    changeLoginTab(type, event) {
      console.log("event", event) // 原生的event对象，事件被挂载到当前元素
      console.log("type", type)
      this.loginTabActive = type
    }
  }
}
</script>
```

**事件修饰符：** 修饰符可以串联

+ **stop：** 阻止单击事件继续传播
+ **submit.prevent:** 提交事件不再重载页面

## 组件通讯

**生命周期：**

**beforeCreate：**

**created：** 页面还没有渲染，但是vue的实例已经初始化了

**beforeMount：**

**mounted：** 组件真正的在网页上绘制完成了

**beforeUpdate：**

**updated：**

**beforeDestroy：** 

**destroyed：**

注：

+ 父组件先创建（created）子组件后创建
+ 子组件先渲染完成（mounted）父组件后渲染
+ 父组件先beforeUpdate，子组件后
+ 子组件先updeted，父组件后

## 自定义组件v-model

```vue
<template>
  <div class="app-container page_main_wrapper">
    <div>{{name}}</div>
    <inputModel v-model="name" />
  </div>
</template>
<script>
import inputModel from './demo002.vue'
export default {
  components: {
    inputModel
  },
  data() {
    return {
      name:'momo'
    }
  }
}
</script>

<template>
  <div>
    <input type="text" :value="text" @input="$emit('change', $event.target.value)">
  </div>
</template>
<script>
export default {
  model: {
    prop: 'text',
    event: 'change'
  },
  props: {
    text: String,
    default() {
      return ''
    }
  },
}
</script>
```

## $nextTick

data改变后DOM不会立即渲染，$nextTick会在DOM渲染之后被触发，以获取最新DOM节点

+ 异步渲染，$nextTick待DOM渲染完再回调
+ 页面渲染时会将data的修改做整合，多次data修改只会渲染一次

## slot & 异步组件加载

**作用域插槽：** 让插槽内容能够访问子组件中才有的数据

```vue
<template>
  <div class="app-container page_main_wrapper">
    <inputModel>
      <template v-slot:default="slotProps">
        {{ slotProps.user.firstName }}
      </template>
    </inputModel>
  </div>
</template>
<script>
export default {
  components: {
    // 动态引入组件，在使用时加载
    inputModel: () => {
      return import('./demo002.vue')
    }
  }
}
</script>
// ----------------------子组件-------------------------------
<template>
  <div>
    <slot v-bind:user="user">
      {{ user.lastName }}
    </slot>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {
        firstName:'Ashin',
        lastName: 'ashin'
      }
    }
  }
}
</script>

```

## vuex

**概念：**

+ state：数据源
+ getters：store的计算属性，getters的返回值会根据它的依赖被缓存起来。且只有当它的依赖值发生了改变才会被重新计算
+ action：提交的是mutation而不是直接变更状态，异步操作。里面的方法需要使用store.dispatch调用
+ mutation：修改state数据，必须是同步函数。里面的方法需要使用store.commit调用

**用于组件：**

+ dispatch：
+ commit：
+ mapState：
+ mapGetters：
+ mapActions：
+ mapMutations：

# vue原理

