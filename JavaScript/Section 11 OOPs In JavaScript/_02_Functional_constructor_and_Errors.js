function greet(name){
    console.log(`hello ${name}`);
}

// constructor --> the first letter of the name of the Function should be capital to define it is a constructor
function Person(name,age){
    this.name = name
    this.age = age
    console.log(`hello ${this.name}`);
    
}

function Car(company , model){
    this.company = company;
    this.model = model;
}

let Mycar = new Car("suzuki" , "swift");
console.log(Mycar);

let Mycar1 = new Car("TATA" , "Harrier");
console.log(Mycar1);

// new --> refering to the newly created object.

function Laptop(company){
    this.company = company;
    this.discribe = function(){
        return (`this is the laptop of the brand ${this.company}`)
    };
    
}

let mylaptop = new Laptop("Hp");
console.log(mylaptop);
console.log(mylaptop.discribe());


function Animal(species){
    this.species = species
}

Animal.prototype.sound = function(){
    return (`${this.species} make a sound`)
}

let Cat = new Animal("Cat");
console.log(Cat);
console.log(Cat.sound());

function Drink(name){
    if (!new.target) {
        throw new Error("drink must be called with the new keyword ")
    }
    this.name = name
}
let myDrink = new Drink("Coffee");
let myDrink1 = Drink("tea");