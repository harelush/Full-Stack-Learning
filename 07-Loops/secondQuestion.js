const input = require("readline-sync");

function repeat(amount){
    
    for(let index = 0; index < amount; index++){
        let userInput = input.questionInt("Enter a number: ");
        console.log(userInput);
    }
}

const loops = input.questionInt("Enter the amount of times you want to repeat: ");
repeat(loops);