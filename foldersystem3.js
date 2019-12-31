const fs = require('fs');

fs.unlink('./tutorial/example.txt', (err) => {        //include the full path to file in folder, err
    if (err) {
        console.log(err);
    } else {
        console.log('Successfully deleted the file in the folder');
        fs.rmdir('tutorial', (err) => {     //name of folder you want to delete, must not already exist, err
            if (err) {                      //rmdir only works on empty directories/folders so you have to delete the file first
                console.log(err);
            } else {
                console.log('Successfully deleted the folder');
            }
        });
    }
});