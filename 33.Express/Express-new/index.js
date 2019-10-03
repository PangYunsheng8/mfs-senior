let express = require("express")

let router = express.Router()
router.use((req, res,next)=>{
    console.log('------------中间件3-----------')
    next()
})
router.get('/a',(req,res)=>{
    res.write("subrouter")
    res.end()
})

let app = express() //创建一个express实例
app.use((req,res,next)=>{
    console.log('------------中间件1-----------')
    next()
})
app.use((req,res,next)=>{
    console.log('------------中间件2-----------')
    //res.end()//如果这里不想继续处理该请求，就不再调用next方法，而是用res.end()告诉浏览器不要再等待了，因为请求已经被扔掉了
    next()
})

app.use('/subrouter', router)

app.get('/', (req, res)=>{ //用get方法访问根目录的时候，会调用后面的回调方法
    res.write("hello express") //向流里面写数据，这里指返回体
    res.end() //把流关闭，不然接收者（浏览器）会一直等待接收数据
})
app.post('/', (req,res)=>{
    res.write("hello post")
    res.end()
})
app.delete('/', (req,res)=>{
    res.write("hello delete")
    res.end()
})
app.put("/", (req,res)=>{
    res.write("hello put")
    res.end()
})
app.patch("/", (req,res)=>{  //patch和put有一些细微区别，put是全部修改，patch是部分修改
    res.write("hello patch")
    res.end()
})
app.use((req,res)=>{ //兜底的，如果请求没有得到正确的回复，就会传入到此处app.use返回404
    res.status(404)
    res.write("404 NOT FOUND")
    res.end()
})
app.listen(8080, '127.0.0.1', ()=>{
    console.log('express work at 8080')
})