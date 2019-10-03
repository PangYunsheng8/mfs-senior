### koa背景
Egg.js/Think.js都是基于Koa的node.js后端框架，是对koa的封装

### 创建一个koa项目
1)npm init
2)npm install koa --save

koa把req和res对象封装到了一个对象中，即ctx(context)


##### 1. app.use
1)不同于express, koa的中间件app.use在执行完第一个后，调用await next()会执行第二个中间件，如果第二个中间件执行完后，
还会继续回到第一个中间件中。
2)如果想使用koa的get/post等方法，需要安装koa-router
npm install koa-router


##### 2. 创建一个模板级koa应用
1）npm install -g koa-generator
2）koa2 文件名 -e=ejs