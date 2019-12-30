var readline = require('readline');
var rl = readline.createInterface({
    input : process.stdin, 
    output : process.stdout
});

// Set the number of tries
let tries = 1;

// First set the questions and the answer
let num1 = Math.floor((Math.random()*10)+1);
let num2 = Math.floor((Math.random()*10)+1);
let question = 'What is ' + num1 + '+' + num2 + '?\n';
let answer = num1 + num2;

rl.question(question,                       // Ask the question
(userInput) => {                            // Read in user input               
    if (userInput.trim() == answer) {       // Check if the user input is correct, always use trim when reading in user input to remove trailing whitespace
        rl.close();                         // if correct, close the program
    } else {
        rl.setPrompt('Incorrect response, please try again\n');     // if wrong, reprompt the user
        rl.prompt();
        rl.on('line',(userInput) => {       // Set a line event listener triggered by user input
            tries++;
            if (userInput.trim() == answer) {   
                rl.close();
            } else {
                rl.setPrompt('Your answer of ' + userInput + ' is incorrect\n');    
                rl.prompt();                // This creates a loop/recursion as this prompt will ask for another user input again until it's correct
            }
        })
    }
});

rl.on('close',() => {                       // event listener so that when program is closed, tell user he's correct
    console.log('Your answer is correct!');
    console.log('It took you ' + tries-- + ' attempt(s) to get the correct answer!');
});