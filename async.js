/// asynchronous js / non-blocking code
// codes that takes time

console.log("a");

setTimeout;

console.log("c");

//a c b

//fetching data
//geolocation
//payment gateway

//public private
//rest apis - GET POST DELETE PATCH

const url = "https://dummyjson.com/products";

// fetch request async/await

const getProducts = async () => {
  const response = await fetch(url);
  //   console.log(response);
  const data = await response.json();
  console.log(data);
  console.log(data.products);
};

getProducts();

//promise - - containers for  future value
//pending, fullfiled, rejected

//.then

const getProducts2 = () => {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data.products);
    });
};
