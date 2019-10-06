### 问答题
##### 1. Node.js 中什么是事件？如何定义事件？如何触发事件？
事件是node.js实现异步操作的一个方式，如果事件被触发，那么绑定在该事件上的回调函数都会被同步地调用。可以通过继承EventEmitter类来定义一个事件。通过emit()方法触发事件。
##### 2. Node.js 中如何读写文件？请分别给出示例代码
```javascript
let fs = require("fs")

//读文件
fs.readFile('./event.js', (err, data)=>{
    console.log(data.toString())
})
//写文件
fs.writeFile('./test.txt', "hello fs", (err)=>{
    if(err){
        console.log(err)
    }
})
```
##### 3. 流是什么？如何使用流读取文件？
```javascript
const fs = require("fs");

let readStream = fs.createReadStream("./test.txt",{encoding:'utf8'});

readStream.on("open",(data)=>{
    console.log('open',data)
})
readStream.on("data",(data)=>{
    console.log("reading data");
    console.log("bytes",readStream.bytesRead);
    console.log(data)
})
readStream.on("close",(data)=>{
    console.log('closed')
})
```
##### 4. Node.js 中如何获取环境变量？
process.env

---
### 代码题
1.https://github.com/PangYunsheng8/mfs-senior/blob/master/32.Node%20%E5%B8%B8%E7%94%A8%E6%A8%A1%E5%9D%97%E4%BB%8B%E7%BB%8D/readFile.js
2.client:https://github.com/PangYunsheng8/mfs-senior/blob/master/32.Node%20%E5%B8%B8%E7%94%A8%E6%A8%A1%E5%9D%97%E4%BB%8B%E7%BB%8D/form-upload/client.html
server:https://github.com/PangYunsheng8/mfs-senior/blob/master/32.Node%20%E5%B8%B8%E7%94%A8%E6%A8%A1%E5%9D%97%E4%BB%8B%E7%BB%8D/form-upload/server.js
3.client:https://github.com/PangYunsheng8/mfs-senior/blob/master/32.Node%20%E5%B8%B8%E7%94%A8%E6%A8%A1%E5%9D%97%E4%BB%8B%E7%BB%8D/server-client/http-client.js
server:https://github.com/PangYunsheng8/mfs-senior/blob/master/32.Node%20%E5%B8%B8%E7%94%A8%E6%A8%A1%E5%9D%97%E4%BB%8B%E7%BB%8D/server-client/http-server.js