num = 0
function timeout(ms){
    return new Promise((resolve, reject) => { //这个函数是立即执行的
        setTimeout(()=>{
            if (num == 10){
                reject("err")
            }
            resolve("run")
            num++
        }, ms)
    })
}

//promise支持链式调用
// timeout(2000).then(data=>{
//     console.log(data + " times1")
//     return timeout(2000) //promise如果返回的也是一个promise，那么再次调用then，则会等当前的promise执行完后再调用then
// }).then(data=>{
//     console.log(data + " times2")
//     return timeout(2000)
// }).then(data=>{
//     console.log(data + " times3")
//     return timeout(2000)
// }).catch((err)=>{
//     console.log(err)
// })//在异常处理时，只需要在最后捕获异常就可以

// console.log("end of program")

//上面是用promise做串行控制，下面介绍的是promise做并行控制
timeout(2000).then(data=>{
    console.log(data + " times1")
})
timeout(2000).then(data=>{
    console.log(data + " times2")
})
timeout(2000).then(data=>{
    console.log(data + " times3")
})//第一种方法是可以仿照callback的形式

//第二种方法是用Promise提供的API
Promise.all([timeout(2000), timeout(2000), timeout(2000)]).then(data => console.log(data))

//3秒后同时返回，要等所有异步完成后才返回
Promise.all([timeout(1000), timeout(2000), timeout(3000)]).then(data => console.log(data)) 
//1秒后就返回run，即最短的promise完成后就调用回调函数，但是程序不会结束，要等所有promise完成，但是其他的不会调用回调函数
Promise.race([timeout(1000), timeout(2000), timeout(3000)]).then(data => console.log(data)) 


console.log("end of program")



timeout(2000).then(data=>{
    setTimeout(()=>{
    },0)
    return "1"  //如果这里返回的不是promise，那么会立即执行下面的then并且会把1传给下面的data
}).then(data=>{
    console.log(data)
})