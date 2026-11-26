// =============================================
// Callback Functions in JavaScript
// =============================================

// A callback is a function passed as an argument
// to another function, and called later.

// ----- 1. Basic Callback (No Parameters) -----
function greet() {
  console.log("Hello, World!");
}

function executeCallback(callback) {
  console.log("Before callback...");
  callback(); // calling the no-parameter function
  console.log("After callback...");
}

executeCallback(greet);
// Before callback...
// Hello, World!
// After callback...

// ----- 2. Anonymous Callback (No Parameters) -----
executeCallback(function () {
  console.log("I'm an anonymous callback!");
});

// ----- 3. Arrow Function as Callback -----
executeCallback(() => {
  console.log("I'm an arrow function callback!");
});

// ----- 4. Callback WITH Parameters -----
function add(a, b, callback) {
  const result = a + b;
  callback(result);
}

add(5, 3, function (sum) {
  console.log("Sum is:", sum); // Sum is: 8
});

// ----- 5. Simulating Async Operation -----
function fetchData(callback) {
  console.log("Fetching data...");
  setTimeout(() => {
    const data = { name: "Shaheena", role: "Developer" };
    callback(data);
  }, 2000);
}

fetchData(function (result) {
  console.log("Data received:", result);
});

// ----- 6. Array Methods use Callbacks -----
const numbers = [1, 2, 3, 4, 5];

// forEach - callback with parameter
numbers.forEach(function (num) {
  console.log("Number:", num);
});

// map - callback returns a new value
const doubled = numbers.map((num) => num * 2);
console.log("Doubled:", doubled); // [2, 4, 6, 8, 10]

// filter - callback returns true/false
const evens = numbers.filter((num) => num % 2 === 0);
console.log("Evens:", evens); // [2, 4]
