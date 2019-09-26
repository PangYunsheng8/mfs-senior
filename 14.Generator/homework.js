function* range(start, end){
    let t = Math.floor(start) + 1;
    while (t < Math.ceil(end)){
        yield t
        t++;
    }
    return "gen end"
}

for (let v of range(-1.5, 10.3)){
    console.log(v)
}

function* fib(){
    [prev, curr] = [0, 1]
    while (true){
        [prev, curr] = [curr, prev+curr]
        yield curr
    }
}

var i = 0
for (let v of fib()){
    if (i++ > 10){
        break
    }
    console.log(v)
}

[x, y, z] = fib()
console.log(x)
console.log(y)
console.log(z)