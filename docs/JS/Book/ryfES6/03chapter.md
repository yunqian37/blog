### Number.isFinite()和Number.isNaN()

Number.isFinite()和Number.isNaN()只对数值有效，传统方法先调用Number()将非数值转换为数值再进行判断

```javascript
// Number.isFinite() 检查一个数值是否为有限的，即不是Infinity
console.log(Number.isFinite(100)) // true
console.log(Number.isFinite('100')) // false
console.log(Number.isFinite(NaN)) // false
console.log(Number.isFinite(Infinity)) // false

// Number.isNaN() 检查一个值是否为NaN
console.log(Number.isNaN(100)) // false
console.log(Number.isNaN('100')) // false
console.log(Number.isNaN(NaN)) // true
console.log(Number.isNaN(Infinity)) // false
```

### Number.parseInt(),Number.parseFloat()

将全局方法parseInt()和parseFloat()移植到Number对象上面，减少全局性方法使得语言逐步模块化



### Number.isInteger()

```javascript
// 判断一个数值是否为整数
console.log(Number.isInteger(10)) // true
console.log(Number.isInteger(10.0)) // true
console.log(Number.isInteger('10')) // false
console.log(Number.isInteger(10.1)) // false
// 精度超过限度多余的会被丢弃
console.log(Number.isInteger(3.0000000000000002)) // true
```



### Math对象的扩展

```javascript
// Math.trunc 去除一个数的小数部分，返回整数部分。对于非数值的会先转换为数值
console.log(Math.trunc(1.9)) // 1
console.log(Math.trunc('1.9')) // 1
console.log(Math.trunc(1.1)) // 1
console.log(Math.trunc('1.1')) // 1

// 空值和无法截取整数的值返回NaN
console.log(Math.trunc()) // NaN
console.log(Math.trunc('abc')) // NaN
```

```javascript
// Math.sign() 判断一个数到底是正数、负数、还是零。对于非数值会先转换为数值

// 正数 返回 +1
console.log(Math.sign(10)) // 1
console.log(Math.sign('10')) // 1

// 负数 返回 -1
console.log(Math.sign(-10)) // -1

// 0 返回 0
console.log(Math.sign(0)) // 0

// -0 返回 -0
console.log(Math.sign(-0)) // -0

// 其他值返回NaN
console.log(Math.sign('abc')) // NaN
```

**Math.cbrt：计算一个数的根立方**

**Math.hypot：返回所有参数的平方和平方根** 

