function timeout(ms, cb){
    setTimeout(()=>{
        cb(null,"finish")
    }, ms)
}

//当多次调用时，缩进失控，而promise不会
// timeout(2000, (err, data)=>{
//     if (err){
//         //错误处理
//         console.log(err)
//         return
//     }
//     console.log(data)
//     timeout(2000,
//          (err, data)=>{
//         if (err){
//             //错误处理
//             console.log(err)
//             return
//         }
//         console.log("callback finish")
//         timeout(2000, (err, data)=>{
//             if (err){
//                 //错误处理
//                 console.log(err)
//                 return
//             }
//             console.log("callback finish 2")
//         })
//     })
// })
// console.log("end of program")
//上面的callback是依次执行，下面的函数是3个Callback是2秒之后同时执行，是并发控制

timeout(2000, (err, data)=>{
    if (err){
        //错误处理
        console.log(err)
        return
    }
    console.log(data)
})
timeout(2000,
        (err, data)=>{
    if (err){
        //错误处理
        console.log(err)
        return
    }
    console.log("callback finish")
})
timeout(2000, (err, data)=>{
    if (err){
        //错误处理
        console.log(err)
        return
    }
    console.log("callback finish 2")
})

console.log("end of program")