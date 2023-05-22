async function FetchBRC20() {
    const response = await fetch('https://brc-20.io/api_prices');
    const result = await response.json();
  
    console.log(result.length); 
    console.log(result[0])
  }
  
  FetchBRC20();
