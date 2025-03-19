// rest and spread operator
//...

const user = {
  name: "John Carter",
  age: 80,
  gender: "male",
};

// rest operator
const arr = [3, 4, 6, 8];
/// unstructured data type
const { ...prop } = user;
console.log(prop);

//structured
const [y, ...others] = arr;
console.log(others);

const countries = ["Toga", "Cameroon", "Gabon", "Ghana", "Guniea"];
const [x, ...rest] = countries;

const product = {
  title: "Michael Kors",
  price: 300,
  image: "image",
};

const { price, ...property } = product;

//spread operator

const detailedProduct = {
  stock: 6,
  color: "red",
  category: "bags",
  weight: 13,
  ...product,

};

console.log(detailedProduct);


const onlineStudents = ["Femi","Jide","Peter","John"]
const physicalStudents = ["Shade", "Nike", "Seun"]

const allStudents = [...physicalStudents, ...onlineStudents, "Ruud", "Seyi",]
console.log(allStudents);


