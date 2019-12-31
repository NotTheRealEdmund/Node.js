const fs = require('fs');
const readStream = fs.createReadStream('./example.txt','utf8');     // This is going to return a readable stream
const writeStream = fs.createWriteStream('example2.txt');           // This is going to create a writable stream

readStream.pipe(writeStream);       // This is the shortcut using pipe, no need for event listeners