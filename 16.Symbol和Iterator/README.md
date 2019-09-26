### 代码题
##### 1. Symbol 是什么？有哪些使用场景？
Symbol是ES6引入的一种新的原始数据类型，表示独一无二的值。Symbol提供了一种机制，保证每个属性的名字都是独一无二的，不会产生冲突。
##### 2. Symbol("foo") == Symbol("foo")输出什么？为什么？
输出false，因为每个Symbol都是独一无二的，都不相同，所以输出false。
##### 3. Symbol.iterator 是什么？这里为什么要使用 Symbol 那？
Symbol.iterator是每个具有迭代器的对象的迭代器。使用Symbol是为了防止被程序员修改，导致自定义的属性与真实的iterator冲突，使原始的对象丧失了某些特性。
##### 4. 哪些对象（容器）内部实现了 iterator ？
数组，字符串，Map和Set等。
##### 5. 数组解构的核心本质是什么？哪些对象（容器）可以作为数组解构的右值？
数组解构的核心本质是，假如解构右值有迭代器，那么迭代器会根据解构左值定义的变量，一步一步执行next，将next出的值赋给解构左值的变量。所以理论上只要有迭代器的对象或容器都可以作为数组解构的右值。

---
### 代码题
##### 1. 请实现与下面 generator 函数 等价的迭代器
```javascript
function* gen(){
   yield 1
   yield 2
   return 3;
}
```
实现：
```javascript
function makeIt(){
    var i = 0;
    var arr = [1, 2]
    var re = 3
    return {
        next(){
            let obj;
            if (i < arr.length){
                obj = {value: arr[i++], done: false}
            }
            else if (i == arr.length){
                obj = {value: re, done: true}
                i++
            }
            else{
                obj = {done: true}
            }
            return {value: obj.value, done: obj.done}
        }
    }
}

let mIt = makeIt() 
console.log(mIt.next())   //{ value: 1, done: false }
console.log(mIt.next())   //{ value: 2, done: false }
console.log(mIt.next())   //{ value: 3, done: true }
console.log(mIt.next())   //{ value: undefined, done: true }
console.log(mIt.next())   //{ value: undefined, done: true }
```
##### 2. 请给对象 let obj={} 加上迭代器，实现可以无限打印 a
```javascript
let obj = {
    [Symbol.iterator]: function(){
        return {
            next(){
                return {
                    value: "a",
                    done: false
                }
            }
        }
    }
}

for (let v of obj){
    console.log(v)
}
```
##### 3. 请给对象 obj 加上迭代器，使其可以像数组一样使用 for of 循环
```javascript
let obj = {
   [0] : "a",
   [1] : "b",
   [2] : "c",
   length : 3
}
```
修改如下：
```javascript
let obj = {
    [Symbol.iterator]: Array.prototype[Symbol.iterator],
    [0] : "a",
    [1] : "b",
    [2] : "c",
    length : 3
}
for (let v of obj){
    console.log(v)
}
```