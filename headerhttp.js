// displaying response from the server as http 
var  http = require('http');
//create server 
http.createServer(function (req, res){
    res.writeHead(200, {'Content-type':'text/html'}); //200 means all is ok 
    res.write('Hello mimi');
    res.end();

}).listen(8080);