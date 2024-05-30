const input = require("readline-sync");

function averageAge(person1Age, person2Age) {
  const totalAge = person1Age + person2Age;
  const average = totalAge / 2; // באג 1: חישוב לא נכון של ממוצע
  return average;
}

const person1Age = input.question("enter first person age: ");
const person2Age = input.question("enter second person age:  ");

const average = averageAge(person1Age, person2Age);

console.log("age average is:", average);
