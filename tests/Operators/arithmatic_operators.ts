//Arithmatic Operators
//+ - * / % **
let a = 10;
let b = 20;
console.log(a+b); //Addition
console.log(a-b); //Subtraction
console.log(a*b); //Multiplication
console.log(a/b); //Division
console.log(a%b); //Modulus
console.log(a**b); //Exponentiation

//increment and Decrement Operators
//  * a++ means use first, increase later.
// *  ++a means increase first, use later

let c = 10;
console.log(c++); //Post-increment
console.log(++c); //Pre-increment
console.log(c--); //Post-decrement
console.log(--c); //Pre-decrement 

//Examples of increment aqnd decrement operators
let l = 5; 
let m = l++;
let n = ++l;
console.log(l);
console.log(m);
console.log(n);

let p = 4;
let q = ++p + ++p;

console.log(p);
console.log(q);