var http=require("http");

var options={
    hostname:"127.0.0.1",
    port:3000
}

var req=http.request(options,function(res){
    res.setEncoding("utf-8");
    res.on("data",function(chunk){
        console.log(chunk.toString())
    });
    console.log(res.statusCode);
});
req.on("error",function(err){
    console.log(err.message);
});
req.end();