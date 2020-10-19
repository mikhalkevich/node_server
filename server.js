var http = require('http');
http.createServer(function(req, res){
 res.writeHead(200, {'content-type': 'text/plain'});
 res.write('<h1>');
 res.write('test');
 res.write('</h1>');
 res.write('Hello ');
 res.end('world!');
}).listen(8128); 
console.log('Server running on 8128');