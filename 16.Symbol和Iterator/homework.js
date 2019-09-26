// question 1
// function makeIt(){
//     var i = 0;
//     var arr = [1, 2]
//     var re = 3
//     return {
//         next(){
//             let obj;
//             if (i < arr.length){
//                 obj = {value: arr[i++], done: false}
//             }
//             else if (i == arr.length){
//                 obj = {value: re, done: true}
//                 i++
//             }
//             else{
//                 obj = {done: true}
//             }
//             return {value: obj.value, done: obj.done}
//         }
//     }
// }
// let mIt = makeIt()
// console.log(mIt.next())
// console.log(mIt.next())
// console.log(mIt.next())
// console.log(mIt.next())
// console.log(mIt.next())

// question 2
// let obj = {
//     [Symbol.iterator]: function(){
//         return {
//             next(){
//                 return {
//                     value: "a",
//                     done: false
//                 }
//             }
//         }
//     }
// }

// for (let v of obj){
//     console.log(v)
// }

//question 3
let obj = {
    [Symbol.iterator]: Array.prototype[Symbol.iterator],
    [0] : "a",
    [1] : "b",
    [2] : "c",
    length : 3
}
for (let v of obj){
    console.log(v)
}