function fetchData(){
    return new Promise((ressolve , reject)=>{
        setTimeout(()=>{
            let success = true
            if(success){
                ressolve("data fetched successfully")
            } 
            else{
                reject("Error fetching data")
            }
        },3000)
    })
}

// let response = fetchData()
// console.log(response);

fetchData()
    .then((data) => {
        console.log(data)
        return data.toUpperCase()
    })
    .then((value) =>{
        console.log(value);
    })
    .catch((error) => console.error(error))