let arr = [1, 2, 3, 4]
let obj = {
    [Symbol.iterator]: Array.prototype[Symbol.iterator].bind(arr)
}
for (let i of obj){
    console.log(i)
}


let obj1 = {
    [Symbol.iterator]: Array.prototype[Symbol.iterator],
    [0]: "a",
    [1]: "b",
    length: 5
}
for (let i of obj1){
    console.log(i)
}