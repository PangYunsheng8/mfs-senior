### 问答题
##### 1. Koa和express的中间件调用方式上有什么不同？
koa的中间件是通过异步函数async实现的，中间件的执行顺序是洋葱圈模型。
express的中间件是通过回调函数callback实现的，中间件的执行顺序是流水线模型。
koa和express的中间件都是通过next()函数来指定开启下一个中间件的，不同的是express执行完next()后会跳转到下一个中间件，并不会回来，
而koa当下一个中间件执行结束后，会将控制权再交回前一个中间件。
##### 2. Koa比express更加轻量，基本只实现了中间件机制，如需实现完整的Web应用需要配合中间件，如何查找koa的中间件？有哪些途径可以查找？
可以在npmjs.com网站上查找。