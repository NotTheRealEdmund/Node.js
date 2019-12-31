const fs = require('fs');
const zlib = require('zlib');   //both compressing and uncompressing files require the zlib module
const gunzip = zlib.createGunzip(); //in this case, gzip takes in input from readstream and uncompresses it

const readStream = fs.createReadStream('./example2.txt.gz');    //take note the change in file name due to compression 
const writeStream = fs.createWriteStream('uncompressed.txt');   //take note the change in file name due to uncompression 

readStream.pipe(gunzip).pipe(writeStream);              //you can see your uncompressed txt file in your folder