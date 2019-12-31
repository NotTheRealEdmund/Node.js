const http = require('http');

const server = http.createServer((req,res) => {     //create a http server object with a request object and response object
    if (req.url === '/') {                          //only return proper response object if request is the root domain
        res.write('Hello world from nodejs');       //prepare the proper response object
        res.end();                                  //to actually send the response
    } else {
        res.write('Using some other domain');       //for example typing localhost:3000/banana will show 'Using some other domain'
        res.end();
    }
});

server.listen('3000');      //localhost:3000 brings you to a webpage showing the text 'Hello world from nodejs'