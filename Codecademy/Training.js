// A. Conditionals training
// Study Case 1: Stoplight

// var stoplight = 'red';
// var pedestrians = 1;
// if (stoplight === 'green' && pedestrians === 0){
//     console.log ('Go!');
// }else {
//     console.log ('Stop!');
// }

// Study Case 2: Weekend

// var day = 'monday';
// if (day === 'saturday' || day === 'sunday'){
//     console.log('Enjoy the Weekend!');
// }else{
//     console.log('Do some work');
// }

// Study Case 3: Mood Meter
// let mood = 'sleepy';
// let tirednessLevel = 6;

// if (!mood === 'sleepy' && tirednessLevel > 8){
//     console.log ('Time to Sleep');
// }else{
//     console.log ('NOT bed time YET');
// }

// B. True & False
// let myVariable = 'I Exist';

// if(myVariable){
//     console.log(myVariable);
// }else{
//     console.log('The variable does not exist');
// }

// notes for True & False
/** which values are false / evaluate as "false" when check in condition
 * 0
 * Empty Strings like "" / ''
 * "null" which represent when there is no value at all
 * "undefined" which represent when a declared variable lacks a value
 * NaN, or NOT a Number
 */

//Examples variable with Faulty values
 
//B1.True / False Assignment
// let username = '';
// let defaultName;

// if(username){
//     defaultName = username;
// }else{
//     defaultName ='stranger';
// }

// console.log(defaultName);

// B2. True / False Assignment -> short-circuit evaluation
// let Username = '';
// let DefaultName = Username || 'Stranger'

// console.log(DefaultName);

// Notes : IMPORTANT to remember
// when we used "short-circuit evaluation" if we want to print the 2nd value in "String" interpolation
// but the 1st value is "faulty", they will print the comparison value instead!!!

//True / False Assignment -> short-circuit evaluation (training)

// let tool = '';
// tool ='marker';
// let writingUtensils = tool || 'pen';

// console.log (`The ${writingUtensils} is mightier than a sword`);

//C. Ternary Operator -> used to simplify if... else functions
//Templates -> var (?) console.log("1st string") : console.log("2nd string");

// study case 1 -> nightime operator
// let isNightTime = true;

// if(isNightTime){
//     console.log('Turn on the lights');
// }else{
//     console.log('Turn off the lights');
// }

// with shorthand operator (simplyfy if... else);
// isNightTime ? console.log('Turn on the lights') : console.log('Turn off the lights');

// study case 2 -> favorite Phrase
// let favoritePhrase = 'Love That!';

// favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log('I don\'t love that!');

// study case 3 -> Stoplight

// let stoplight ='yellow';

// if (stoplight === 'red'){
//     console.log('Stop!');
// }else if(stoplight === 'yellow'){
//     console.log('Slow Down');
// }else if(stoplight === 'green'){
//     console.log('Go!');
// }else{
//     console.log('Caution, unknown!');
// }

// Race Day - Case


let raceNumber = Math.floor(Math.random()*1000)
console.log(raceNumber);


