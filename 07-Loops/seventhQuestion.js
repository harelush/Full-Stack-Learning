function findInArray(array, value){
    for (let index = 0; index < array.length; index++){
        if (array[index] === value){
            return true;
        }
    }

    return false;
}

console.log(findInArray([1,2,3], 2));

const answer = findInArray([1,2,3], 2);
console.log(answer);