let ajaxGetCallback = (url, callback) => {
    $.ajax({
        url: url,
        dataType: "json"
    }).done(data=>{
        callback(null, data)
    }).fail((xhr, status, err)=>{
        callback(err)
    })
}

let ajaxGetThunk = rul => callback => ajaxGetCallback(url, callback)

function* getTen(){
    let [page, pageSize] = [1, 30]
    for (;page<=10;page++){
        let tk = ajaxGetThunk(`http://learning-api.mafengshe.com/news?page=${page}&pageSize=${pageSize}`)
        console.log(tk)
        console.log(yield tk)
    }
}

//执行器
let it = getTen()
it.next().value((err, data)=>{
    console.log(data)
    it.next().value((err, data)=>{
        console.log(data)
        it.next().value((err, data)=>{
            console.log(data)
        })
    })
})

let run = fn =>{
    let it = fn()
    function next (err, data){
        let rs = it.next(data)
        if (rs.done) return
        rs.value(next)
    }
    next()
}
run(getTen)
//-----------------------------------------------------------------------------------------------------------------------------------------
let ajaxGetPromise = (url) => {
    return new Promise((resolve, reject) =>{
        $.ajax({
            url: url,
            dataType: "json"
        }).done(data=>{
            resolve(data)
        }).fail((xhr, status, err)=>{
            reject(err)
        })
    })
}

function* getTen(){
    let [page, pageSize] = [1, 30]
    for (;page<=10;page++){
        let p = ajaxGetPromise(`http://learning-api.mafengshe.com/news?page=${page}&pageSize=${pageSize}`)
        console.log(p)
        console.log(yield p)
    }
}

let it = getTen()
it.next().value.then(data=>{
    console.log(data)
    it.next().value.then(data=>{
        console.log(data)
    })
})

let run = fn =>{
    let it = fn()

    function next(data){
        let rs = it.next(data)
        if (re.done) return
        re.value.then(data=>{
            next(data)
        })
    }
    next()
}
run(getTen)
// ajaxGetCallback("", (err, data)=>{
//     console.log(data)
//     ajaxGetCallback("", (err, data)=>{
//         console.log(data)
//     })
// })

// ajaxGetPromise("").then(data=>{
//     console.log(data)
//     return ajaxGetPromise("")
// }).then(data=>{
//     console.log(data)
// })