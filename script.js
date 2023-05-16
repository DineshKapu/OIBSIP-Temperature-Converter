function convertCelsiusToFahrenheitAndKelvin(){
    let celsius = document.getElementById("celsius").value;
    let fahrenheit = (celsius * 9/5) + 32;
    let kelvin=(celsius)+273.15;	
    document.getElementById("fahrenheit").value = fahrenheit;
    document.getElementById("kelvin").value = kelvin;
}

function convertFahrenheitToCelsiusAndKelvin(){
    let fahrenheit = document.getElementById("fahrenheit").value;
    let celsius = (fahrenheit - 32) * 5/9;
    let kelvin=((fahrenheit - 32) * 5/9)+273.15;
    document.getElementById("celsius").value = celsius;
	 document.getElementById("kelvin").value = kelvin;
}
function convertKelvinToCelsiusAndFahrenheit(){
let kelvin=document.getElementById("kelvin").value;
let celsius=kelvin-273.15;
let fahrenheit=(kelvin - 273.15) * 9 / 5 + 32;
 document.getElementById("celsius").value = celsius;
 document.getElementById("fahrenheit").value = fahrenheit;
}