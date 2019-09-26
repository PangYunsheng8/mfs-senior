function* gen(){
    yield 1
    yield 2
    return 3
}
let it = gen()
console.log(it.next())
console.log(it.next())
console.log(it.next())

function makeIt(){
    var i = 0;
    var arr = [1, 2]
    var re = 3
    return {
        next(){
            return i != arr.length ? {value: arr[i++], done: false} : {value: re, done: true}
        }
    }
}
let mIt = makeIt()
console.log(mIt.next())
console.log(mIt.next())
console.log(mIt.next())

//数组，字符串，Set和Map都内置迭代器


let arr = [1, 2, 3, 4]
let itArr = arr[Symbol.iterator]()
console.log(itArr)
console.log(itArr.next())
console.log(itArr.next())
console.log(itArr.next())
console.log(itArr.next())
console.log(itArr.next())

let [a, b, c] = arr
console.log(a, b, c)  //解构的本质就是，给定arr后，如果arr支持iterator，那么就一步一步next给左边的变量


for (let i of arr){
    console.log(i)
}
//for of 循环的本质
let it2 = arr[Symbol.iterator]
let t = it2.next()
while (t.done != true){
    console.log(i)
    t = it2.next()
}


function* bar(){
    yield 1
    yield 2
}
function* bar2(){
    yield "a"
    yield* bar()  //这要yield* 后面的东西有iterator，比如是一个数组，字符串，map, set等，都可以这样写，因为它本质是通过iterator展开的
    yield "b"
}