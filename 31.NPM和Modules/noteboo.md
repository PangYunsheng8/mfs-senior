### node相关背景
一般的应用可以分为两种：
1）计算密集型
2）I/O密集型

GPU一个核心一秒钟可以运行3x10的9次方次指令。
硬盘读取数据最快也得10ms左右

node.js的两个核心关键：事件驱动，非阻塞型I/O
node.js没有进程调度，靠非阻塞型I/O来处理高并发，能充分利用CPU资源
node.js之所以能用非阻塞型I/O的模型，得益于函数式编程，函数可以充当参数等原因

---
### pm常用指令：
1)install:安装
npm install vue --save/npm install vue --save-dev: 安装vue包，并且更新package.json。
(package.json只是起到一个说明的作用，其中的dependencies记录了生产环境中需要的依赖包，--save将包记录到dependencies中
devDependencies记录了开发环境中的依赖包，--save-dev将包记录到devDependencies中)
2)init:用于创建package.json
在package.json文件的script中，加入一句"run-webpack": "webpack -v"则会优先使用项目中的webpack而不使用全局域下的webpack
如果node_modules目录下的.bin目录下没有指定的webpack，则会运行全局域的webpack
3)run
npm run start


---
### node模块化
1)浏览器中并没有exports，exports是node的私有变量，为了实现模块化
下面这个函数是node实现模块化的关键
(function(exports, require, module, __filename, __dirname) {
// Module code actually lives in here
});
2)node.js循环引用：
当不同模块之间发生循环引用时，node并不会卡死，因为它内部做了处理机制(见循环引用)，处理的原理是：
如果一个模块执行到一半，去引用另一个模块，而另一个模块又要引用这个执行了一半的模块，那么这个模块
不会被引用，而是导出该模块的要导出的变量。
