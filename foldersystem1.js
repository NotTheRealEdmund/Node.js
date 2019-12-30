const fs = require('fs');

// Create a folder
fs.mkdir('tutorial', (err) => {             //name of folder to create, err
    if (err) {
        console.log(err);
    } else {
        console.log('folder successfully created');
        // Delete a folder
        fs.rmdir('tutorial', (err) => {     //name of folder to delete, must not already exist before, err
            if (err) {                      //rmdir only works on empty directories/folders
                console.log(err);
            } else {
                console.log('Successfully deleted the folder');
            }
        });
    }
});