function* foo(x) {
    var y = 2 * (yield (x + 1));
    var z = yield (y / 3);
    return (x + y + z);
  }
  
var a = foo(5);
a.next() // Object{value:6, done:false}
a.next() // Object{value:NaN, done:false}
a.next() // Object{value:NaN, done:true}

var b = foo(5);
b.next() // { value:6, done:false }
b.next(12) // { value:8, done:false }
b.next(13) // { value:42, done:true }

//注意，由于next方法的参数表示上一个yield表达式的返回值，所以在第一次使用next方法时，传递参数是无效的。

function* fib(){
    [prev, curr] = [0, 1]
    while (true){
        [prev, curr] = [curr, prev+curr]
        yield curr
    }
}
var i = 0
for (let v of fib()){
    if (i++ > 2){
        break
    }
    console.log(v)
}

function* numbers(){
    yield 1
    yield 2
    return 3
    yield 4
}
console.log([...numbers()])
console.log(["a", ...numbers(), "b"])


function* bar(){
    yield 1
    yield 2
}
function* bar2(){
    yield "a"
    yield* bar()
    yield "b"
}
console.log([...bar2()])