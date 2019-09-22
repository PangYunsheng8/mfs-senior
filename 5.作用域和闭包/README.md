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
var v
(function(){ 
    console.log(v); 
    var v='I love you'; 
})()
v='Hello World'; 
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
    (function(){
        var a;
        console.log(a);    
        a = 30;
        console.log(a);  
    })()
    var a;  
    console.log(a);        
    a = 20;
    console.log(a);        
    console.log(a);       
}
a = 10;
main()
```