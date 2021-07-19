# React-Native
点击相册图片导致程序崩溃：<a href='https://github.com/ivpusic/react-native-image-crop-picker/issues/1215'>react-native-image-crop-picker lssues#1215</a>

# blog整理过程中的遗留问题

+ 数组的扩展 fill 

```javascript
let arr = [
  { name: 'aa' },
  { name: 'bb'}
]
let arr1 = arr.fill({ name: 'cc' })
console.log(arr) // [{ name: 'dd' }, { name: 'dd' }]
console.log(arr1) // [{ name: 'dd' }, { name: 'dd' }]
arr1[0].name = 'dd' // 该代码还未执行，但上面console已经为dd了
```

+ 数组的扩展 copyWithin的使用