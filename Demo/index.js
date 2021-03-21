var fileSystem = require('fs');
var http  = require('http');

var server = http.createServer((request,response)=>{

    if(http.url = '/'){
        fileSystem.readFile('home.html', (error, data)=>{
          response.writeHead(200, {'Content-Type' : 'text/html'});
          response.write(data);
          response.end();
      });  
    }
    

})
server.listen(4040);
console.log("Server Run Successful");