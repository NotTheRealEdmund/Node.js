const fs = require('fs');
const zlib = require('zlib');   //zlib is a module that compresses files
const gzip = zlib.createGzip(); //gzip is a transform stream that takes the input from the readstream and manipulates the data
                                //into something else, in this case, it will compress the data.

const readStream = fs.createReadStream('./example.txt','utf8');    
const writeStream = fs.createWriteStream('example2.txt.gz');    //take note the change in file name due to compression    

readStream.pipe(gzip).pipe(writeStream);    //pipe data in chunks from readstream to gzip,then gzip compresses it,then pipes the 
                                            //compressed data out to the writestream
                                            //you will end up seeing a zip file (*.gz) in your folder