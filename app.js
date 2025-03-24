//Document object Mpdel (dom)

//select element on the document, tagName(h1, p), className, idName,
//combinations

const headings = document.getElementsByTagName("h1");
console.log(headings);

const myH1s = document.getElementsByClassName("heading");
console.log(myH1s);

const textPara = document.getElementById("text");
console.log(textPara);

// querySelector(css selector) one
// ., #, div p, div.inneer

const fiesrPar = document.querySelector("p");
console.log(fiesrPar);

const allPar = document.querySelectorAll("p");
console.log(allPar);

// interracting with the content on the document

// textContent, innerText, innerHtml

const heading = document.querySelector(".heading");
console.log(heading.textContent);
console.log(heading.innerText);

heading.textContent += "JS IS FUN";

//heading.innerText = "JS IS FUN"

const container = document.querySelector("div");
console.log(container.innerHTML);
container.innerHTML += "<a href='https://google.com'> visit google</a>";
const intro = document.querySelector("h2");
const myName = "John Paul";
const initials = "J.P";
// const intro = document.querySelector("h2");
intro.textContent = `Welcome ${myName}`;

//welcome initials

//interract with attributes
const mylink = document.querySelector(".mylink");

//facebook

mylink.textContent = "Facebook";
mylink.setAttribute("href", "https://facebook.com");
mylink.setAttribute("target", "_blank");
mylink.getAttribute("href");
console.log(mylink.getAttribute("href"));

//interract with styles

mylink.style.color = "red";
mylink.style.textDecoration = "none";

//

const btn = document.querySelector("button");

btn.className = "mybtn";

// classlist

btn.classList.add("mybtn");
btn.classList.add("kevin");
btn.classList.remove("kevin");

//create element in JS

const section = document.createElement("section");

section.innerHTML = "<h1>Created from JS</h1>";
section.className = "mysection";

//append it body or whereever it is needed

const body = document.querySelector("body");

body.appendChild(section);

//responding to users interaction

/// 1. event e.g click, submit 2. event handler, function

const testbtn = document.querySelector(".testbtn");

testbtn.addEventListener("click", () => {
  console.log("User clicked");
  body.style.backgroundColor = "red";
});

//form handling
//submit
// click
//refreshes the page when submitted

const form = document.querySelector("form");
const fullname = document.querySelector(".fullname");
const small = document.querySelector("form small");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const fullNameValue = fullname.value.trim();
  console.log("form submitted", fullNameValue);

  // validate the input

  if (fullNameValue === "") {
    small.style.display = "block";
    small.textContent = "Please provide a name";
  }
});
