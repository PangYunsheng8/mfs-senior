### 问答题
##### 1. Promsie 对象有几种状态？他们之间是怎么转换的？
Promsie有三种状态，分别是pending, resolve和reject。它们只能从pending到resolve和从pending到reject。
##### 2. 下面代码的输出结果是什么？（饿了么面试题）
```javascript
setTimeout(function() {
   console.log(1)
}, 0);
new Promise(function executor(resolve) {
   console.log(2);
   for( var i=0 ; i<10000 ; i++ ) {
      i == 9999 && resolve();
   }
   console.log(3);
}).then(function() {
   console.log(4);
});
console.log(5);
```
结果是：23541。因为setTimeout是下个事件循环，因此最后执行，所以最后打印1，除了1之外，2345都是在当前的事件循环中，由于js按照顺序执行，因此先打印2，由于promise内没有异步执行，尽管for循环耗时较长，但仍按序执行，因此之后打印3，由于then在当前事件循环的末尾，因此先打印5再打印4。
##### 3. 什么是 Promise 对象？引入 Promise 对象是为了解决什么？
Promise可以获取异步操作的消息。有了Promise对象，就可以将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数。
##### 4. var p = new Promise() 中 p 对象有哪些方法？各有什么功能？
常用方法有then和catch，then方法分别指定resolved状态和rejected状态的回调函数。catch方法用来捕获异常。
##### 5. Promise.all 和 Promise.race 的区别是什么？
Promise.all要等到所有的异步操作完成之后，才会统一调用回调函数。
Promise.race只要有一个异步操作完成之后就会调用回调函数，并且只调用回调函数一次。
##### 6. Promise 中抛出未处理的异常会怎么样？会阻碍后面的代码执行吗？Chrome 和 Node.js 环境下有什么不同？
chrome环境下会捕获未处理的异常，也就是会报错，而Node.js环境下不会捕获未处理的异常，不会报错。Promise中抛出未处理的异常不会阻碍代码的执行。
##### 7. catch 方法中再抛出异常会怎么样，需要怎样捕捉？
不同的浏览器有不同的处理方法，尽量不在catch中有未处理的异常，如果有可以用done方法。
##### 8. then的链式调用每次返回的是同一个 Promise 对象吗？请写一小段代码证明你的观点
不是同一个对象。
```javascript
timeout(2000).then(data=>{
    setTimeout(()=>{
    },0);
    return "1";
}).then(data=>{
    console.log(data)
})
```

---
### 代码题
##### 1. 请使用 Promise 重构之前作业：新闻瀑布流 中的 图片加载 和 加载更多 部分，比较 Promise 写法与之前的写法的区别
由于数据丢失，此题暂时跳过
##### 2. 请自行封装 ajaxGet(url) 函数，其返回值为 Promise ，其中 data 为获取的数据（内部使用 XMLHttpRequest）
```javascript
let ajaxGet = (url) => {
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var data = JSON.parse(xhr.responseText);
                resolve(data);
            } else {
                let err = {"errcode": xhr.status, "msg":"请求接口失败!"}
                reject(err)
            }
        }
        xhr.open('get', url, true);
        xhr.send();
    })
}

ajaxGet("http://learning-api.mafengshe.com/news?page=1&pageSize=30")
    .then(data => console.log(data))
    .catch(err => console.log(err));
```
##### 3. 请利用自己实现的 ajaxGet(url) 函数，实现串行（一个接一个的）发送10个请求，来获取下面 api 的前10页数据
```javascript
var [page, pageSize] = [1, 30];
var url = "http://learning-api.mafengshe.com/news?page=" + page + "&pageSize=" pageSize;

ajaxGet(url).then(data => {
    console.log(data));
    page++;
    return ajaxGet(url);
}.then(data => {
    console.log(data));
    page++;
    return ajaxGet(url);
}.then(data => {
    console.log(data));
    page++;
    return ajaxGet(url);
}.then(data => {
    console.log(data));
    page++;
    return ajaxGet(url);
}.then(data => {
    console.log(data));
    page++;
    return ajaxGet(url);
}.then(data => {
    console.log(data));
    page++;
    return ajaxGet(url);
}.then(data => {
    console.log(data));
    page++;
    return ajaxGet(url);
}.then(data => {
    console.log(data));
    page++;
    return ajaxGet(url);
}.then(data => {
    console.log(data));
    page++;
    return ajaxGet(url);
}.then(data => {
    console.log(data));
    page++;
    return ajaxGet(url);
}.catch(err =>{
    console.log(err)
})
```
##### 4. 请利用自己实现的 ajaxGet(url) 函数，实现并行（同时）发送10个请求，来获取下面 api 的前10页数据
```javascript
var [page, pageSize] = [1, 30];
var url = "http://learning-api.mafengshe.com/news?page=" + page + "&pageSize=" pageSize;
var ajaxArray = []

for (;page<=10;page++){
    ajaxArray.push(ajaxGet(url));
}
Promise.all(ajaxArray).then(data=>{
    console.log(data)
}).catch(err=>{
    console.log(err)
})
```