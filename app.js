const http = new easyHTTP;

// // Get Posts
// http.get('https://jsonplaceholder.typicode.com/posts', 
// function(err, response){ // callback to log results once they have actually been retrieved from the get request
//     if(err){ // checks for error
//         console.log(err);
//     } else{
//         console.log(response);
//     }
// });

// // Get Single Post
// http.get('https://jsonplaceholder.typicode.com/posts/1', // just edit the url 
// function(err, response){
//     if(err){
//         console.log(err);
//     } else{
//         console.log(response);
//     }
// });

// Create Data
const data = {
    title: 'Custom Post',
    body: 'This is a custom post',
};

// // Create Post
// http.post('https://jsonplaceholder.typicode.com/posts',
// data, function(err, post){
//     if(err){
//         console.log(err);
//     } else{
//         console.log(post);
//     }
// });

// Update Post
// http.put('https://jsonplaceholder.typicode.com/posts/5', 
// data, function(err, post){
//     if(err){
//         console.log(err);
//     } else{
//         console.log(post);
//     }
// });

// Delete Posts
// http.delete('https://jsonplaceholder.typicode.com/posts/1', 
// function(err, response){
//     if(err){
//         console.log(err);
//     } else{
//         console.log(response);
//     }
// });