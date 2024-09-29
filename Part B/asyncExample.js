async function fetchUserData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
      
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      
      const userData = await response.json();
      
      console.log("User Data:", userData);
      
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }
  
  fetchUserData();
  
  console.log("Fetch request sent, waiting for response...");
  