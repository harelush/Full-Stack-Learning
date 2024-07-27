const input = require("readline-sync");

function repeatUntil(){
    const END_OF_INPUT = 999;

    let userInput = input.questionInt("Enter a number or 999 to stop: ");

    while(userInput !== END_OF_INPUT){
        console.log("we entered again");
        console.log("The input is " + userInput);

        userInput = input.questionInt("Enter a number or 999 to stop: ");
    }
}

repeatUntil();