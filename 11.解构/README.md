### 问答题
##### 1. 什么是解构？解构本质是什么？
从数组和对象中提取值，对变量进行赋值，这被称为解构。本质上，解构属于模式匹配，只要等号两边的模式相同，左边的变量就会被赋予对应的值。
##### 2. 什么是解构默认值？怎样使用？
解构默认值是在解构等号左边赋予一个默认值的行为，如果变量没有被赋值，则用默认值替代，例如：
```javascript
let [a, b, c="5"] = [1, 2]
```
##### 3. 下面代码执行会报错吗？为什么？
```javascript
let foo;
let {foo} = {foo: 1};
```
会报错。因为foo已经被声明，不能再通过解构的方式重新定义一个foo。
##### 4. 下面代码执行结果是什么？会报错吗？
```javascript
const {"0": a,"1": b} = ["foo", "bar"];
```
不会报错，执行后a为"foo"，b为"bar"。因为可以用数组给对象解构，反过来则不行。
##### 5. 下面代码声明了几个变量？值是多少？
```javascript
let { a: { b: { c }}} = { a: { b: { c: "1",d: "2"}}}
```
a和b都为undefined，c为1，没有声明d。
##### 6. 数组解构的核心是什么？请自学 Generator 函数 回答下面代码返回什么
```javascript
function* count() {
   let i = 1
   while (true) {
      yield i++;
   }
}

let [first, second, third, fourth, fifth, sixth] = count();
```
数组解构的核心是迭代器解构，通过将数组中的每个元素迭代出来赋值给对应的变量。
以上代码定义了从first到sixth的6个变量，值分别为1-6。
##### 7. 字符串可以解构吗？结合下面代码说说为什么？
```javascript
const [a, b, c, d, e] = 'hello';
```
字符串也可以解构，因为数组和字符串都是可以迭代的，它们都通过迭代器的方式逐个取出每个元素，然后赋值给相应的变量。

---
### 代码题
##### 1. 请使用解构语法实现交换两个数
```javascript
let a = 1
let b = 2
[a, b] = [b, a]
console.log(a, b)
```
##### 2. 请使用解构语法实现获取斐波那契数列前10个数
```javascript
function getFib(n){
    function fib(m){
        if (m < 3){
            return 1;
        }else{
            return fib(m-1) + fib(m-2);
        }
    }

    var fibArray = []
    for (var i = 1; i <= n; i++){
        var number = fib(i);
        fibArray.push(number)
    }
}
var [f1,f2,f3,f4,f5,f6,f7,f8,f9,f10] = getFib(10)
console.log(f1,f2,f3,f4,f5,f6,f7,f8,f9,f10)
```
##### 3. 对于单参数函数，如果通过解构语法设置默认值，修改代码实现默认值b = 10
```javascript
function test({a,b}){
   console.log(a,b)
}
```
修改代码如下：
```javascript
function test({a,b=10}){
    console.log(b)
}
let args = {a:1}
test(args)
```