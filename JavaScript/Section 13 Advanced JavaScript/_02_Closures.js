// Closures --> Closure is a function which remember the environment in which they are created.

function outer(){
    let counter = 8
    return function(){
        counter++
        return counter 
    }
}

let outerValue = outer()
console.log(outerValue());
 