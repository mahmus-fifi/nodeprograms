//splitting a string from the html request 
var http = require('http');
var url = require('url');
//create the server 
http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type':'text/html'});
    var q  = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;
    res.end(txt);
}).listen(8080);

//use as local host
//http://localhost:8080/?year=2022&month=August



