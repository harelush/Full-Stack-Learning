function arrayMax(){
    const array = [35,77,12,6,99];

    let currentMax = array[0];
    for (let index = 1; index < array.length; index++) {
        if (array[index] > currentMax) {
            currentMax = array[index];
        }
    }

    console.log(currentMax);
}

arrayMax();