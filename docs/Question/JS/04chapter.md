**原型关系：**

+ 每个class都有显示原型 prototype
+ 每个实例都有隐式原型  __  proto  __
+ 实例的__  proto __指向对应class的prototype

**执行规则：**

+ 现在自身属性和方法寻找
+ 找不到则自动去__ proto __中查找

