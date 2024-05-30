const input = require("readline-sync");

const first = input.questionInt("please enter first number: ");
const second = input.questionInt("please enter second number: ");
const third = input.questionFloat("please enter third number: ");


console.log("the result is:");
console.log(first + second + third);
