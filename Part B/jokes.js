async function tellAJoke(){
    try {
        const response = await fetch('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit');
        
        if(!response.ok){
            throw new Error("Network response was not ok");
        }

        const joke = await response.json();

        console.log("The question is:", joke.setup);
        console.log("The answer is:", joke.delivery);

    } catch (error) {
        console.error(error);
    }
}

tellAJoke();