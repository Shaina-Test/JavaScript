//loops and other conceptsMaximum Number between two numbers, by using ternary operator
let a = 10;
let b = 20;
let max = (a>b) ? "a is maximum" : "b is maximum";
console.log(max);

a = 10;
b = 20; 
c = 30;
max = (a>b) ? "A is maximun" : (b>c) ? "B is maximum" : "C is maximum"; //nester trernary operator
console.log(max);