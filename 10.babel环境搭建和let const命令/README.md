### 问答题
##### 1. babel 是什么，它能干什么，不能干什么？
babel是一个javascript编译器，他把最新版的javascript编译成当下可以执行的版本，利用babel就可以让我们在当前的项目中随意的使用这些新最新的es6，甚至es7的语法。
Babel默认只转换新的JavaScript句法而不转换新的API，比如Iterator、Generator、Set、Map、Proxy、Reflect、Symbol、Promise等全局对象，以及一些定义在全局对象上的方法（比如Object.assign）都不会转码。这些是由babel-polyfill来做。
##### 2. 我们使用 babel 把 es6/7的代码编译为 es5代码后，为什么还需要引入 polyfill？
因为Babel默认只转换新的JavaScript句法而不转换新的API，比如ES6 在Array对象上新增了Array.from方法。Babel就不会转码这个方法。如果想让这个方法运行，必须使用babel-polyfill，为当前环境提供一个垫片。
##### 3. babelrc文件是干嘛的？常见配置是什么？
babelrc用来设置转码规则和插件。其基本的格式如下：
```
{
  "presets": [],
  "plugins": []
}
```
##### 4. presets 中设置 env 是什么含义？
将ES2015+版本的JS编译成ES5，引入官方的解释如下：
>A Babel preset that compiles ES2015+ down to ES5 by automatically determining the Babel plugins and polyfills you need based on your targeted browser or runtime environments.
##### 5. babel 中 presets 与 plugin 有什么区别？有什么联系？
Babel Preset视为Babel Plugin的集合， 比如babel-preset-es2015包含所有跟ES6转换有关的插件。如果没有指定Babel Preset，babel转化是需要指定用什么插件(Babel Plugin)的，但是由于插件一般很多，所以逐个安装会很麻烦。因此Babel Preset以一种集合的方式来安装更为简便。
##### 6. 请比较 let,var,const 命令的不同
let和const都是ES6中的新特性，它们都属于块级作用域，而var属于全局作用域，举一个例子来说明let和var的区别：
```javascript
for (var i = 0; i < 10; i++){
}
console.log(i)
```
以上代码不会报错，因为var是全局作用域
```javascript
for (let i = 0; i < 10; i++){
}
console.log(i)
```
以上代码会报错，因为let是块级作用域

---
### 代码题
##### 1. 以下代码在 presets:['env'] 环境下编译结果是什么？ 请解释 babel 为什么这样编译（babel 是通过什么方法保证两段代码等价的）
```javascript
var a = 10;
{
   let _a = 11;
   const b = 12;
   console.log(_a);
}
var _a = 13;
console.log(_a);
```
编译结果为：
```javascript
"use strict";

var a = 10;
{
   var _a2 = 11;
   var b = 12;
   console.log(_a2);
}
var _a = 13;
console.log(_a);
```
因为let是块级作用域，因此let _a与全局作用域下的var _a不是同一个变量，babel为了区分两者，将let下_a变成了_a2，避免与var下的_a冲突。
##### 2. 以下代码在 presets:['env'] 环境下编译结果是什么？为什么？
```javascript
const a = 10
a = 20;
```
会在编译时报错，因为babel无法将以上代码转化为等效的ES5代码，因此报错