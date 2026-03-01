/*      Loops in javaScript are of 3 types :
                1. For Loop
                2. While Loop
                3. Do-While Loop                */

// write a code which calculate the sum of the numbers from 1 to 5

// Using For loop -->

for_sum = 0;
let i = 0;
for (i; i <= 5; i++) {
  for_sum = for_sum + i;
}
console.log(`the sum using for loop is ${for_sum}`);

// Using while Loop -->

let while_sum = 0;
let j = 0;
while (j <= 5) {
  while_sum = while_sum + j;
  j += 1;
}
console.log(`the sum using while loop is ${while_sum}`);

// using do-while loop -->

let DoWhile_sum = 0;
let k = 0;
do {
  DoWhile_sum = DoWhile_sum + k;
  k += 1;
} while (k <= 5);
console.log(`the sum using do-while loop is ${DoWhile_sum}`);

/*WAP that counts down from 5 to 1 and stores the numbers in an array named countdown */

let countdown = [];
let l = 5;
while (l > 0) {
  countdown.push(l);
  l -= 1;
}
console.log(countdown);

// WAP a program in do while loop that prompts a user to enter the number until they enter "stop".Store each number in an array named Array_Number.

let Array_Number = [];
let num1;

do {
  num1 = prompt(`enter the number ("stop to finish")`);
  if (num1 != "stop") {
    Array_Number.push(num1);
  }
} while (num1 != "stop");
console.log(Array_Number);

// note --> prompts used to enter the value from the user but node js does not support prompt because it is a browser thing just like alert so it is used in the browser.

// == -> do the type conversion itself. example- 5=="5"  (true)
// === -> don't do the type conversion itself. example- 5==="5"  (false)

let array = ["green tean", "black tea", "chai", "oolong tea"];
let selected_tea = [];

for (let i = 0; i < array.length; i++) {
  if (array[i] === "chai") {
    // break
    // break will not go futher to the array for the further traversal we need to use counti
    continue;
  } else {
    selected_tea.push(array[i]);
  }
}
console.log(selected_tea);

/* 
Q. Use a ""for-of" loop to iterate through the array [1,2,3,4,5] and stop when the number `4` is found.
    Store the number before `4` in an array named 'smallNumbers'
*/

let numbers = [1, 2, 3, 4, 5];
let smallNumbers = [];
for (const element of object) {
  if (element === 4) {
    break;
  }
  smallNumbers.push(element);
}
console.log(smallNumbers);

/*
Q. Use a 'for-in' loop to loop through an object containing city populations.
Stop the loop when the population of "Berlin" is
found and store all previous cities' populations in a
new object named 'cityPopulations'.
let citiesPopulation = {
    "London": 8900000,
    "New York": 8400000,
    "Paris": 2200000,
    "Berlin": 3500000
};                                      
*/

let citiesPopulation = {
  London: 8900000,
  "New York": 8400000,
  Paris: 2200000,
  Berlin: 3500000,
};

let cityNewPopulations = {};
for (const city in citiesPopulation) {
  if (city == "Berlin") {
    break;
  }
  cityNewPopulations[city] = citiesPopulation[city];
}
console.log(cityNewPopulations);

/*
Q. Write a forEach loop that iterates through the array
["earl grey", "green tea", "chai", "oolong tea"].
Stop the loop when "chai" is found, and store all
previous tea types in an array named availableTeas.
*/

let arr = ["earl grey", "green tea", "chai", "oolong tea"];
let availableTeas = [];
arr.forEach(function (element) {
  if (element === "chai") {
    return;
  }
  availableTeas.push(element);
});
console.log(availableTeas);

/*
8. Write a forEach loop that iterates through the array ["Berlin", "Tokyo", "Sydney", "Paris"].
Skip "Sydney" and store the other cities in a new
array named 'traveledCities'.
*/

let array1 = ["Berlin", "Tokyo", "Sydney", "Paris"];
let traveledCities = [];

array1.forEach((city) => {
  if (city === "Sydney") {
    return;
  }
  traveledCities.push(city);
});
console.log(traveledCities);

/*
10. Use a for-of loop to iterate through the array ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"]
and stop when the length of the current tea name is greater than 10.
Stores the teas iterated over in an array named 'shortTeas'.
*/

let mytea = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"];
let shortTeas = [];
for (const tea of mytea) {
  if (tea.length > 10) {
    console.log(tea);

    break;
  }
  shortTeas.push(tea);
}
console.log(shortTeas);
