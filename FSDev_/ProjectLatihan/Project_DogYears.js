//Dogs Mature at a faster rate than human beings.
//We often say a dog's age can be calculated in "Dog Years" to account for their growth compared to a human of the same age
//In some ways we could say, time moves quickly for dogs
//8 years in human's life equates to 45 years in a dog's life 
//how old would you be if you were a dog?

// My Current Age
var myAge = 29;

//Notes : the value saved to this variable will change
let earlyYears = 2;
earlyYears = 10.5 * earlyYears;

//We'll be changing this value later 
let laterYears = myAge-2;
laterYears *= 4;

console.log ('earlyYears equals to = ', earlyYears);
console.log ('laterYears equals to = ', laterYears);

var myAgeInDogYears = earlyYears + laterYears;

//the "toLowerCase" method returns a string with all lowercase letter
var myName = 'Ivan'.toLowerCase();

console.log (`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years`);


