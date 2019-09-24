var obj = {
    a: 1,
    fun: function(){
        console.log(this.a)
    }
}

// 用ES5实现静态绑定
// var obj = {
//     a: 1,
//     fun: function(){
//         console.log(this.a)
//     }.bind(window)    //bind(), call(), apply()都能改变this的指向
// }

var a = 2;

var obj2 ={
    a: 3
}

obj.fun()             //?  1

var fun = obj.fun
fun()                 //?  2

obj2.fun = obj.fun
obj2.fun()            //?  3

(obj.fun = obj.fun)() //?  

(obj.fun , obj.fun)() //?  

