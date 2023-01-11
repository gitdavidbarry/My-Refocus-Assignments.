
// Task 1. Temperature converter

function convertToKelvin(tempCelsius) {
    let tempKelvin = (tempCelsius + 273.15);
    return tempKelvin;
} console.log (convertToKelvin(100));

function convertToKelvin1(tempFahrenheit) {
    let tempKelvin1 = (tempFahrenheit - 32) * 5 / 9 + 273.15;
    return tempKelvin1;
} console.log (convertToKelvin1(32));


// Task 2. Tip calculator


function computeTip(totalBill) {
    let totalTip = (totalBill * 0.10);
    return totalTip;
} console.log(computeTip(150));