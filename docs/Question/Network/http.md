# Http

**状态码分类：**

+ 1xx服务器收到请求
+ 2xx请求成功
+ 3xx重定向
+ 4xx客户端错误
+ 5xx服务端错误

**Restful API：**

+ 一种新的API设计方式
+ 传统API设计：把每个url当做一个功能
+ Restful API设计：把每个url当做一个唯一的资源

**如何设计成一个资源：**

+ 尽量不用url参数
+ 用method表示操作类型

### http headers

**Request Headers：**

+ Accept：浏览器可接收的数据格式
+ Accept-Encoding：浏览器可接收的压缩算法
+ Accept-Languange：浏览器可接收的语言
+ Connection：keep-alive一次TCP连接重复使用
+ cookie
+ Host：请求的域名
+ User-Agent：浏览器信息（简称UA）
+ Content-type：发送数据的格式，例：application/json  （一般post的情况下才有）

**Response Headers：**

+ Content-type：返回数据的格式，例：application/json
+ Content-length：返回数据的大小，多少字节
+ Content-Encoding：返回数据的压缩算法，例：gzip
+ Set-Cookie：服务端向客户端设置cookie

