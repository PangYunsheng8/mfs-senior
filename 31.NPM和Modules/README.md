### 问答题
##### 1. 如何新建一个npm项目，本质是创建了什么文件？
首先要先创建一个文件夹，保存项目的文件，然后使用npm install xxx 指令安装相应的模块，然后npm init初始化该项目。本质是创建了package.json文件
##### 2. 如何安装删除npm包？全局安装和局部安装有什么区别？
安装: npm install xxx
卸载: npm uninstall xxx
全局安装需要添加-g
##### 3. 如何自定义 npm 命令（scripts）？
在package.json文件中的scripts字段中添加自定义的指令，例如
"start": "test.js"
##### 4. Node.js中require('./xxxx')和require('xxxx')导入的包相同吗？
不同，require('./xxxx')默认是导入当前路径的自定义模块，require('xxxx')默认是导入安装的包。
##### 5. Node.js中是如何处理循环引用？
node.js中如果发生了循环引用，即一个执行到一半的包引用了另一个包，而另一个包又需要引用该包，那么node.js不会再去引用那个执行了一半的包，而是导出其要导出的变量，来防止发生循环引用。
##### 6. Node.js 模块如何如何导出变量/函数/对象？
使用exports或module.exports指令
##### 7. module.exports 和 exports 的使用有何区别？(饿了么面试题)
1)exports和module.exports的初始值都为{}
```javascript
const hello = function () {
    console.log('Hello world');
}
console.log('初始值==========');
console.log(exports);
console.log(module.exports);
// 输出结果
//初始值==========
//{}
//{}
```
2)改变exports的指向，发现module.exports也发生改变，说明它们指向的是同一片内存区域
```javascript
const hello = function () {
    console.log('Hello world');
}
exports.hello = {
    hello
}
console.log('修改值==========');
console.log(exports);
console.log(module.exports);
// 输出结果
//修改值==========
//{ hello: { hello: [Function: hello] } }
//{ hello: { hello: [Function: hello] } }
```
3)如果只改变module.exports的指向，exports为空，但是外部文件可以引用导出的变量，说明模块实际导出的是module.exports而不是exports。
```javascript
const hello = function () {
    console.log('Hello world');
}
module.exports = {
    hello
}
console.log('修改值==========');
console.log(exports);
console.log(module.exports);
// 输出结果
//修改值==========
//{}
//{ hello: [Function: hello] }
```
4)如果只是给exports赋值，那么module.exports的指向不变，仍然为空，外部无法访问导出的变量，因为根本没导出。
```javascript
// hello.js
const hello = function () {
    console.log('Hello world');
}
exports = {
    hello
}
console.log('修改值==========');
console.log(exports);
console.log(module.exports);
// 输出结果
//修改值==========
//{ hello: [Function: hello] }
//{}
```
##### 8. Node.js 模块中可以定义全局变量（其他模块可以直接引用访问）吗？如果能，应该如何定义？如果不能，请说明原因。（饿了么面试题改编）
模块中可以定义全局变量，可以使用global.变量名定义全局变量，定义了全局变量后，其他模块也可以正常访问。