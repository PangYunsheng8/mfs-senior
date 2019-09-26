setTimeout(function() {  //setTimeout是下个事件循环，因此最后执行
    console.log(1)
 }, 0);
 new Promise(function executor(resolve) {
    console.log(2);
    for( var i=0 ; i<10000 ; i++ ) {
       i == 9999 && resolve();
    }
    console.log(3);
 }).then(function() {  //then在当前事件循环的末尾执行
    console.log(4);
 });
 console.log(5);
 //2345都是当前的事件循环，由于promise是立即执行函数，并且没有异步，同时又因为在程序开始，因此先23
 //结果：23541


 setTimeout(function() { 
    console.log(1)
 }, 0);
 new Promise(function executor(resolve) {
    console.log(2);
    setTimeout(()=>{
        resolve();
    }, 1000)
    console.log(3);
 }).then(function() { 
    console.log(4);
 });
 console.log(5);
//结果；23514

setTimeout(function() { 
    console.log(1)
 }, 0);
 new Promise(function executor(resolve) {
    console.log(2);
    setTimeout(()=>{
        resolve();
    }, 0)
    console.log(3);
 }).then(function() { 
    console.log(4);
 });
 console.log(5);
//结果还是23514，注意事件循环是队列，先进先出，1先进所以1先执行