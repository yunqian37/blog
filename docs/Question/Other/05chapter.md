# deepClone 深拷贝

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
  <script>
    let obj1 = {
      name: 'zhangSan',
      age: 18,
      address: {
        city: 'changZhou'
      }
    }
    let obj2 = deepClone(obj1)
    obj2.name = 'liSi'

    console.log('obj1 =>', obj1)

    function deepClone( obj = {} ) {
      if (typeof(obj) !== 'object' || obj == null) {
        return obj
      }
      let result
      if (obj instanceof Array) {
        result = []
      } else {
        result = {}
      }

      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          result[key] = deepClone(key)
        }
      }
      return result
    }
  </script>
</body>
</html>
```



