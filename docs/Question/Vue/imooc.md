# 自定义组件v-model

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

# $nextTick

data改变后DOM不会立即渲染，$nextTick会在DOM渲染之后被触发，以获取最新DOM节点

+ 异步渲染，$nextTick待DOM渲染完再回调
+ 页面渲染时会将data的修改做整合，多次data修改只会渲染一次

# slot & 异步组件加载

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

# vuex

**概念：**

+ state：
+ getters：
+ action：异步操作
+ mutation：修改state数据

**用于组件：**

+ dispatch：
+ commit：
+ mapState：
+ mapGetters：
+ mapActions：
+ mapMutations：

# vue-router

