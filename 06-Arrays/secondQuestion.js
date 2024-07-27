function printElement(array, index) {
    if(index < array.length) {
        console.log(array[index]);
    } else {
        console.log('index out of bounds');
    }
}

const example = [222,333,444];
printElement(example, 0);
printElement(example, 3);