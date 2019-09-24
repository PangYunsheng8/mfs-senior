var obj = {
    a: 1,
    fun: () =>{
        console.log(this.a)
    }
}

var a = 2;

var obj2 ={
    a: 3
}

obj.fun()             //?  2

var fun = obj.fun
fun()                 //?  2

obj2.fun = obj.fun
obj2.fun()            //?  2