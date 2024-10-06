async function fetchUserData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const userData = await response.json();

        console.log("User Data:", userData);

    } catch (error) {
        console.error("Error fetching user data:", error);
    }
}

async function fetchUsersData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        console.log(response.ok);

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const usersData = await response.json();
        console.log("Users Data:", usersData);
    } catch (error) {
        console.error("Error fetching user data:", error);
    }
}


function exampleWithThen() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            console.log(response);
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error("Error fetching user data:", error);
        }); 
}

exampleWithThen();
