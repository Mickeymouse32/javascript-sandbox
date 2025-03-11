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

if(averageA > averageB){
    console.log("Team A wins");
    
}else{
    console.log("Team B WINS");
    
}







