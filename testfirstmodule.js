// creating  hello world in node.js
var http = require('http');
var dt = require("./_02_firstmodule");
http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("current time and date:" +dt.myDateTime());
    res.end();
}).listen(8080);
