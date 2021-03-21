const http = require('http');
const fs = require('fs');

var server = http.createServer((request, response)=>{
    if (request.url == '/') {
       let data =  fs.readFileSync('home.html','utf8');
       response.end(data);
    }
    else if (request.url == '/About') {
        let data =  fs.readFileSync('about.html','utf8');
        response.end(data);
    }
    else if (request.url == '/Terms') {
        let data =  fs.readFileSync('terms.html','utf8');
        response.end(data);
    }
    else if (request.url == '/Contact') {
        let data =  fs.readFileSync('contact.html','utf8');
        response.end(data);
    }
    
});
server.listen(5050);
console.log("Server run succesfull");