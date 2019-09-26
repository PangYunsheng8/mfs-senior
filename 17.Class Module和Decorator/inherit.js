class Point{
    constructor(x, y){
        this._x = x
        this._y = y
    }

    norm(){
        return Math.sqrt(this._x*this._x+this._y*this._y)
    }
}

class Point3D extends Point{
    constructor(x, y, z){
        super(x, y);
        this._z = z
    }

    norm(){
        return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z)
    }
}

let p2d = new Point(3, 4)
let p3d = new Point3D(1, 2, 3)
console.log(p3d)
console.log(p2d.norm())
console.log(p3d.norm())