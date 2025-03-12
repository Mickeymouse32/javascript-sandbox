// conditional statement
//if statement
//if (condition){
//lines of code
//}

if (true) {
  console.log("Hello world");
}

//18+ // yOU ARE ELIGIBLE TO VOTE

const age = 12;

if (age >= 18) {
  console.log("YOU ARE ELIGIBLE TO VOTE");
}

const password = "dhghhjhfvvj";

if (password.length >= 9) {
  console.log("Password is strong");
}

//if  statement
if (false) {
  console.log("hello class");
} else {
  console.log("goodbye class");
}

if (password.length >= 9) {
  console.log("Password is strong");
} else {
  console.log("password is weak");
}

const balance = 3883;
const amount = 4783;



if (3883 <= 4783) {
  console.log("transaction sucessful");
} else {
  console.log("insufficient funds");
}

const userPin = 4783;
const enteredPin = 9389;

if (userPin == enteredPin) {
  console.log("Pin correct");
} else {
  console.log("Incorrect Pin");
}

const email = "dcdce";

if (email.includes("@")) {
  console.log("VALID EMAIL");
} else {
  console.log("INVALID EMAIL");
}

const score = 60;

if (score >= 50) {
  console.log("Passed the exam");
} else {
  console.log("Fail the exam");
}

let number = -5;
if (number > 0) {
  console.log("positive");
} else {
  console.log("negative");
}

const num1 = 70;
const num2 = 90;

if (num1 > num2) {
  console.log(`num1 ${num1} is greater than num2 ${num2}`);
} else {
  console.log(`num2 ${num2} is greater than num1 ${num1}`);
}

//write a program taht checks if a number is even or odd

let num3 = 56;

if (num3 % 2 === 0) {
  console.log(`${num3} is EVEN`);
} else {
  console.log(`${num3} is ODD`);
}

//WRITE A PROGRAM THT CHECKS IF A USER IS ELIGIBLE FOR A DISCOUNT,
// A USER IS ELIGIBLE FOR A DISCOUNT IF
// THE PURCHASE AMOUNT IS MORE THAN 100 DOLLARS

const purchaseAmount = 600;

if (purchaseAmount > 100) {
  console.log("You have a discount");
} else {
  console.log("Buy More");
}

//two teams teamA and teamB Competed in a sport
//team a scored 54, 56, 78
//team b scored 67, 60, 82

//calculate the average score of both teams
//write a program now to determine the winner of the competition\
//if a WINS LOG TEAM A WINS ELSE TEAM B WINS

const averageA = (54 + 56 + 78) / 3;
const averageB = (67 + 60 + 82) / 3;

console.log(`Team a has an average score of ${averageA}`);
console.log(`Team b has an average score of ${averageB}`);

if (averageA > averageB) {
  console.log("Team A wins");
} else {
  console.log("Team B WINS");
}

// write a program that tells the charges of transaction
// any transaction that is more than 2500 will have  a charge of 100
//and anything less will be 50

//write  program that displays if a word has vowel sounds (a e i o u) in it and displays consonant if not

const transaction = 6700;

if (transaction > 2500) {
  console.log("Your charge is 100");
} else {
  console.log("Your charge is 50");
}

let word = "banana";

if(word.includes("a") || word.includes ("e") || word.includes("0") || word.includes("i") word.includes("u")){
    console.log("The word is a vowel");
    
}else{
    console.log("The word is consonant");
    
}

const scoreA = 100;
const scoreB = 100;

//draw a wins b wins
//else if statement more than 2 choices

if(scoreA > scoreB){
    console.log("A wins");
    
}else if (scoreb > scoreA){
    console.log("B wins");
    
}else{
    console.log("It is a draw");
    
}


//write a program that rates movies
//above 8 is excellent
// above 6 is good
//above 5 is average
//else is bad

const movieRating = 6.5;

if(movierating >= 8){
    console.log("Excellent Movie");
    
}else if(movieRating >= 6){
    console.log("Good Movie");
    
}else if(movieRating >= 5){
    console.log("Average Movie");
    
}else{
    console.log("Bad Movie");
    
}

//less than 18 - young club
// 18 - 60  -  adult club
//above 60 -- old people club


const userAge = 45;
if(userAge > 60){
    console.log("Old Peoples club");
    
}else if(userAge < 18){
    console.log("Young Club");
    
}else{
    console.log("Adult Club");
    
}


// if(email && password){
//     if(email is registered){
//         if(password is correct){
//             // login
//         }else{
//             console.log('Incorrect pass');

//         }

//     }else{
//         console.log('please register');

//     }

// }else{
//     console.log('provide your email and password');

// }

const grade = "g";
switch (grade) {
  case "A":
  case "a":
    console.log("Excellent");
    break;
  case "B":
  case "b":
    console.log("Very Good");
    break;
  case "C":
  case "c":
    console.log("Good");
    break;
  case "D":
  case "d":
    console.log("fair");
    break;
  case "E":
  case "e":
    console.log("pass");
    break;
  case "F":
  case "f":
    console.log("OLODO RABATA");
    break;
  default:
    console.log("Invalid Grade, Try Again");
}

