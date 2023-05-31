function convertTemperature() {
    var temperatureInput = parseFloat(document.getElementById("temperature").value);
    var unit = document.getElementById("unit").value;
    var resultElement = document.getElementById("result");

    if (unit === "celsius") {
        resultElement.value =convertToCelsius(temperatureInput);
    } else if (unit === "fahrenheit") {
        resultElement.value = convertToFahrenheit(temperatureInput);
    } else if (unit === "kelvin") {
        resultElement.value =convertToKelvin(temperatureInput);
    }
}

function convertToCelsius(temperature) {
    return temperature.toFixed(2) + "°C";
}

function convertToFahrenheit(temperature) {
    var fahrenheit = (temperature * 9/5) + 32;
    return fahrenheit.toFixed(2) + "°F";
}

function convertToKelvin(temperature) {
    var kelvin = temperature + 273.15;
    return kelvin.toFixed(2) + "°K";
}
