const addValues = (value1, value2) => value1 + value2;

const checkEven = (number) => {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
};

const sayHello = (personName) => {
    let greetingMessage = "Hello, " + personName + "!";
    console.log(greetingMessage);
};

const findSquare = (num) => num * num;

const extractEvenNumbers = (numbersArray) => {
    return numbersArray.filter(n => {
        if (n % 2 === 0) {
            return true;
        } else {
            return false;
        }
    });
};
