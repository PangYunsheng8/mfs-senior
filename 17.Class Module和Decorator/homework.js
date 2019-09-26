class Animal{
    constructor(name){
        this.name = name;
    }
    eat(){
        console.log(this.name + " can eat!");
    }
    sleep(){
        console.log(this.name + " can sleep!");
    }
}

class Dog extends Animal{
    constructor(name, age){
        super(name);
        this.age = age;
    }
    bark(){
        console.log(this.name + " can bark!");
    }
}

class Cat extends Animal{
    constructor(name, age){
        super(name);
        this.age = age;
    }
    bark(){
        console.log(this.name + " can bark!");
    }
}

class Human extends Animal{
    constructor(name, age){
        super(name);
        this.age = age;
    }
    speak(){
        console.log(this.name + " can bark!");
    }
}


let animal = new Animal("animal");
let dog = new Dog("dog");
let cat = new Cat("cat");
let human = new Human("human");

animal.eat();
animal.sleep();

dog.eat();
dog.sleep();
dog.bark();

cat.eat();
cat.sleep();
cat.bark();

human.eat();
human.sleep();
human.speak();