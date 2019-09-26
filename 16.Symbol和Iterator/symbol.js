key = [0,1,2]
obj = {
    name: "xiaozhang",
    [key]: "1111"
}

obj.name = "mafengshe"
console.log(obj[[0,1,2]])


key1 = Symbol("key")   //本质并没有解决问题啊？如果Symbol中的"key"一样，Symbol确实可以包装成不同的两个键，但是如果key1==key2还是会覆盖掉前面的
key2 = Symbol("key")
obj = {
    name: "xiaozhang",
    [key1]: "111",
    [key2]: "222"
}
obj.name = "mafengshe"
console.log(obj)