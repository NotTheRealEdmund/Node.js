const fs = require('fs');

// Rename a file 
fs.rename('example.txt', 'example2.txt', (err) => {     // old file name, new file name, err
    if (err) {
        console.log(err);
    } else {
        console.log('Successfully renamed the file');
    }
});

//Append data to file
fs.appendFile('example2.txt', 'Some data being appended', (err) => {    // file name, data to add to the end of file, err
    if (err) {
        console.log(err);
    } else {
        console.log('Successfully appended data to file');
    }
});