// Deep in his mountain-side meteorology lab, the Mad Scientist Kelvin has mastered weather prediction
// Recently Kelvin began publishing his weather forecast on his website. 
// However there's a problem: All of his forecasts describe the temperature in Kelvin
// let's convert Kelvin to Celcius, then to fahrenheit

// Kelvin -> K
// Celcius -> C
// Fahrenheit -> F

// var K = 283;
// var C = (K - 273);
// var F = ((9/5*C)+32);

// console.log ("Temperature in Kelvin : ", K);
// console.log ("Temperature in Celcius : ", C);
// console.log ("Temperature in Fahrenheit : ", F);

// The Forecast today stated that the weather is at 293 degrees Kelvin
const kelvin = 293;

// The Forecast today stated that the weather is at 20 degrees Celcius
const celcius = kelvin - 273;

// The Forecast today stated that the weather is at 68 degrees Fahrenheit
let fahrenheit = celcius * (9/5) + 32;
// rundown fahrenheit
fahrenheit = Math.floor(fahrenheit);

console.log (`The temperature is ${fahrenheit} degrees Fahrenheit`);
console.log (`${kelvin} degrees kelvin is about ${fahrenheit} degrees Fahrenheit`);

// Extra
let newton = celcius * (33/100);
newton = Math.floor(newton);

console.log (`The temperature is ${newton} degrees Newton`);
console.log (`${celcius} degrees celcius is about ${newton} degrees Newton`);
