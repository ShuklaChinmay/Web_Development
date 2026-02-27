// check whether which number is greater.

let num1 = 45
let num2 = 363
if(num1>num2){
    console.log(`${num1} is greater than ${num2}`);
}else{
    console.log(`${num1} is not greater than ${num2}`);
}

console.log("i am a regular bottom code");

// check whether if a string is equal to another string:

let username1= "hello"
let username2 = "Hello"

if (username1 == username2) {
    console.log(`the string ${username1} is same as the string ${username2}`);
} else {
    console.log(`the string ${username1} is not same as the string ${username2}`);
}

// Checking whether the variable is a number or not

let num3 = "45"
if (typeof(num3) == "number") {
    console.log("it is a number");
    
} else {
    console.log("not a number");
    
}

// checks if the array is empty or not.

let item = [1]
if (Boolean(item.length)) {
    console.log("the array is not empty");
} else {
    console.log("the array is empty");
}

/* 
Q. You have an array named `teaTypes` containing `"herbal tea"`, `"white tea"`, and `"masala chai"`. 
   Change the second element of the array to `"jasmine tea"`.
*/

let teaTypes = ["herbal tea", "white tea","masala chai"]
console.log(teaTypes);
teaTypes[1]="jasmine tea"
console.log(teaTypes);


let popularTeas = ["green tea", "oolong tea", "chai"];
let softCopyTeas = popularTeas;
// Note --> Pop funtion remove and return the last element
// popularTeas.pop();
softCopyTeas.pop();
console.log(softCopyTeas);
console.log(popularTeas);


/* 
Q. Declare an array named `citiesVisited` containing `"Mumbai"` and `"Sydney"`. 
   Add `"Berlin"` to the array using the `push` method.
*/

let citiesVisited = ["Mumbai", "Sydney"];
// citiesVisited[citiesVisited.length] = "Berlin"
citiesVisited.push("Berlin");
console.log(citiesVisited);


/* 
Q. You have an array named `topCities` containing `"Berlin"`, `"Singapore"`, and `"New York"`. 
   Create a hard copy of this array named `hardCopyCities`.
*/

let topCities = ["Berlin", "Singapore", "New York"];
let hardCopyCities = [...topCities];
// let hardCopyCities = topCities.slice();
topCities.pop();
// console.log(hardCopyCities);

// concatination -> to merge the 2 differnt arrays into a single array
// includes --> to check the element in an array.
// shift --> removees the first element from the array and shift the other remaining element to the forward position 
// unshift --> add the elements to the first position and shift the other elements bakcward.