const customers = ["Ade", "Nogozi"];
customers.map((customer) => {
  console.log(customer.charAt(0));
});

//[object1, object2]
//name, age, gender, location, purchase

const myCustomers = [
  { name: "Naima", age: 25, gender: "M", location: "Ibadan", purchase: 6000 },
  { name: "Johnny", age: 30, gender: "M", location: "lagos", purchase: 8000 },

  {
    name: "Liu Kang",
    age: 32,
    gender: "F",
    location: "Ibadan",
    purchase: 4300,
  },
  {
    name: "Sonya Blade",
    age: 20,
    gender: "F",
    location: "lagos",
    purchase: 7400,
  },
  { name: "kitana", age: 35, gender: "F", location: "ondo", purchase: 6200 },
];

//
myCustomers[1].name;
const { name } = myCustomers[1];
myCustomers[1]["name"];

myCustomers.map((customer) => {
  console.log(customer.name);
});

//get customers that age 25 and above

const olderCustomers = myCustomers.filter((customer) => customer.age >= 25);
console.log(olderCustomers);

// younger than 25

const youngerCustomers = myCustomers.filter((customer) => customer.age < 25);
console.log(youngerCustomers);

//female customers
const femaleCustomers = myCustomers.filter(
  (customer) => customer.gender === "F"
);
console.log(femaleCustomers);

//male customers
const maleCustomers = myCustomers.filter(
  (customer) => customer.gender.toUpperCase() === "m".toUpperCase()
);
console.log(maleCustomers);

//get the number of customers staying in lagos

const locCustomers = myCustomers.filter(
  (customer) => customer.location === "lagos"
);
console.log(locCustomers.length);

//arrange  the customers according to age (young to old)

const ageArrange = myCustomers.sort((a, b) => a.age - b.age);
console.log(ageArrange);

const aveAge = myCustomers.reduce((acc, customer) => acc + customer.age, 0);
const avAge = aveAge / myCustomers.length;
console.log(avAge);

const ibCustomers = myCustomers.find((a) => a.location === "Ibadan");
console.log(ibCustomers);

// get a new array containing all the purchases of all customers

//get all customers with a minimum of 6000 purchase amount

//get the total purchase amount of all customers

//get the average purchase fir the last three customers

//get the total purchase amount for all customers in ibadan

const allPurchase = myCustomers.map((customer) => customer.purchase);
console.log(allPurchase);

const min6000 = myCustomers.filter((customer) => customer.purchase >= 6000);
console.log(min6000);

const tootalPurchase = myCustomers.reduce(
  (acc, customer) => acc + customer.purchase,
  0
);
console.log(tootalPurchase);

const totalPurchase = myCustomers
  .slice(2)
  .reduce((acc, customer) => acc + customer.purchase, 0);
const avPurchase = tootalPurchase / 3;
console.log(avPurchase);

const ibadanTotalPurchase = myCustomers
  .filter((customer) => customer.location === "Ibadan")
  .reduce((acc, customer) => acc + customer.purchase, 0);

console.log(ibadanTotalPurchase);

const shoppingCart = [
  { title: "Jean", price: 100, qty: 2 },
  { title: "Hat", price: 50, qty: 4 },
  { title: "Cream", price: 30, qty: 1 },
  { title: "Duffel Bag", price: 150, qty: 5 },
  { title: "Balaclava", price: 70, qty: 3 },
];

// Jean cost $100

shoppingCart.map((item) => {
  console.log(`${item.title} costs $${item.price}`);
});

const lowCostItems = shoppingCart.filter((item) => item.price > 70);
console.log(lowCostItems);

shoppingCart.map((item) => {
  console.log(`${item.title} costs $${item.price * item.qty}`);
});

//get the totalcost of all items in the cart

const totalCost = shoppingCart.reduce(
  (acc, item) => acc + item.price * item.qty,
  0
);
console.log("Total cost is "  + totalCost);
