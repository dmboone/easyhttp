function easyHTTP(){
    this.http = new XMLHttpRequest();
}

// Make an HTTP GET Request
easyHTTP.prototype.get = function(url, callback){
    this.http.open('GET', url, true);
    let self = this; // this is needed in es5; in es6 we use arrow functions instead to surpass this
    
    this.http.onload = function(){
        if(self.http.status === 200){
            callback(null, self.http.responseText); // need to use a callback rather than just 
                                                    // immediately returning to make sure that the data has
                                                    // been added before you return the results.
                                                    // first parameter is in case there's an error                                    
        } else {
            callback('Error: ' + self.http.status); // if not success status returns whatever the http status is
        }                                    
    } 

    this.http.send();
}

// Make an HTTP POST Request
easyHTTP.prototype.post = function(url, data, callback){
    this.http.open('POST', url, true);
    this.http.setRequestHeader('Content-type', 'application/json'); // sets content type
    let self = this;

    this.http.onload = function(){
        callback(null, self.http.responseText); // the response text should be the new post that we add                                  
    }

    this.http.send(JSON.stringify(data)); // need to stringify the data
}

// Make an HTTP PUT Request
easyHTTP.prototype.put = function(url, data, callback){
    this.http.open('PUT', url, true);
    this.http.setRequestHeader('Content-type', 'application/json'); // sets content type
    let self = this;

    this.http.onload = function(){
        callback(null, self.http.responseText); // the response text should be the new post that we add                                  
    }

    this.http.send(JSON.stringify(data)); // need to stringify the data
}

// Make an HTTP DELETE Request
easyHTTP.prototype.delete = function(url, callback){
    this.http.open('DELETE', url, true);
    let self = this;
    
    this.http.onload = function(){
        if(self.http.status === 200){
            callback(null, 'Post Deleted');                                                                           
        } else {
            callback('Error: ' + self.http.status);
        }                                    
    } 

    this.http.send();
}