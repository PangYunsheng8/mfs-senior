### 问答题
##### 1. 什么是箭头函数？它和 function 声明的函数有什么区别？
箭头函数是使用箭头"=>"定义的函数，和function声明的函数的主要区别如下：
```javascript
function fun(a){
    console.log(a)
}
let fun = a => {console.log(a)}
```
##### 2. 下面代码输出的是什么？为什么？
```javascript
var a = 2
var obj = {
   a : 1,
   fun : function () {
      console.log(this.a)
   }
}

var obj2 ={
   a : 3
}

obj.fun()          // ?

var fun = obj.fun;
fun()              // ?

obj2.fun = obj.fun
obj2.fun()         // ?

```
输出为1，2，3。因为obj中的this是动态绑定，this的指向是根据实际的执行域来决定的，在obj.fun()中，this指向的是obj，因此调用的是obj中的a，为1。在fun()中，this指向的是全局域，因此this.a输出的是全局的a，为2。在obj2.fun()中，this.a指向的是obj2中的a，因此输出为3。
##### 3. 下面代码输出的是什么？为什么？
```javascript
var a = 2
var obj = {
   a : 1,
   fun : () => {
      console.log(this.a)
   }
}

var obj2 ={
   a : 3
}

obj.fun()          // ?

var fun = obj.fun;
fun()              // ?

obj2.fun = obj.fun
obj2.fun()         // ?
```
输出为2，2，2。因为obj中使用了箭头函数，因此该函数中的this为静态绑定，同时由于箭头函数，导致this指向全局域，在后面的调用中，无论执行环境是什么，this都指向声明环境中的全局域，因为输出都为2。
##### 4. 箭头函数的this静态绑定是什么含义？和this的动态绑定有什么区别？请写出示例代码说明区别
静态绑定的this指向的是声明环境所在的域，并且不会再改变。动态绑定的this根据执行环境的改变而改变指向。
##### 5. 下面代码输出是什么？结合第三题，试理解this静态绑定的绑定规则。
```javascript
var id = 2;
function foo() {
   return () => {
      console.log('id:', this.id);
   };
}

foo.call({id: 1})()
```
输出为id:1。因为箭头函数中的this绑定了foo函数中的this，而foo.call直接改变了foo函数的this，因此相应的箭头函数中的this也跟着改变，所以值为id:1。
##### 6. 对于function声明的函数，如果想实现箭头函数的this静态绑定，需要怎么做？
使用bind()函数实现静态绑定，例如：
```javascript
function fun(){
    console.log(this.a)
}.bind(window)
```
##### 7. 什么是柯里化(currying)，它有什么作用？
柯里化是将多参数的函数转换成单参数的形式。
##### 8. 下面代码输出的是什么？为什么？
```javascript
let fun1 = i => i*2
let fun2 = i => {i*2}

console.log(fun1(1))   // ?
console.log(fun2(1))   // ?
```
返回2和undefined，因为第一句相当于return i*2，第二句相当于只是写了一条语句，并没有返回。
##### 9. 什么是 Set ，它和数组有什么异同？
Set类似于数组，但是不同于数组，它的成员的值都是唯一的，没有重复的值。
##### 10. 什么是 WeakSet / WeakMap？和 Set / Map 有什么异同？
WeakSet与Set类似，也是不重复的值的集合。但是，WeakSet的成员只能是对象，而不能是其他类型的值。此外，WeakSet中的对象都是弱引用，即垃圾回收机制不考虑WeakSet对该对象的引用。
WeakMap与Map的区别是，WeakMap只接受对象作为键名，不接受其他类型的值作为键名。其次，WeakMap的键名所指向的对象，不计入垃圾回收机制。

---
### 代码题
##### 1. 请把下列代码改写成箭头函数的写法
```javascript
[1,2,3].map(function (x) {
   return x * x;
});
```
箭头函数写法为：
```javascript
[1,2,3].map(x => x*x)
```
##### 2. 请将下面函数柯里化(currying)，需要写出箭头函数和非箭头函数两种答案
```javascript
function cala(add, mul, origin) {
    return (origin + add) * mul
}
```
function写法
```javascript
function cala_currying(add, mul){
    return function(origin){
        return (origin + add) * mul;
    }
}
```
箭头函数写法
```javascript
let cala_currying = (add, mul) => origin => (add + origin)*mul
```
##### 3. 请使用 Set 实现数组去重
```javascript
let set = new Set([1,2,3,4,5,1,2,3,4,5])
let arr = [...set]
```
##### 4. 请实现打印 Map 中所有的键值对
```javascript
let map = new Map()
map.set("k1", "v1")
map.set("k2", "v2")
map.set("k3", "v3")
map.set("k4", "v4")

//打印键和值
for (let [key, value] of map){
    console.log(key, value)
}
```