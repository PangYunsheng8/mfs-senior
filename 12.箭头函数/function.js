function add(a,b){
    return a + b
}
console.log(add(1, 2))

function add_currying(a){
    return function(b){
        return a + b
    }
}
let addOne = add_currying(1)
console.log(addOne(10))
console.log(add_currying(1)(10))

let fun1 = (a, b) => a + b
console.log(fun1(1, 2))

let fun1_currying = a => b => a + b