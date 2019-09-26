### 问答题
##### 1. 什么是 Generator 函数？和普通函数有什么区别？怎么声明 Generator 函数？
Generator函数是ES6提供的一种异步编程机制，Generator函数是一个状态机，里面封装了多个内部状态。与普通函数不同的是，执行Generator函数会返回一个遍历器对象，并且Generator函数使用yield表达式，定义内部的不同状态。声明Generator函数可以在function关键字与函数名之间加一个星号"*"。
##### 2. 怎样调用 Generator 函数并逐步执行 Generator 代码？
调用Generator函数并逐步执行它的代码如下：
```javascript
function* generator(){
    //函数体
    yield xxx
}
let it = generator()
it.next()
```
##### 3. Generator 函数实现无限序列原理是什么？
Generator函数实现无限序列原理是惰性求值，Generator函数可以实现仅仅在我们需要的时候才会得到一个值，否则无限序列会很快耗尽内存。
##### 4. Generator 函数怎么实现函数内的数据与函数外进行交互的？请从函数内数据传至函数外，和函数外数据传至函数内两个方面说明
yield关键字可以将函数内的数据传至函数外，这也是Generator函数的本质；此外，Generator函数还允许将函数外的数据传到函数内，交互式地改变Generator函数的执行状态，例如：
```javascript
function* foo(x) {
    var y = 2 * (yield (x + 1));
    var z = yield (y / 3);
    return (x + y + z);
}

var b = foo(5);
b.next(3)          //6
b.next(12)         //8
b.next(13)         //42
```
第一次调用next()，由于是第一次调用，之前没有yield，而next()方法传入的参数改变的是上一个yield表达式的值，因此这里传入的参数3没有作用，yield出的值仍是(x+1)=6
第二次调用next()，传入参数12，改变了yield(x+1)的值为12，因此y=24，yield出的值为y/3=8
第三次调用next()，传入参数13，改变了yield(y/3)的值为13，因此z=13，yield出的值为(x+y+z)=5+24+13=42
##### 5. yield*有什么用？它和 yield 有什么关系？（此题请自学完成）
举例说明：
```javascript
function* gen1(){
    yield 1
    yield 2
    return 3
}
function* gen2(){
    yield 10
    yield* gen1()
    yield 20
    return 30
}
console.log([...gen2()])
```
在上例中，如果gen2中不使用yield*，那么yield gen1()表达式得出的结果是一个迭代器而不是值。
##### 6. 怎么迭代出Generator 函数所有值？请使用 for of 循环实现
举例说明：
```javascript
function* gen(){
    yield 1
    yield 2
    yield 3
    return 4
}

for (let v of gen()){
    console.log(v)
}                          //输出1，2，3
```


---
### 代码题
##### 1. 请实现Generator函数range(start,end)，可以迭代出start到end直接所有整数
```javascript
function* range(start, end){
    let t = Math.floor(start) + 1;
    while (t < Math.ceil(end)){
        yield t
        t++;
    }
    return "gen end"
}

for (let v of range(-1.5, 10.3)){
    console.log(v)
}
```
##### 2. 请实现Generator函数fib()实现计算无限序列：斐波那契数列
```javascript
function* fib(){
    [prev, curr] = [0, 1]
    while (true){
        [prev, curr] = [curr, prev+curr]
        yield curr
    }
}

var i = 0
for (let v of fib()){
    if (i++ > 10){
        break
    }
    console.log(v)
}
```
##### 3. 请使用解构语法，使用上面实现的fib()函数计算斐波那契数列前3项
```javascript
function* fib(){
    [prev, curr] = [0, 1]
    while (true){
        [prev, curr] = [curr, prev+curr]
        yield curr
    }
}

[x, y, z] = fib()
console.log(x)
console.log(y)
console.log(z)
```