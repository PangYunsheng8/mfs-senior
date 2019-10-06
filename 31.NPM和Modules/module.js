let obj={a:"t"}

console.log("module111")
// console.log(__dirname)
// console.log(__filename)

// console.log(exports)
// console.log(module.exports)

// console.log(exports == module.exports)

exports.b = "xxx"
// console.log(exports)
// console.log(module.exports)

module.exports = obj
// console.log(exports)
// console.log(module.exports)