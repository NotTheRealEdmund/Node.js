const fs = require('fs');

fs.readdir('example', (err, files) => {         //the name of the directory/folder, callback function with two arguments, err and 
                                                //files, which is an array with the names of the files in the folder
    if (err) {
        console.log(err);
    } else {
        for (let file of files) {       //loop through the array of files, delete one by one, doesn't matter if there's contents 
            fs.unlink('./example/'+file, (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log('Successfully deleted file');
                }
            });
        }
    }
});