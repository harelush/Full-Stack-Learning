const input = require("readline-sync");

function grade(grade) {
    const FAIL_GRADE = 55;
    const GOOD_GRADE = 80;

    if(grade <= FAIL_GRADE) {
        console.log("you failed");
    } else if(grade > FAIL_GRADE && grade <= GOOD_GRADE) {
        console.log("your grade is good");
    } else {
        console.log("your grade is amazing!!");
    }
}

const userGrade = input.questionFloat("What is your grade?: ");
grade(userGrade);