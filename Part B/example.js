// A function that simulates a delay
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// An async function that uses the delay
async function main() {
    console.log("Waiting for 2 seconds...");
    await delay(2000); // Waits for 2 seconds
    console.log("2 seconds have passed!");
}

// Call the async function
main();
