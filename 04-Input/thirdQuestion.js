const input = require("readline-sync");

function area(width, height) {
    return width * height;
}

const x = input.questionFloat("please supply width: ");
const y = input.questionFloat("please supply height: ");

const result = area(x, y);
console.log(result);