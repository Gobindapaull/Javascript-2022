// await only works inside async functions

async function getUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    // check if response is OK
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const users = await response.json();
    console.log("Users:", users);

    // print names only
    users.forEach(user => {
      console.log(user.name);
    });

  } catch (error) {
    console.error("Error:", error);
  }
}

getUsers();
