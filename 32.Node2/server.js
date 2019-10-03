
var http = require("http");
var querystring = require("querystring");

const hostname = '127.0.0.1';
const port = 3000;
 
var server = http.createServer(function(req,res){
    var allData = "";
    if(req.url == "/doPost" &&  req.method.toLowerCase() == "post") {
        console.log("aaa");
        req.addListener("data",function(chunk){
            allData += chunk;
        });
 
        req.addListener("end",function() {
            console.log(allData);
            var obj = querystring.parse(allData);
            console.log("name..." + obj.name);
            console.log("age..." + obj.age);
            console.log("sex..." + obj.sex);
            // console.log("file..." + obj.fileupload)
            res.end("success");
        });
    }
});
 
server.listen(3000,"127.0.0.1");
// server.listen(port,hostname,()=>{
//     console.log(`服务器运行在 http://${hostname}:${port}/`);
// });