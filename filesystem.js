const fs = require('fs');

// Create a file
fs.writeFile('example.txt', "This is an example", (err) => {    // name of file, what you want to write in it, 
                                                                // and a callback function in case anything goes wrong
    if (err) {
        console.log(err);
    } else {
        console.log('File successfully created');
        // Read a file
        fs.readFile('example.txt', 'utf8', (err, file) => {     //name of file, encoding type, 
                                                                // and a callback function with err and file name as arguments
            if (err) {
                console.log(err);
            } else {
                console.log(file);     //print out content in file
            }
        });
    }
});     