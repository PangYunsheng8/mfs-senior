let express = require('express')

let app = express()

let user = {
    id: 434497112, 
    username: "pangyunsheng",
    password: 123456,
    email: "434497112@qq.com"
}

app.get('/', (req, res)=>{
    res.write(JSON.stringify(user))
    res.end()
})
app.post('/', (req, res)=>{
    let content = req.query
    for (let key in content){
        user[key] = content[key]    
    }
    res.write(JSON.stringify(user))
    res.end()
})
app.put('/', (req, res)=>{
    let content = req.query
    for (let key in user){
        if (key in content){
            user[key] = content[key]
        }else{
            user[key] = ""
        }
    }
    res.write(JSON.stringify(user))
    res.end()
})
app.patch('/', (req, res)=>{
    let content = req.query
    for (let key in content){
        if (key in user){
            user[key] = content[key]
        }
    }
    res.write(JSON.stringify(user))
    res.end()
})
app.delete('/', (req, res)=>{
    let content = req.query
    for (let key in content){
        if (key in user){
            delete user[key]
        }
    }
    res.write(JSON.stringify(user))
    res.end()
})
app.listen(8080, '127.0.0.1', ()=>{
    console.log('express work at 8080')
})