try {
  console.log(age);
  //do sth
} catch (error) {
  //   error.message = "sth broke";
  //handle the error
  //error message
  console.log(error.message);
}

//optional chaining

const person = {
  name: "BOB",
  age: 76,
};
console.log(person?.job); // will not break code
console.log(person.job); //

let error = {};

error?.firstName?.message;

//nillish coalescence

const image = "null";
const whatsappAvatar = image ?? "Avatar Image";
console.log(whatsappAvatar);

const value1 = null;
let val2;
let val3 = "";
let val4 = 43;

let balance = 5000;
let amount = 3000;
let pin = 1234;
let attempts = 3;

console.log(checkBalance());

function withdrawAmount() {
  if (amount <= balance) {
    balance -= amount;
    return `insufficient funds`;
  } else {
    return `Transaction Successful`;
  }
}
console.log(withdrawAmount());

function depositAmount() {
  balance += 3000;
  return `Deposit successful`;
}
console.log(depositAmount());

function checkPin(enteredPin) {
  while (attempts > 0) {
    if (enteredPin === pin) {
      return `Correct Pin`;
    } else {
      attempts--;
      return `invalid pin, Try Again`;
    }
  }
  return "Your Card has been Blocked";
}
function startAtm(choice) {
  if (choice === 1) {
    // withdraw
    withdrawAmount(1000);
  } else if (choice === 2) {
    //deposit
    depositAmount(3000);
  } else if (choice === 3) {
    //check balance
    checkBalance();
  } else if (choice === 4) {
    // exit
    return "Thank you for banking with us";
  } else {
    // invalid option
    return "Invalid option, try again";
  }
}

function checkBalance() {
  return `Your current balance is ${balance}`;
}

console.log(checkPin(4563));
