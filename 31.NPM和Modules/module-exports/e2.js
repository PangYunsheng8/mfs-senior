const hello = function () {
    console.log('Hello world');
}
exports.hello = {
    hello
}
console.log('修改值==========');
console.log(exports);
console.log(module.exports);
// 输出结果
//修改值==========
//{ hello: { hello: [Function: hello] } }
//{ hello: { hello: [Function: hello] } }