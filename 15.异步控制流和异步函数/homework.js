//question 1
let thunkify = args => callback => func(args, callback);
function thunkify(fn){
    
}

//question 2
//callback形式的readFile
fs.readFile('/etc/passwd', (err, data) => {
    if (err) throw err;
    console.log(data);
});
//Thunk形式的readFile


let run = fn =>{
    let it = fn()
    function next (err, data){
        let rs = it.next(data)
        if (rs.done) return
        rs.value(next)
    }
    next()
}
run(/*Generator函数*/)