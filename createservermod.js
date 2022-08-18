//using create server to communicate with our server
var http = require('http');

//creating a server object
http.createServer(function (req, res){
    res.write('hello mama'); // this is writing a response to the client
    res.end(); // end the response
}).listen(8080);
//the server object listens to port 8080

/**
 * function in http.createServer() will 
 * be executed when someone tried to 
 * access port 8080
 */