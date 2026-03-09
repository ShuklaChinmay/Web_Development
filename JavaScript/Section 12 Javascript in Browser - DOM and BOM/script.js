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