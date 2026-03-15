function fetchUserData(){
    return new Promise((ressolve, reject) => {
        setTimeout(() =>{
            ressolve({
                name:"john",
                url: "https://john.com"
            })
        },3000)
    })
}


// note --> await is onyl used when the async is above the function
async function getUserData() {
    try {
        console.log("fetching user data.....");
        const userData = await fetchUserData()
        console.log("User data : ",userData);
        
    } catch (error) {
        console.log("error fetching data",error);
        
    }
}

getUserData();