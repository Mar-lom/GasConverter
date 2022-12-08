const gasPriceInput = document.getElementById('input')
const usdButton = document.getElementById("usdButton")
const cadButton = document.getElementById("cadButton")
const result = document.getElementById("result")


usdButton.addEventListener("click", async()=> {
      const results = await ConvertGalllonsToLiters(gasPriceInput.value)   
    
    if(/^[0-9.]+$/.test(gasPriceInput.value)){       
        result.innerHTML = "$" + gasPriceInput.value + " per gallon USD is equal to " + "$ " + results + " a Liters in CAD "
    }
    else{

        alert("Enter a gas price please :)")
    }
   
})



cadButton.addEventListener("click", async()=> {


    const results = await ConvertLitersToGallons(gasPriceInput.value)     
    if(/^[0-9.]+$/.test(gasPriceInput.value)){
        result.innerHTML = "$" + gasPriceInput.value + " per liter CAD is equal to " + "$" + results + " a gallon in USD "      

    }
    else{
        alert("Enter a gas price please :)")
    }
})

// Boarder Fill up
// compares prices of grandportage and rydens in liters to the ones in town




const literPerGallon = 3.78541;
const gallonsPerLiter = 0.264172;

// Currency api
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f1870c1547msha079c3429dfd0f6p17d817jsn7f1f13e41beb',
		'X-RapidAPI-Host': 'currency-conversion-and-exchange-rates.p.rapidapi.com'
	}
};
 
    const currencyCad =  fetch(`https://currency-conversion-and-exchange-rates.p.rapidapi.com/convert?from=USD&to=CAD&amount=1`, options)
	.then(response => response.json())
    .then((result) => {
        return result.result
    })
	.catch(err => console.error(err));
  
    
    const currencyUsd =  fetch(`https://currency-conversion-and-exchange-rates.p.rapidapi.com/convert?from=CAD&to=USD&amount=1`, options)
	.then(response => response.json())
    .then((result) => {
        return result.result
    })
	.catch(err => console.error(err));



async function ConvertLitersToGallons(canadianPrice){
    const result = await currencyUsd;
    const rounded = result.toFixed(2) 
    let priceInAmerican = canadianPrice * rounded;
    let pricePerGallon = priceInAmerican / gallonsPerLiter;
    let roundedUp = pricePerGallon.toFixed(2);
    return roundedUp
}


async function ConvertGalllonsToLiters(americanPrice){ 
    const result = await currencyCad;
    const rounded = result.toFixed(2)     
    let priceInCanadian = rounded * americanPrice;
    let pricePerLiter = priceInCanadian / literPerGallon
    let roundedUp = pricePerLiter.toFixed(2)
    return roundedUp
}




//ConvertGalllonsToLiters(2.34);
//ConvertLitersToGallons(1.19)