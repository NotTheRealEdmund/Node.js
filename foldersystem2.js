const fs = require('fs');

fs.mkdir('tutorial', (err) => {         //name of folder you want to create, err
    if (err) {
        console.log(err);
    } else {
        console.log('folder successfully created');
        fs.writeFile('./tutorial/example.txt', '123', (err) => {    //include the full path from current directory
                                                                    //inside the tutorial folder create example.txt and
                                                                    //add 123 to txt file
            if (err) {
                console.log(err);
            } else {
                console.log('Successfully created file in folder with data');
            }
        });
    }
});