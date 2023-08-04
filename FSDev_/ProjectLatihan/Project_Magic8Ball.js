// Magic Eight Ball
// using "CONTROL FLOW" create a fortune telling program
// purposes -> user will input a Question, then our program will output a random fortune

let userName = 'Ivan';
let userQuestions = 'Should i say i love her again?';
let randomNumber = (Math.floor(Math.random()*8));

userName ? console.log (`Hello! ${userName}`):console.log(`Hello!`);
console.log (userQuestions+" "+userName);

// If... Else method

console.log (randomNumber);
if (randomNumber == 0){
    console.log('It is certain');
}else if(randomNumber == 1){
    console.log('It is decidedly so');
}else if(randomNumber == 2){
    console.log('Reply hazy try again');
}else if(randomNumber == 3){
    console.log('Cannot predict now');
}else if (randomNumber == 4){
    console.log('Do not count on it');
}else if (randomNumber == 5){
    console.log('My sources say no');
}else if (randomNumber == 6){
    console.log('Outlook not so good');
}else{
    console.log('Signs point to yes');
}

// Switch Case method

let eightBalls = '';
eightBalls = randomNumber;
switch (eightBalls){
    case 0:
        console.log('It is certain');
        break;
    case 1:
        console.log('It is decidedly so');
        break;
    case 2:
        console.log('Reply hazy try again');
        break;
    case 3:
        console.log('Cannot predict now');
        break;
    case 4:
        console.log('Do not count on it');
        break;
    case 5:
        console.log('My sources say no');
        break;
    case 6:
        console.log('Outlook not so good');
        break;
    case 7:
        console.log('Signs point to Yes');
        break;
    }
