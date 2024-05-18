function operators(){
    const x = 5;
    const y = 7;

    console.log(x == y);
    console.log(x != y);
    console.log(x > y);
    console.log(7 >= 7);
    console.log(x < y);
    console.log(x <= y);

    console.log('--------');

    console.log(x == y && y === y);
    console.log(x > 2 && y > x);
    console.log(x >= y || x > 5);
    console.log(x >= y || x >= 5);
    console.log(!(x >= y) || x > 5);
    
    
}

operators();