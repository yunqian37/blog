### js调用vue组件中的方法

```javascript
// index.vue
mounted() {
  // 将vue中的方法赋值给window在common.js中调用
  window.refreshList = this.refreshList
},
// index.js
window.refreshList() 调用
```

### vue + element封装的确认对话框

```javascript
// index.js
import { Message, MessageBox } from "element-ui";
import request from '@/utils/request'
export function handleItemConfirm({title,url,data}) {
  return new Promise((resolve, reject) => {
    // 判断是否有Id
    if (data.Id) {
      resolve()
    } else {
      Message({type: 'error',message: '请选择将要' + title + '的数据'})
      reject()
    }
  }).then(() => {
    // 显示确认对话框
    return new Promise((resolve, reject) => {
      MessageBox('此操作将彻底' + title + '该数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
      }).then(() => {
        resolve()
      }).catch(err => {
        Message({type: 'info',message: '已取消'})
        reject(err)
      })
    })
  }).then(() => {
    // 提交操作请求
    return new Promise((resolve, reject) => {
      request({
        url: url,
        method: 'post',
        data: data
      }).then(res => {
        window.refreshList()
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  }).catch((err) => {
    console.log('err ==>',err)
  })
}
// index.vue 
import { handleItemConfirm } from '@/views/module/index.js'
handleItemConfirm({
  title:'彻底删除',
  url:'/api/companyNew/CompanyThoroughly',
  data:{Id:Id}
})
```

### 子组件获取父组件中其他子组件的数据或方法

```javascript
let childIndex
this.$parent.$children.map((item,index) => {
  if (item.$refs.vxeTable) {
    childIndex = index
  }
})
let pageSetModelId = this.$parent.$children[childIndex].pageSetModelId
```

### vue设置props为数组或者对象

```javascript
props: {
  tableData: {
    type: Array,
      default: function() {
        return []
      }
  },
  footerMethod: Function,
}
```

### 设置element日期选择限制

```javascript
// 无
pickerBeforeDisabled:{
  disabledDate(time) {
    return null;
  }
}
// 不早于某日期
this.pickerBeforeDisabled = {
  disabledDate(time) {
    let startDate = dayjs(res.data.end_time).add(1, 'day').format('YYYY-MM-DD') 
    return time.getTime() < dayjs(startDate).valueOf();
  },
}
```

### 初始化组件数据

```javascript
this.ruleForm = this.$options.data.call(this).ruleForm
```

### 给element树组件设置默认值

```javascript
// 给tree的数据中要包含对应的字段 树组件需要设置node-key="key"
setTimeout(() => {
  this.$refs.BasicsMatchingTree.$refs.tree.setCurrentKey(this.treeActiveData.key)
},10)
```
### 表格组件选择框居中问题

目前所使用的ag-grid&&vxe-table表格组件因为表格自定义问题会出现表格的复选框单元格内布局中问题，该情况下只要找到改复选框所在的单元个并为其设置固定的 <span style="color:red">font-size: 12px !important;</span>


