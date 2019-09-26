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

async function getTen() {
    let [page, pageSize] = [1, 30]
    for (;page<=10;page++){
        let p = ajaxGetPromise(`http://learning-api.mafengshe.com/news?page=${page}&pageSize=${pageSize}`)
        console.log(p)
        console.log(await p)
    }
    return "end"
}

getTen().then(data=>{   //genTen()返回的是Promise
    console.log(data)  //end
})