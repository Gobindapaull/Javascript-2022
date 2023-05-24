async function FetchPhotos() {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos');
    const result = await response.json();
  
    console.log('Total length of the array: ', result.length); 
    console.log('Index 0 of the Array: ', result[0])
    console.log('url: ', result[0].url)

  }
  
FetchPhotos();
