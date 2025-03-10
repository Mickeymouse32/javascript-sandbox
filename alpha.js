// STRINGS - CHARACTERS INSIDE OF QUOTATION MARKS '' ""

const firstName = "John";
const lastName = "Doe";
const myPassword = "hhgfgh";

// STRING PROPERTIES - Length, concatenation (joining +)
console.log(firstName.length);
console.log(lastName.length);
console.log(myPassword);
console.log(myPassword.length);

const fullName = firstName + " " + lastName;
console.log(fullName);
console.log(fullName.length);

// strings methods - built  in functions taht can be done on strings
//

const email = "jjdoe@google.co.uk";
console.log(email);

// toUppercase, toLowercase
console.log(email.toUpperCase());
console.log(email.toLowerCase());

// indexOf, lastIndexOf, charAt

console.log(email.charAt(1));
console.log(email.indexOf("o"));
console.log(email.lastIndexOf("o"));

// startsWith true or false, endswith, includes

console.log(email.startsWith("jj"));
console.log(email.endsWith(".uk"));
console.log(email.includes("Doe".toLowerCase()));
console.log(email.toUpperCase().includes(".CO"));

// DataTransferItem, trimStart and trimEnd (removes white spaces)
const username = "  ade001   ";
console.log(username.trim());
console.log(username.trimEnd());
console.log(username.trimStart());

// replace replaceALL

const myName = "jane doe";
console.log(myName.replace("e", "*"));
console.log(myName.replaceAll("e", "*"));

// extract portions of a string slice substring (start, end) substr

console.log(myName.slice(5, 8));
console.log(myName.substring(0, 3));

// substr(start, num of characters)
console.log(myName.substr(0, 5));

const accountNumber = "1234567890";
console.log(accountNumber.replace(accountNumber.substr(2, 6), "*****"));
console.log(accountNumber.replace(accountNumber.slice(2, 8), "*****"));

// concatenation

const author = "Jax Draxx";
const book = "The Ghost";

// Jax Draxx wrote the book The Ghost

const sentence = author + "wrote the book" + book;
console.log(sentence);

// template literals used to format variables inside of a string
// ``

const sentence2 = `${author} wrote the book ${book.toLowerCase()}`;
console.log(sentence2);

const person = "Adam Sandler";
const movie = "Romance Scam";

const sentence3 = `${person.toUpperCase()} featured in the movie ${movie}`;
console.log(sentence3);

const fName = `${firstName} ${lastName}`;
// ade said and i quote 'i am good'\\

const example = "ade said and i quote i am good";

const country = "Nigeria";
console.log(country.length);
// convert the country to capital letters log to the console

console.log(country.toUpperCase());

console.log(country.slice(0, 5));
console.log(country.substr(0, 5));

// check if the country starts with e

console.log(country.startsWith("e"));

// check if the country has h in it
console.log(country.includes("h"));

// using template literals write a sentence  that looks like this I LIVE IN NIGERIA




