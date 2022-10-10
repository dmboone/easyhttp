function easyHTTP(){
    this.http = new XMLHttpRequest();
}

// Make an HTTP GET Request
easyHTTP.prototype.get = function(url, callback){
    this.http.open('GET', url, true);
    let self = this; // 
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

// Make an HTTP PUT Request

// Make an HTTP DELETE Request