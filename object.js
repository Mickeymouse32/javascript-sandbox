// OBJECT - {key: value, key2: value2}
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 45,
  isMarried: true,
  friends: ["Jane", "Peter", "Mark"],
  job: "Teacher",
  location: {
    street: "Vineyard",
    area: "Lekki",
    city: "Lagos",
    zip: "100111",
    geolocation: {
      lat: 23.46,
      lng: 45.78,
      landmark: "City mall",
    },
  },
};

// getting properties from an object
// dot notation objName.propertyName and bracket notation on=bjname['property']

console.log(person.age);
console.log(person.firstName);
console.log(person.lastName.toUpperCase());
console.log(person["age"]);
console.log(person["friends"]);

console.log(
  `I live at ${person.location.street} estate ${person["location"]["area"]}`
);

// adding a new property to an object

person.workplace = "Apollo schools";

console.log(person);

//removing property delete
delete person.job;
console.log(person);

// add a new property to the location object in the person object called landmark set to
//city mall

person.location.landmark = "city mall";

const user = {
  username: "ade001",
  email: "ade@google.com",
  profilePic: "image",
  age: 25,
  isLogggedin: true,
  isVerified: true,
  posts: ["Nigeria just get as e b", "I love food"],
  welcomeUser: function () {
    return this.isLogggedin ? `Welcome ${this.username}` : "Log in to continue";
  },
  verifyUser: function () {
    return this.isVerified ? "Verification successful" : "Verify to continue";
  },
};

// object methods - developer writes it
// function decleration  (this - refers to the object itself)

// that user welcome username or log in to continue

// write an object method VerifyUser
//if user is verified return Verification successful else
//verify your account to continue

console.log(user.welcomeUser());
console.log(user.verifyUser());

//declare an object called book with title property

//delacre an object called book with title property
const book = {
  title: "Obi goes to school",
  author: "Samuel Romeo",
  yearPublished: "2002",
  rating: 4,
  similarAuthor: ["Mark Wells"],
  price: "$30",
  genre: "comedy",

  description: function () {
    return `The book titled ${this.title} cost $${this.price} and it is a ${this.genre} novel`;
  },
  recommendBook: function () {
    return this.rating > 3.5 ? "This book is recommended" : "Not recommended";
  },
};
console.log(book.description());
console.log(book.recommendBook());

//object.keys, object.values, object.entries

const transaction = {
  amount: 4000,
  date: "16/03/2025",
  cahrges: 25,
  refNum: "tranx-12567938744",
};

console.log(Object.keys(transaction));
console.log(Object.values(transaction));
console.log(Object.entries(transaction));

//object destructuring
//rest and spread operator

const match = {
  teamA: "Wolfsburg",
  teamB: "Lecce",
  teamAScore: 3,
  teamBScore: 2,
  duration: 96,
  conners: 12,
  numOfSubs: 7,
  fouls: 14,
  stadium: "Wembley",
  weather: "Snowy",

  summary: function () {
    if (this.teamAScore > this.teamBScore) {
      return `${this.teamA} won with ${this.teamAScore}`;
    } else if (this.teamBScore > this.teamAScore) {
      return `${this.teamB} won with${this.teamBScore}`;
    } else {
      return `It is a draw`;
    }
  },

  overview: function () {
    return `The match between ${this.teamA} and ${this.teamB} was played at ${this.stadium} in a ${this.weather} condition`;
  },
};

console.log(match.summary());
console.log(match.overview());

// object destructuring  - we are getting properties from an object

const { teamA, fouls, staduium, corners } = match;
console.log(fouls, staduium, corners);

const property = {
  name: "Exquisite Villa",
  rent: "2.3M/year",
  bedrooms: 7,
  bathrooms: 10,
  cautionFee: 5000,
  legalFee: 4000,
  facilities: ["pool", "gym", "theatre"],
  location: {
    area: "Gbagada",
    city: "Lagos",
    num: 45,
    street: "Charly Boy",
    geo: {
      lat: 100.27,
      lng: 45.67,
    },
  },
};

const {
  name,
  rent,
  location: {
    street,
    city,
    geo: { lng },
  },
} = property;

const product = {
  price: 1000,
  discount: 20,
};

const { price, discount } = product;
let newPrice = price - (discount / 100) * price;

console.log(newPrice.toFixed(2));
