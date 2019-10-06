let fs = require("fs")

let content
fs.readFile('./event.js', (err, data)=>{
    //console.log(data.toString())
    content = data.toString()
})
console.log(content) //这时候打印出来的是undefined，因为readFile是异步函数

let filePromise = path => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, data)=>{
            if (err) 
                reject(err)
            else
                resolve(data)
        })
    })
}
async function readMyFile() {
    return await filePromise('./event.js')
}
readMyFile().then(data=>{   
    console.log(data.toString())
})

// fs.writeFile('./test.txt', "hello fs", (err)=>{
//     if(err){
//         console.log(err)
//     }
// })