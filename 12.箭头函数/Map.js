let map = new Map()
map.set("key", "value")
map.set("key1", "value1")

//打印值
map.forEach(i=>{
    console.log(i)
})

//打印键和值
for (let [key, value] of map){
    console.log(key, value)
}