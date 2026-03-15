// Prototypal Inheritance --> Inheritence done in the prototype.

function Person(name){
    this.name = name
}

Person.prototype.greet = function(){
    console.log(`Hello my name is ${this.name}`);   
}

let chinmay = new Person("chinmay")
chinmay.greet()
