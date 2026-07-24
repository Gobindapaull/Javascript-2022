const paramas = {
    name: "alice",
    age: 27,
    city: "New York"
}

const query = new URLSearchParams(paramas).toString();
console.log(query);

const url = `https://google.com?${query}`;
console.log(url);
