const input = require("readline-sync");

function repeat(){
    const AMOUNT = 10;
    
    for(let index = 0; index < AMOUNT; index++){
        let userInput = input.questionInt("Enter a number: ");
        console.log(userInput);
    }
}

repeat();