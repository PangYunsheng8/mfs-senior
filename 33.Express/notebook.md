### 后端简介
后端的主要职责：
1）解析html
2）存储数据
express更多的是第一个职责，即解析html，express还需要配合数据库才能构成一个完整的后端

---
### 创建一个模板级express应用
1)npm install -g express-generator(如果已经有了全局安装，以后不用再安装)
1)express express -e=ejs -s=stylus
其中第一个express是指令，第二个express是文件名。-e是引擎采用ejs， -s是样式
2)npm install
执行完第一个指令后，express目录下已经创建好了相关的文件和package.json文件，虽然package.json的dependencies里保存了相关依赖，但是并没有实际安装到项目中，因此需要执行npm install指令将这些依赖包安装到项目中。

### 一个关于httpserver的问题
```javascript
app.listen(port, hostname)
-----------------------------
app.set('port',port)
var server = http.createServer(app)
server.listen(port)
以上两种方式一个是直接用express的实例监听端口，一个是创建一个原始的http server来监听端口，有什么区别？
```
效率上并没有区别，不知道别的有没有区别

### express内部
##### 1. app.js文件
app.js文件中有个很重要的用法，app.use。在所有get,post等等发送给客户端之前，都要进入app.use函数，相当于一个中间件。
如果app.js文件中有多个中间件即app.use()函数，那么每个请求在发送之前都会经过所有的app.use，然后根据不同的请求(get,post,put等)经过
不同的处理函数。
app.use中调用了next()方法，因为app.use是允许异步的，比如用户发了一个请求，需要先判断用户是否登录，这个过程需要到数据库里查询，
是一个异步操作，如果该步不执行，后面的执行可能会出错。因此这里加了next()方法是让当前事情执行完再执行后面的事情，执行next()后，会把
当前的req和res传给下一个app.use。
每个app.use都是可以修改req和res的。
问题：1）可以理解为这使得app.use方法是一个完全串行的工作方式？
2）为什么调用next()就可以让当前事情完成？
##### 2. routes文件
因为一个大型网站会有很多的请求路径，因此对这些请求的处理也需要大量的函数，都写在一个文件下会使得代码可读性较差，因此routes将不同的路由
放到不同的文件下处理。
##### 3. express.static
express.static(path.join(__dirname, 'public'))
express.static的作用是：如果发现客户端请求一些静态文件，比如图片或是css样式表，那么请求就不会再经过后面的app.use，而是直接去返回相关
的静态文件。
##### 4. render函数
##### 5. 其他
post请求携带的数据内容在req.body中
get请求(url中)携带的数据内容在req.query中