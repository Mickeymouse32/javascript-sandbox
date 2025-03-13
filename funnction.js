// functions

//4 5 7 9 4 6

//function declaration
//function  functionName () {write the code}
// log hello world tot he console

function logger() {
  console.log("Hello world");
}
// call it or invoke

logger();

logger();

// write a function called welcomeUser logs welcome user to the console

function logg() {
  console.log("welcomeUser");
}

logg();

// function parameters - values passed to the function to use
function welcomeUser(name = "Anon") {
  console.log(`Welcome ${name}`);
}

welcomeUser("Mike");
welcomeUser("Dean");

// write a function that adds two numbers togerther

function addTwoNumbers(n1, n2) {
  const total = n1 + n2;
  console.log(total);
}

addTwoNumbers(34, 10);
addTwoNumbers(9, 10);

//write a function that compute the diffrence betweenn two numbers

function subtractTwoNumbers(n1, n2) {
  console.log(n1 - n2);
}

subtractTwoNumbers(90, 5);
subtractTwoNumbers(2, 5);

//default parameters
welcomeUser();

/// write a function called wordConverter, that converts all alphabets to uppercase cat-->CAT

function wordConverter(word = "word") {
  console.log(word.toUpperCase());
}

wordConverter("cat");

// write a func called replaceALLE
//it replaces all of every "E" IN ANY WORD PROVIDED

function replaceALLE(word) {
  console.log(word.toLowerCase().replaceAll("e", "*"));
}
replaceALLE("elephant");

//write a func called checklength, it returns the num of char in the word provided

function checklength(word) {
  console.log(word.length);
}
checklength("djhgfdu");

//write a func that returns the first character in the word provided

function returnCharacter(word) {
  console.log(word.charAt(0));
}
returnCharacter("cat");

function firstinitial(firstName, lastName) {
  console.log(firstName.charAt(0) + lastName.charAt(0));
}
firstinitial("John", "Doe");

// write a func thta extracts the first 5 letters of any word provided

function toextract(extract) {
  console.log(extract.substr(0, 5));
}

toextract("Battle");

function positiveornegative(num) {
  num > 0 ? console.log("POSITIVE") : console.log("NEGATIVE");
}

positiveornegative(-67);

//function to a factory that produces a product
//return avalue return

function sayHello() {
  return "say Hello";
}

const val = sayHello();
console.log(val);

// write a func that returs the average of three numbers

function calAverage(num1, num2, num3) {
  return (num1 + num2 + num3) / 3;
}
console.log(calAverage(3, 3, 3));

//write a func that converts weeks to days and returs the num of days

function toconvert(weeks) {
  return (days = weeks * 7);
}
console.log(toconvert(4));

function hrsToMin(hours) {
  return `${hours} hours is equal to ${hours * 60} minutes`;
}

console.log(hrsToMin(2));

function yearsToMonths(years) {
  return `${years} years is equal to ${years * 12} month`;
}
console.log(yearsToMonths(2));

// write a func that returs 40

function return40() {
  let num = 40;
  return num;
}

// function expression

const myName = function () {
  return "John";
};
console.log(myName());

const divideTwoNums = function (n1, n2) {
  return n1 / n2;
};

console.log(divideTwoNums(9, 3));

// hoisting
//func declaration - hoisted above puts at the top of the doc

removealla("email");
function removealla(word) {
  console.log(word.replace("a", " "));
}

// arrow function

const myArrowFunc = () => {
  console.log("Arrow Function");
};
myArrowFunc();

//write an arrow function checkNumber that takes in two scores as a parameter
//your function should return diffrent outcomes based on the score
//if score a is more thaan b return 'Score A wins'

const checkWinner = (scoreA, scoreB) => {
  if (scoreA > scoreB) {
    return "Score A wins";
  } else if (scoreA < scoreB) {
    return "Score B wins";
  } else {
    return "It is A Draw";
  }
};

console.log(checkWinner(56, 78));

//write a function called calculateBMI
//takes in body mass and height as a parameter
//the function should return the BMI INDEX ROUNDED TO 2 decimal places
// weight divided by the square of height
//use the value 70, 1.75 === 22.86

const calculateBMI = (weight, height) => {
  const BMI = weight / height ** 2;
  return BMI;
};
console.log(calculateBMI(70, 1.75).toFixed(2));

2; //write a function getBMICategory using the result of the bmi calculated above
//to determine the BMI CATEGORY
//less than 18.5 is underweight
//between 18.5 and 24.9 is normal weight
//between 25 and 29.9 is overweight
//anything else is obesse

const getBMICategory = (bmi) => {
  if (bmi < 18.5) {
  return "Underweight";
  }else if(bmi > 18.5 && bmi <= 24.9) {
  return "Normal Weight"
  }else if (bmi > 25 && bmi <= 29.9){
    return "Overweight"
  }else{
    return "obese"
  }
};

console.log(getBMICategory(calculateBMI (70, 1.75)));



