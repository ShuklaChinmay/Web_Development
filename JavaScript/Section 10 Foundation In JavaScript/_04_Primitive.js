let balance = 120
let anotherBalance = new Number(120)

console.log(balance);
console.log(anotherBalance.valueOf());

console.log(typeof(balance));
console.log(typeof(anotherBalance));

// every single primitive can be converted into advanced datatypes.
// in javascript everything is an object 

let firstname = undefined;  // yet not defined
let middlename;
let lastname = null;  // value is empty
console.log(firstname);
console.log(middlename);
console.log(lastname);


let myStringOne = "hello"
let username = "chinmay"

let newName = myStringOne + " " + username
console.log(newName);

let message = `Hello ${username} !`     // this is known as string interpolation

let sm1 = Symbol()
let sm2 = Symbol("chinmay")
let sm3 = Symbol()
console.log(sm1);
console.log(sm2);
console.log(sm2==sm3);
console.log(sm1==sm3);

// the whole idea of the Symbol is to gurantee the uniqueness no matter it is named or not