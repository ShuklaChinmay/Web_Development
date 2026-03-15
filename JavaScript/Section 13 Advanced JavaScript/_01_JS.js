// Asynchronous 

function sayHello() { 
    console.log("I would like to say Hello");
}

setTimeout(()=>{
    sayHello();
}, 4000);       //in millisec means 4000 --> 4 seconds

console.log("hello advance js");

for (let index=0 ; index < 10; index++){
    console.log(index);
}