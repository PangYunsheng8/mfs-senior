let EventEmitter = require('events')
class MyEvent extends EventEmitter{
    readDB(){
        console.log("readDB")
    }
}

let myEvent = new MyEvent
myEvent.on("click", (a, b)=>{
    console.log("click", a, b)
    myEvent.readDB()
})

myEvent.on("check", (a, b)=>{
    console.log("check", a, b)
    myEvent.readDB()
})

myEvent.emit("click", 1, 2)

myEvent.emit("check", 3, 4)