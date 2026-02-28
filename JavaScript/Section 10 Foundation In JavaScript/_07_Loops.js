/*      Loops in javaScript are of 3 types :
                1. For Loop
                2. While Loop
                3. Do-While Loop                */

// write a code which calculate the sum of the numbers from 1 to 5

// Using For loop -->

for_sum = 0
let i = 0
for (i; i <=5; i++) {
    for_sum = for_sum + i
}
console.log(`the sum using for loop is ${for_sum}`);

// Using while Loop --> 

let while_sum = 0
let j = 0
while (j<=5) {
    while_sum = while_sum + j
    j+=1;
}
console.log(`the sum using while loop is ${while_sum}`);

// using do-while loop -->

let DoWhile_sum = 0
let k = 0
do {
    DoWhile_sum = DoWhile_sum + k
    k+=1
} while (k<=5);
console.log(`the sum using do-while loop is ${DoWhile_sum}`);