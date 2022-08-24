//working with file systems 
//nodes file system module will allow us work with files
//fs can read, delete, update and rename files
var http = require('http');
var fs = require('fs');
http.createServer(function(req,res){
    fs.readFile('index.html',
    function(err, data){
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080);
