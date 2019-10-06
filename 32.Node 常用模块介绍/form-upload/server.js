
var http = require("http");
var querystring = require("querystring");
var fs = require("fs")

const hostname = '127.0.0.1';
const port = 3000;

var server = http.createServer(function (req, res) {
    var allData = "";
    if (req.url == "/doPost" && req.method.toLowerCase() == "post") {
        req.addListener("data", function (chunk) {
            allData += chunk;
        });

        req.addListener("end", function () {
            console.log(allData);
            fs.writeFile('./result.txt', allData, (err) => {
                if (err) {
                    console.log(err)
                }
            })
            res.end("success");
        });
    }
});

server.listen(port, hostname, () => {
    console.log(`服务器运行在 http://${hostname}:${port}/`);
});