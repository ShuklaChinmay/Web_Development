//  Object -->

let username = {
    firstname:"chinmay",
    "Phone Number" :12345678910 ,
    isLoggedIn:true,
}


// console.log(username);
// console.log(typeof(username));
// console.log(username.firstname);
console.log(username["Phone Number"]);


const username1 = {
    firstname:"chinmay",
    isLoggedIn:true,
}

// here we cannot change the memory references but we can change the value of the variable

username1.lastname = "shukla"

console.log(username1);
console.log(username1.firstname);
console.log(username1.lastname);

// example -->

let date = new Date();
console.log(date);
console.log(date.getDate());

// Array -->

let anotherUser = [1,"chinmay",true]
console.log(anotherUser);
console.log(anotherUser[1]);

// Note --> Don't rely on the javaScript for the implicit conversion

let isValue = true
console.log(isValue + 1);
console.log(isValue);
console.log(Number(isValue));

let value = "2abc"
console.log(Number(value));

//  NaN --> Not a Number

console.log(typeof(Number(value)));
// the datatype of NaN is Number


