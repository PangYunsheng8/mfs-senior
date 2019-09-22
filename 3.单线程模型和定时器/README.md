### 问答题
##### 1. setTimeout 或者 setInterval 设置定时器是准时触发的吗？为什么？如果不是，他可能延时触发还是延后触发？
不是准时触发的，受其他代码的影响以及运行代码时的CPU使用情况等不确定因素，setTimeout 或者 setInterval不能准时运行，会有一点偏差，但通常都是延后触发。
##### 2. 如下代码 setInterval 设置的定时器激活间隔为多少？为什么？
```
setInterval(function(){
  for(var i=0;i<1000*1000*1000;i++);//假设这行代码运行需要100ms
},1000)
```
1000ms，运行代码所花费的100ms不影响定时器的间隔。
##### 3. 如下代码的输出是什么？为什么？
```
setTimeout(function(){
  console.log(1);
},0)
console.log(2);
```
先输出2后输出1，因为js是单线程模型，对于setTimeout函数，js会将其放入到事件队列中等待其触发的条件发生，在触发条件发生前，程序会继续向下执行，因此先输出2，再输出1。
##### 4. 如下代码执行结果是什么？请解释原因。
```
var t = true;

window.setTimeout(function (){
   t = false;
},1000);
while (t){}
alert('end');
```
会进入死循环，因为当程序执行到setTimeout时，会将其放入到事件队列中等待触发，而程序继续向下执行，但是由于进入了while循环，且t为true，因此程序会卡死在while循环中无法跳出，因而无法触发事件队列中的setTimeout。
##### 5. 我们会在很多代码里看到如下语句，请说明在什么场景下需要使用如下形式代码。
```
setTimeout(function(){
  // balala
  // 这里有很多代码
  // balala
},0)
```
希望当前代码执行完毕，最后再执行setTimeout内的函数的场景下可以使用上述代码。

---
### 代码题
https://github.com/PangYunsheng8/mfs-senior/blob/master/3.%E5%8D%95%E7%BA%BF%E7%A8%8B%E6%A8%A1%E5%9E%8B%E5%92%8C%E5%AE%9A%E6%97%B6%E5%99%A8/homework3.html