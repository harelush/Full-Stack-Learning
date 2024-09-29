function addValues(value1, value2) {
    return value1 + value2;
}

function checkEven(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function sayHello(personName) {
    const greetingMessage = "Hello, " + personName + "!";
    console.log(greetingMessage);
}

function findSquare(num) {
    return num * num;
}

function extractEvenNumbers(numbersArray) {
    return numbersArray.filter(function (n) {
        if (n % 2 === 0) {
            return true;
        } else {
            return false;
        }
    });
}
