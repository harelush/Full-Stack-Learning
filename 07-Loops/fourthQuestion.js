const input = require("readline-sync");

function arrayData(){
    const array = [1234,7456,8520,3694,1231];

    for(let index = 0; index < array.length; index = index + 3){
        console.log(array[index]);
    }
}

arrayData();