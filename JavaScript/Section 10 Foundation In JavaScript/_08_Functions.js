/*
1. Write a function named makeTea that takes one
parameter, typeOfTea, and returns a string like
"Making green tea" when called with "green tea".
Store the result in a variable named teaOrder.
*/

function makeTea(typeofTea){
    return (`Making ${typeofTea}`);
}
let great = makeTea("lemon tea");
console.log(great);

/* 2. Create a function named 'orderTea that takes one parameter, teaType'. Inside this function, create another function named confirmOrder that returns a message like "Order confirmed for chai". Call confirmOrder from within orderTea and return the result. */

function orderTea(teaTypes){
    // let grant = confirmOrder(teaTypes)
    function confirmOrder(teaTypes){
        return (`order confirm for ${teaTypes}`);
    }
    // return grant;
    return (confirmOrder(teaTypes))
}
console.log(orderTea("masala chai"));


/* 3. Write an arrow function named 'calculateTotal that takes two parameters: price and quantity. The function should return the total cost by multiplying the 'price' and 'quantity'. Store the result in a variable named totalCost. */

// const calculateTotal = (price, quantity) =>{
//     return(price*quantity);
// }
const calculateTotal = (price, quantity) => (price*quantity);

let totalCost = calculateTotal(5,3);
console.log(totalCost);

// this --> it is used for the context as this is the context


// --> Higher Order Functions -> anything which take a parameter or returna a function back that is the example of the Higher Order Function. Example For-each loop

/* 4. Write a function named 'processTeaorder that takes another function, makeTea, as a parameter and calls it with the argument "earl grey". Return the result of calling makeTea'. */
function makeTea(typeOfTea){
    return `makeTea : ${typeOfTea}`
}

function processTeaorder(teaFunction){
    return teaFunction('earl grey')
}

let order = processTeaorder(makeTea)
console.log(order);


/* 5. Write a function named 'createTeaMaker that returns another function. The returned function should take one parameter, teaType', and return a message like "Making green tea". Store the returned function in a variable named teaMaker and call it with "green tea".*/

function createTeaMaker(){
    return function(teaType){
        return `Making ${teaType}`
    }
}

let teaMaker = createTeaMaker();
let result = teaMaker("green tea")
console.log(result);
