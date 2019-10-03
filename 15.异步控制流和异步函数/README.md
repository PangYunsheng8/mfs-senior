### 问答题
##### 1. 为什么要使用 generator 函数 或者 async/await 进行异步控制流，对比 callback 和 Promise 方案，主要解决了什么问题？
与callback相比，主要解决了当发送连续多个异步请求时callback产生的回调地狱问题；与promise相比，主要解决了当有多个请求发送时，promise会连续地调用then()，导致代码可读性差的问题。使用 generator函数或者async/await实现异步控制流使得代码简洁易读。
##### 2. generator 函数为什么能实现异步控制流？其原理是什么？
generator函数可以实现数据的内外交换，通过yield指令控制程序的执行权，并可以实现控制权的转换。
##### 3. 什么是 Thunk 函数？为什么使用 Thunk 函数可以通过和 generator 函数配合实现异步控制流？
将参数放到一个临时函数之中，再将这个临时函数传入函数体。这个临时函数就叫做 Thunk 函数。使用thunk函数可以实现generator函数的自动执行。因为thunk函数可以在回调函数里，将执行权交还给 Generator 函数，实现异步控制。
##### 4. 使用 Promise 可以配合 generator 函数实现异步控制流吗？具体原理是什么？
可以，因为promise所做的事情本质和callback是一样的，所以callback能完成的事情promise也能完成，同时promise解决了callback的回调地狱问题，还能更优雅地实现。
##### 5. 真正发出异步操作指令是在 generator 函数外还是在 generator 函数内？（hint: 基于 Thunk 函数和基于 Promise 两种 generator 函数异步控制流，情况不一样）
基于thunk函数的异步控制是在调用callback时真正发出指令，因此是在generator外，基于promise函数的异步控制是在创建Promise时真正发出指令，是在generator内。
##### 6. async 函数是什么？它和 generator 函数有什么关系？
异步函数的关键字，它和generator的功能基本相同，不同的是它里面定义了await替换generator中的yield。
##### 7. 在全局域或者普通函数中能使用 await 或 yield 关键字吗？为什么？
不能，await和yield关键字必须配合async和带*的函数一起使用，其他地方不能单独使用。
##### 8. 直接调用 async 函数的返回值类型是什么？为什么？
返回的是一个Promise对象。
##### 9. 下面代码能正常捕获异步异常吗？为什么？如果不能需要怎样修改才可以正常捕获异常？
```javascript
async function f() {
   throw new Error('出错了');
}
try{
   f()
}catch(e){
   console.log(e)
}
```
不能，因为async函数返回的是一个promise对象，需要用Promise的方式去捕获异常，修改如下：
```javascript
async function f() {
    throw new Error('出错了');
}
f().then(data=>{
    console.log(data)
}).catch(err=>{
    console.log(err);
})
```

---
### 代码题
##### 1. 请实现 thunkify(fn) 函数，它将一个 callback 类型的异步调用函数转换为 Thunk 函数
```javascript
const Thunk = function(fn) {
  return function (...args) {
    return function (callback) {
      return fn.call(this, ...args, callback);
    }
  };
};
```
##### 2. 请将 fs.readFile(path[, options], callback) 函数 Thunk 化，了解函数点击这里
```javascript
const Thunk = function(fn) {
  return function (path[,options]) {
    return function (callback) {
      return fn.call(this, path[,options], callback);
    }
  };
};
```
##### 3. 请实现基于 Thunk 函数的 generator 函数自动运行器
```javascript
let run = fn =>{
    let it = fn()
    function next (err, data){
        let rs = it.next(data)
        if (rs.done) return
        rs.value(next)
    }
    next()
}
run(/*Generator函数*/)
```
##### 4. 请实现基于 Promise 的 generator 函数自动运行器
```javascript
let run = fn =>{
    let it = fn()
    function next(data){
        let rs = it.next(data)
        if (re.done) return
        re.value.then(data=>{
            next(data)
        })
    }
    next()
}
run(/*Generator函数*/)
```
##### 5. 请使用之前作业：Promise 实现的 ajaxGet(url) 使用 generator 函数实现以下异步控制流
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
```
#####1)实现串行（一个接一个的）发送10个请求，来获取前10页数据
```javascript
function* getTen(){
    let [page, pageSize] = [1, 30]
    for (;page<=10;page++){
        let p = ajaxGet(`http://learning-api.mafengshe.com/news?page=${page}&pageSize=${pageSize}`)
        console.log(p)
        console.log(yield p)
    }
}
let run = fn =>{
    let it = fn()
    function next(data){
        let rs = it.next(data)
        if (re.done) return
        re.value.then(data=>{
            next(data)
        })
    }
    next()
}
run(getTen)
```
#####2)实现并行（同时）发送10个请求，来获取前10页数据
```javascript
function* getTen(){
    let [page, pageSize] = [1, 30]
    for (;page<=10;page++){
        let p = ajaxGet(`http://learning-api.mafengshe.com/news?page=${page}&pageSize=${pageSize}`)
        yield p
    }
}
let it = getTen()
let promiseArray = []
for (let v of getTen){
    promiseArray.push(v)
}
Promise.all(promiseArray).then(data=>{console.log(alldata)});
```
##### 6. 请使用之前作业：Promise 实现的 ajaxGet(url) 使用 async/await 实现以下异步控制流
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
```
#####1)实现串行（一个接一个的）发送10个请求，来获取前10页数据
```javascript
async function getTen() {
    let [page, pageSize] = [1, 30]
    for (;page<=10;page++){
        let p = ajaxGetPromise(`http://learning-api.mafengshe.com/news?page=${page}&pageSize=${pageSize}`)
        console.log(p)
        console.log(await p)
    }
}
getTen()
```
#####2)实现并行（同时）发送10个请求，来获取前10页数据
```javascript
async function getTen() {
    let [page, pageSize] = [1, 30]
    let promiseArray = []
    for (;page<=10;page++){
        let p = ajaxGetPromise(`http://learning-api.mafengshe.com/news?page=${page}&pageSize=${pageSize}`)
        promiseArray.push(p)
    }
    await Promise.all(promiseArray)
}
getTen()
```