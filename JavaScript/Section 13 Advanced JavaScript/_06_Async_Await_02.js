function fetchPostData(){
    return new Promise((ressolve) => {
        setTimeout(() => {
            ressolve("Post Data Fetched")
        },4000)
    })
}

function fetchCommentData(){
    return new Promise((ressolve) => {
        setTimeout(() => {
            ressolve("Comment Data Fetched")
        },3000)
    })
}

async function getBlogData(){
    try {
        console.log("fetching blog data");
        // const blogData = await fetchPostData()
        // const commentData = await fetchCommentData()
// Promise.all --> fetch all the data at one time 
        const [blogData , commentData] = await Promise.all([
            fetchPostData(),
            fetchCommentData()
        ])
        console.log(blogData);
        console.log(commentData);
        console.log("fetch complete");        
    } 
    catch (error) {
        console.error("Error fetching blog data",error);
    }
}

getBlogData();


// What is the role of the event loop in asynchronous JavaScript? --> To handle the execution of both synchronous and asynchronous tasks by managing the call stack and callback queue 