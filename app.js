const http = new easyHTTP;

// Get Posts
http.get('https://jsonplaceholder.typicode.com/posts', 
function(err, response){ // callback to log results once they have actually been retrieved from the get request
    if(err){ // checks for error
        console.log(err);
    } else{
        console.log(response);
    }
});