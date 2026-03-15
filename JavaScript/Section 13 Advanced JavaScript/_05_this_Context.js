const person = { 
    name: "John", 
    greet() { 
        console.log(`Hi, I am ${this.name}`); 
    }
}

person.greet();


// now as the function directly refers to another variable the context of the name is lost
const greetFunction = person.greet 
greetFunction()

// for the context we need to bind the context and for that

const boundGreet = person.greet.bind({name:"Sam"})
boundGreet()

// bind , call and apply