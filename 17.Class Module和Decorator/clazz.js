//ES5中的class
// function Point(x, y){
//     this.x = x
//     this.y = y
// }

// var point = new Point(1, 2)
// console.log(point)
// console.log(point.__proto__)

//ES6中的class
class Point2{

    constructor(x, y){
        this._x = x
        this._y = y
    }
    get x(){
        return this._x
    }
    get y(){
        return this._y
    }
    set x(val){
        this._x = val
    }
    set y(val){
        this._y = val
    }
    get norm(){
        return this.distance(0,0)
    }

    *number(){
        yield this.x
        yield this.y
    }
    async number2(){

    }
    distance(x, y){
        return Math.sqrt((this._x-x)*(this._x-x)+(this._y-y)*(this._y-y))
    }

    static xiangxian(point){
        if (point.x > 0 && point.y>0){
            return 1
        }
        else{
            return 0
        }
    }
}
let point2 = new Point2(3, 4)
console.log(point2)
console.log(point2.distance(0, 0))

console.log(Point2.xiangxian(new Point2(5, 5)))