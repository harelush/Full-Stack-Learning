const input = require("readline-sync");

const age = input.questionFloat("How old are you?");

const MIN_AGE = 18;

if(age < MIN_AGE) {
    console.log("Wow! sorry... go away...");
} else {
    console.log("Welcome! Please enter");
}