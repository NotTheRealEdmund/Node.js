const fs = require('fs');

// Delete a file
fs.unlink('example2.txt', (err) => {    // name of file to delete, err
    if (err) {
        console.log(err);
    } else {
        console.log('Successfully deleted the file');
    }
});