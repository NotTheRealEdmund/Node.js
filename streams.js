const fs = require('fs');
const readStream = fs.createReadStream('./example.txt','utf8');    //this is going to return a readable stream
const writeStream = fs.createWriteStream('example2.txt');          //this is going to create a writable stream

readStream.on('data', (chunk) => {  //listen for the 'data' event, data will be invoked everytime you read in a chunk of words          
    writeStream.write(chunk);                     
});