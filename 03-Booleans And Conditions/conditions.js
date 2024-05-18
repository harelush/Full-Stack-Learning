const x = 8;
const y = 7;

if(x >= y || x == 5) {
    console.log("this is true");
} else {
    console.log("this is false");
}

if(x > y){
    console.log("x is bigger");
} else {
    if(x == y) {
        console.log("x is equal to y");
    } else {
        console.log("x is smaller than y")
    }
}

if(x > y) {
    console.log("x is bigger");
} else if(x < y) {
    console.log("x is smaller than y")
} else {
    console.log("x is equal to y");
}