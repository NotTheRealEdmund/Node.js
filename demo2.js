const http = require('http');
const fs = require('fs');

// Create a web server at 'localhost:3000' and return a html webpage response object
http.createServer((req,res) => {                    
    const readStream = fs.createReadStream('./static/index.html');
    res.writeHead(200, {'Content-type':'text/html'});
    readStream.pipe(res);
}).listen(3000);

// Create a web server at 'localhost:3001' and return a storage json file response object
http.createServer((req,res) => {                    
    const readStream = fs.createReadStream('./static/storage.json');
    res.writeHead(200, {'Content-type':'application/json'});
    readStream.pipe(res);
}).listen(3001);

// Create a web server at 'localhost:3002' and return an image png file response object
http.createServer((req,res) => {                    
    const readStream = fs.createReadStream('./static/image.png'); 
    res.writeHead(200, {'Content-type':'image/png'});
    readStream.pipe(res);   
}).listen(3002);