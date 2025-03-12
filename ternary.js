// tenary operators
//if else
//condition ? first action : second acion

const myNumber = -50;

myNumber > 0 ? console.log("positive") : console.log("negative");

// use a tenary operator to check if a number is odd or even

const mynum = 15;

mynum % 2 === 0 ? console.log("Even") : console.log("Odd");

//Mr Mario has a car
//mr mario does not have a car

const hasAcar = false;

const sentence = `Mr Mario ${hasAcar ? "has" : "does not have"} a car`;
console.log(sentence);

// delare a variables call isUserLoggedIn set it to either true or false

let isUserLoggedIn = true;
//write a tenary operators that logs welcome user if user is logged in and log out if the user is logged out

isUserLoggedIn ? console.log("Welcome user") : console.log("logged out");

// using a TO tell a user if they are eligible for a loan or not
//the loan eligibility criterion is that the  amount  of loan is twice the balance or less

//10 balance 20

const balance = 4902;
const loanAmount = 6893;

loanAmount <= balance * 2
  ? console.log("Eligible for loan")
  : console.log("Not eligible");

//declare two variables savings and transactionAmount
//write a TO taht tells the user is the transaction will be successful or not

let savings = 2000000;
let transactionAmount = 5000000;
savings > transactionAmount
  ? console.log("Succesful")
  : console.log("Insufficient Funds");
transactionAmount > 0
  ? console.log(Credit alert of ${transactionAmount})
  : console.log(Debit alert of ${transactionAmount});
   
   
 
 
