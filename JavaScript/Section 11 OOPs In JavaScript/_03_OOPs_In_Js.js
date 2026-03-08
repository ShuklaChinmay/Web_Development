// oops--> here we create the object which are instatnces of the classes.

let car = {
    make : "tata",
    model : "harrier",
    year : 2019,
    start : function(){
        return (`${this.make} car got started in ${this.year}`);
    },
}

console.log(car.start());

// by using constructor we can create as many copies of the object that we want.

function Animal(species){
    this.species = species
}

// prototype chain
Animal.prototype.sound = function(){
    return (`${this.species} make a sound`)
}

Array.prototype.chinmay = function(){
    return `Custom method ${this}`
}

let myArray = [1,2,3];
console.log(myArray.chinmay())
let myNewArray = [1,2,3,4,5];
console.log(myNewArray.chinmay())

class Vehicle{
    constructor(make,model){
        this.make = make
        this.model = model
    }
    start(){
        return `${this.model} is a car from the ${this.make}`
    }
}

class Car extends Vehicle{
    drive(){
        return `${this.model}: this is a petrol variant`
    }
}


let myCar = new Car("tata" , "harrier")
console.log(myCar.start());
console.log(myCar.drive());