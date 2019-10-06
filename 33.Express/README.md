### 问答题
##### 1. Express的Http请求处理模型是什么？
流水线模型，通过中间件处理请求，一个中间件处理完传递给下一个中间件。
##### 2. 如何使用 express-generator 生成 express 项目？请使用它生成项目并对app.js和bin/www两个文件关键代码进行注释详解
可以使用下面的指令创建express项目
1)express express -e=ejs -s=stylus
其中第一个express是指令，第二个express是文件名。-e是引擎采用ejs， -s是样式
2)npm install
bin/www是入口文件，该文件主要创建了一个httpserver来监听某个ip和端口号下的请求。
app.js文件里定义了一系列中间件，包括路由等等，目的是对请求做相应的处理。
##### 3. 请查阅资料完成：什么是 Restful API ？如何使用Restful API访问服务器端资源？
Restful一种软件架构风格、设计风格，而不是标准，只是提供了一组设计原则和约束条件。它主要用于客户端和服务器交互类的软件。基于这个风格设计的软件可以更简洁，更有层次，更易于实现缓存等机制。可以使用get,post,put,patch,delete等方法访问服务器资源。
##### 4. 如果使用Express写Restful API？
```javascript
let express = require('express')
let app = express()

app.get('/', (req, res)=>{
    res.write("hello")
    res.end()
})
```
##### 5. 如何使用express Router？
1)首先需要在一个文件下定义router并导出。
```javascript
var router = express.Router(); 
router.get('/', function(req, res, next) {
    //xxx
});
module.exports = router;
```
2)在app.js文件下接收router
```javascript
var indexRouter = require('./routes/index');
app.use('/', indexRouter);
```

---
### 代码题：
https://github.com/PangYunsheng8/mfs-senior/blob/master/33.Express/Express-new/restful.js