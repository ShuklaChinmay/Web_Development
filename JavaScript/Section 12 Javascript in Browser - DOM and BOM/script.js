// console.log("hello from JavaScript ");
// console.log(document)


// alert("connected!")

let hold = document.getElementById("chagneTextButton")
hold.addEventListener('click', function(){
    let paragraph = document.getElementById("myParagraph")
    console.log(paragraph.textContent);
    paragraph.textContent = "the paragraph is changed"
    console.log(paragraph.textContent);
    console.log(this);
})

// whenever we use the arrow function the context is always pointing towards the global this while on the other hand it points towards the current context who is calling it.

// example 2
let hold1 = document.getElementById("highlightFirstCity")
hold1.addEventListener('click',function(){
    let cities = document.getElementById("citiesList")
    cities.firstElementChild.classList.add("highlight")
})

// example 3

let hold3 = document.getElementById("changeOrder")
hold3.addEventListener('click',function(){
    let order = document.getElementById("coffeeType")
    order.textContent = "Espresso"
})

// example 4
let hold4 = document.getElementById("addNewItem")
hold4.addEventListener('click',function(){
    let add = prompt("enter the item = ")
    let newItem = document.createElement("li")
    newItem.textContent = add
    document.getElementById("shoppingList").appendChild(newItem);
})

// example 5
let hold5 = document.getElementById("removeLast Task")
hold5.addEventListener('click',function(){
    let task = document.getElementById("taskList")
    task.lastElementChild.remove();
})

// example 6
document.getElementById("clickButton").addEventListener("click",function(){
        alert("hello")
})

// example 7
document.getElementById("teaList").addEventListener("click",function(event){
    if (event.target && event.target.matches(".teaItem")) {
        alert("you selected : " + event.target.textContent);
    }
}) 


// example 8
document.getElementById("feedbackForm").addEventListener("submit",function(event){
    // alert("submitted")
    event.preventDefault();
    let feedback = document.getElementById("feedbackForm")
    console.log(feedback)
    let feedback1 = document.getElementById("feedbackInput").value;
    document.getElementById("feedbackDisplay").textContent = `Feedback is ${feedback1}`
})

// example 9
document.addEventListener('DOMContentLoaded',function(){
    document.getElementById("domStatus").textContent = "DOM Fully Loaded"
})

// example 10
document.getElementById("toggleHighlight").addEventListener("click",function(){
    let description = document.getElementById("descriptionText");
    // description.classList.add('highlight');
    description.classList.toggle('highlight');
})

// toggle --> of the class already applied to it, it will remove the class from it and if not it will apply to it.

// node list is not an array it can convert into an array and then we can perform the arrays function but it is not an array