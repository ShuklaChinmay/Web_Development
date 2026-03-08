//the purpose of a prototype in JavaScript is To create new variables To define properties and methods that can be shared by all instances of an object

let computer = { cpu: 12}
let hp = {screen: "HD"}
let JohnHardware = {}

// console.log(computer);
// console.log(`computer`,computer.__proto__);

// note --> this ( __ ) double underscore is called Dunder prototype used to access the all the protoype but works only in the browser not on the console part.

// let myname = "Chinmay     "
// console.log(myname);
// console.log(myname.length);
// console.log(myname.truelength);


let genericCar = {
    tyres : 4,
    engine : "electric"
}
let tesla = {
    driver : "AI" ,
    __proto__ : genericCar
}

// console.log(genericCar);
// console.log(tesla);
// console.log(`tesla`, tesla.__proto__);
// console.log("-->",tesla.tyres);



let genericBike = {
    tyres : 2,
    engine1 : "electric",
    engine2 : "petrol",
}
let Hero = {
    driver : "AI" ,
    mileage : 35
}

// Object.setPrototypeOf set the methods of the parent oject into the child object wrok on the object not on function
Object.setPrototypeOf(Hero , genericBike)
console.log(Hero);
// console.log(Hero.engine1);
// Object.getPrototypeOf get the methods of the parent oject oly in the child object 
console.log(`Hero`,Object.getPrototypeOf(Hero));


