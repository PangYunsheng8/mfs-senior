const fs = require("fs");

let readStream = fs.createReadStream("./test.txt",{encoding:'utf8'});

readStream.on("open",(data)=>{
    console.log('open',data)
})
readStream.on("data",(data)=>{
    console.log("reading data");
    console.log("bytes",readStream.bytesRead);
    console.log(data)
})
readStream.on("close",(data)=>{
    console.log('closed')
})
console.log(readStream.path)