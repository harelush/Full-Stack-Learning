function verifyAge(age) {
    const ALLOWED_AGE = 18;

    if(age >= ALLOWED_AGE) {
        console.log("enter please");
    } else {
        console.log("not allowed, please come back in few years");
    }
}

verifyAge(18);