// oops--> here we create the object which are instatnces of the classes.

let car = {
    make : "tata",
    model : "harrier",
    year : 2019,
    start : function(){
        return (`${this.make} car got started in ${this.year}`);
    },
}

// console.log(car.start());

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
// console.log(myArray.chinmay())
let myNewArray = [1,2,3,4,5];
// console.log(myNewArray.chinmay())

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
// console.log(myCar.start());
// console.log(myCar.drive());


// Encapsulation
// Abstraction --> hide the implementations details 
class BankAccount{
// by using the '#' it makes the variable will not be able to access outside the scope of the class.
    #balance = 0;

    deposit(amount){
        this.#balance += amount;
        return this.#balance
    }

    getBalance(){
        return `$ ${this.#balance}`
    }

}

let account = new BankAccount();
// console.log(account.getBalance());
// console.log(account.deposit(10000));
// console.log(account.getBalance());


// Polymorphism

class Bird{

    fly(){
        return `bird can fly.......`
    }
}

class Pengiuns{

    fly(){
        return `penguins can't fly.....`
    }
}

let bird = new Bird();
let penguin = new Pengiuns;
// console.log(bird.fly());
// console.log(penguin.fly());

// static method are the method which are directly used by the class itself.
class Calculator{
    static add(a,b){
        return (a+b);
    }
}

// let add = new Calculator();
// console.log(add.add(2,3));

// console.log(`-->`,Calculator.add(2,3));

// Getter and Setter

class Employee{
    #salary;
    constructor(name , salary){
        if (salary<0) {
            throw new Error`invalid number`
        }
        this.name = name
        this.#salary = salary
    }

    get salary(){
        return `you are not supposed to see the salary`
    }

    set salary(value){
        if (value<0) {
            console.error("invalid number")           
        }
        else{
            this._salary = value
        }
    }
}

let emp = new Employee("john",-50000);
// console.log(emp.salary);
// emp.salary = -60000

