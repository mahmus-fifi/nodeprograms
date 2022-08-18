// creating  hello world in node.js
var http = require('http');

http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('hello mama Dinosaur!');
    res.end("node is working super fine");
}).listen(8080);
