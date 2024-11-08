async function getData() {
    const url = "https://api.raydium.io/v2/main/pairs";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
    //   console.log(json);

      for (let i = 0; i < json.length; i++) {
        
        const name = json[i].name
        const ammId = json[i].ammId
        const baseMint = json[i].baseMint
        const price = json[i].price

        console.log(name)
        console.log(`Liquidity Pool : ${ammId}`)
        console.log(`token address : ${baseMint}`)
        console.log(`token price : ${price}`)
        console.log(`---------------------------------------------------------------------------`)
      }

    } catch (error) {
      console.error(error.message);
    }
  }
  getData()
