function avg(firstGrade, secondGrade, thirdGrade, fourthGrade) {
    const sum = firstGrade + secondGrade + thirdGrade + fourthGrade;
    return sum / 4.0;
}

console.log(avg(100.0,99.0,98.5,100.0));

const result = avg(100.0,99.0,98.5,100.0);
console.log(result);