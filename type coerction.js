function calcSumOfNums() {
  const num1 = prompt("Enter First Number: ");
  const num2 = prompt("Enter Second Number: ");

  console.log(Number(num1) + parseInt(num2));
}

calcSumOfNums();

//type conversion
//numbers to strings
//60 ==> '60'
const num = 98;
console.log(typeof num);
console.log(typeof num.toString());
console.log(typeof String(num));

//strings to numbers // ade// '98' -- 98
//number parseint

const myStr = "100";
console.log(typeof myStr);
console.log(typeof Number(myStr));
console.log(typeof parseInt(myStr));
console.log(parseInt(myStr) * 2);
console.log(+"30" + 2);

//'2'  + '3'  = 5

// TYPE COERCTION - force

console.log("2" + 4); // 24
console.log("2" * 4);  // 8

console.log("4" - "4"); //

// whenever a string is involve with + ---> string concatenation
//e.g '50' + 4 == '504'
//however a valid number string '24' is involved with other  math operators - coarsed to behave as a  number e.g '50' - 5 = 45
// a non valid number string e.g 'ade' involved with math operators except + would result to NaN when used e.g 'ade' - 5 = NaN

