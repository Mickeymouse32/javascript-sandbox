// [element, element2, element3]
// arrays usally contains the datatypes

//empty arrays are falsy value

const student = ["David", "Quadri", "Issac", "Johnpaul", "David"];

//array properties

console.log(student);
console.log(student.length);
// getting elements from an array, position

console.log(student[0]);
console.log(student[2]);
console.log(student[3]);

// change elements in an array , position

student[0] = "Azeez";
student[student.length - 1] = "John Doe";
console.log(student);

// array methods
//add and remove elements from an array
//structured data type stack LIFO
//PUSH, unshift (add element to an array)

student.push("Michael");
student.push("Juwon");
student.unshift("Uthman");

//pop and shift
student.pop();
student.shift();

console.log(student);

// includes
console.log(student.includes("David"));
//indexOf lastIndexOf at
console.log(student);
console.log(student.indexOf("Wale"));
console.log(student.lastIndexOf("Uju"));
console.log(student.at(2));

//extract portions an array slice(start, end(non-inclusive))
console.log(student.slice(0, 3));
console.log(student.slice(4, 7));

// methods to convert arrays to strings
// join, toString

console.log(student.join());
console.log(student.toString());

// iterator methods
// higher order methods(functions) - it needs another function as a parameter
// forEach, map, find, fillter, some, every, reduce
//forEacch - executes a function for every element in an array

student.forEach((user) => {
  console.log(user.toUpperCase());
});

//give me the first letter of every student na in the student array

student.forEach((user) => {
  console.log(user.charAt(0));
});

// map - creates a new array with the result of a function

const smallCaseStudent = student.map((user) => {
  return user.toLowerCase();
});

console.log(smallCaseStudent);

// fillter - creates a new array with element that pass a test (search condition)

const myNums = [3, 4, 5, 2, 8, 1, 9, 10];

// > 5

const greaterThan5 = myNums.filter((num) => {
  return num > 5;
});

console.log(greaterThan5);

const evenNumbers = myNums.filter((num) => {
  return num % 2 === 0;
});

console.log(evenNumbers);

const oddNumbers = myNums.filter((num) => {
  return num % 2 !== 0;
});

console.log(oddNumbers);

const lengthGreaterthan6 = student.filter((user) => user.length > 6);

console.log(lengthGreaterthan6);

// /find returns the first element that passes a test (search condition)

const findGreaterthan6 = myNums.find((num) => num > 5);
console.log(findGreaterthan6);

const favstudent = student.find((user) => user.length === 5);
console.log(favstudent);

// some - returns true if at least one of every element passes a test

const ifSomeGreater5 = myNums.some((num) => num > 5);
console.log(ifSomeGreater5);

//every - returns true if all element passes a test

const ifallGreater5 = myNums.every((num) => num > 5);
console.log(ifallGreater5);

//reverse, sort, concat, reduce,
// string spilt

const carBrands = ["Toyota", "Rollsroyce", "Ferrari", "Tesla", "Bmw"];

console.log(carBrands);

// console.log(carBrands.reverse());

console.log(carBrands.sort()); // a-z
console.log(carBrands.sort().reverse());

// sorting numbers - up up - 0
const prices = [200, 4000, 650, 100, 3500];
console.log(prices.sort());
console.log(prices.sort((a, b) => a - b)); // smallest to largest
console.log(prices.sort((a, b) => b - a)); //high to low

// reduce = reduces every element in an array to a single value
// two parameters call-back function, start point
const totalPrice = prices.reduce((acc, curr) => {
  return acc + curr;
}, 0);
console.log(totalPrice);

// concat

const africanCountries = ["Togo", "Mauritius"];
const asiancountries = ["Singapore", "Japan", "South Korea"];

const holidayLocations = africanCountries.concat(asiancountries);
console.log(holidayLocations);

const fruit = "banana";
//spilt method on a string
console.log(fruit.split(""));
console.log(fruit.split("a"));

// write a func that reverses the letter in a word
// cat -- tac

const reverseWord = (word) => {
  return word.split("").reverse().join("");
};

console.log(reverseWord("cat"));
console.log(reverseWord("gel"));

//palindrome - words that are spelt the same
//madam level tat noon pap eye

function ispalindrome(word) {
  return word.toLowerCase() === word.split("").reverse().join("").toLowerCase();
}

console.log(ispalindrome("Madam"));

// SET - UNIQUE values in an array

const users = ["John", "Dave", "Nate", "John", "Dave"];

console.log(new Set(users));



