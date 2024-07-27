function arrayMin(){
    const array = [35,77,12,6,99];

    let currentMin = array[0];
    for (let index = 1; index < array.length; index++) {
        if (array[index] < currentMin) {
            currentMin = array[index];
        }
    }

    console.log(currentMin);
}


arrayMin();