### 问答题
##### 1. 如下代码会报错吗？如果报错请说明原因，如果不报错请说明运行结果和原因
```javascript
for(var i = 1; i<5; i++){
    console.log(i);
}
console.log(i);
```
不会报错，会依次打印1-5
原因：JavaScript中不存在块作用域，因此for循环中定义的i经过变量提升后，相当于是全局作用域的i，在for循环执行结束后，i的值变为5，因此在最后打印i时，会打印出5。
##### 2. 如下代码输出是什么？为什么？请写出js解释器实际执行的等效代码
```javascript
var v='Hello World'; 
(function(){ 
    console.log(v); 
    var v='I love you'; 
})()
```
undefined
原因：由于变量提升的原因，匿名函数会被提升到给变量v赋值之前，同时匿名函数在声明的时候又会执行，因此在执行匿名函数时，变量v并没有被赋值，因此会打印undefined。js解释器实际执行的等效代码如下：
```javascript
var v;
v='Hello World'; 
(function(){ 
    var v
    console.log(v); 
    v='I love you'; 
})() 
```
##### 3. 如下代码输出是什么？为什么？请写出js解释器实际执行的等效代码
```javascript
function main(){ 
    console.log(foo);    
    var foo = 10;
    console.log(foo);    
    function foo(){ 
       console.log("我来自 foo"); 
    } 
    console.log(foo);    
} 
main();
```
先输出function foo再输入10，10
原因：由于变量提升，以上代码等效于执行下面的代码：
```javascript
function main(){ 
    function foo(){ 
      console.log("我来自 foo"); 
    } 
    var foo
    console.log(foo);    
    foo = 10;
    console.log(foo);     
    console.log(foo);     
} 
main();
```
##### 4. 如下代码输出是什么？为什么？
输出为：20，20，10，10
```javascript
var a = 10;
var foo = {
    a: 20,
    bar: function () {
        var a = 30;
        return this.a;
   }
};

console.log(
    foo.bar(),             
    (foo.bar)(),           
    (foo.bar = foo.bar)(), 
    (foo.bar, foo.bar)()   
);
```
##### 5. 如下代码输出是什么？为什么？请写出js解释器实际执行的等效代码
输出依次为：undefined，20，undefined，30，20
```javascript
var a = 10;
function main(){
   console.log(a);        
   var a = 20;
   console.log(a);        
   (function(){
      console.log(a);    
      var a = 30;
      console.log(a);     
   })()
   console.log(a);       
}
main()
```
其等效的执行代码如下：
```javascript
var a;
function main(){
    var a;
    console.log(a);        
    a = 20;
    console.log(a);        
    (function(){
        var a;
        console.log(a);    
        a = 30;
        console.log(a);     
    })()
   console.log(a);        
}
a = 10;
main()
```
##### 6. 为什么点击所有的button打印出来的都是5而非0,1,2,3,4？要怎么修改？
作用域链导致了闭包保存的是父函数变量的最终值。修改方式如下：
```javascript
var buttons = $("button")

var result = new Array();
for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = (function (num) {
        return function () {
            console.log(num)
        }
    })(i);
}
```
##### 7. 什么是内存泄漏？怎样判断自己的程序是否有内存泄漏？
当一个对象在其所在环境执行完毕后，由于各种原因，没有被释放，就是内存泄漏。
可以通过chrome浏览器调试工具中的performance标签页来查看是否发生内存泄漏，若发生内存泄漏，则内存使用情况会逐渐上升。
##### 8. 什么是循环引用？循环引用在V8下会造成内存泄漏吗？
两个对象相互引用成为循环引用，例如：
```javascript
window.onload = function(){
    var el = document.getElementById("id");
    el.onclick = function(){
        alert(el.id);
    }
}
```
执行给元素绑定事件时，元素绑定了匿名函数，但在匿名函数中同时又引用了元素的id,存在循环引用。

---
### 代码题
```javascript
var myObject = null
setInterval(function () {
    var otherObject = myObject
    var unused = function () {
        if (otherObject)
            console.log("hi")
    }
    myObject = new Array(1000000);
}, 100)
```