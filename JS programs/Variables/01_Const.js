/* const is the keyword used to declare a constant variable in JavaScript. It is block scoped and its value cannot be reassigned or redeclared 
cannot be reassigned and redeclared , its value is fixed once assigned */

const name = "John"; // Declaring a constant variable using const
console.log(name); // Output: John  

//name = "Doe"; // This will throw an error because 'name' is a constant and cannot be reassigned
//const name = "Smith"; // This will also throw an error because 'name' has already been declared as a constant

function myname() {
    const name = "Shaheena"; // Declaring a constant variable inside a function
    console.log("this is my name", name); // Output: this is my name Shaheena
}   myname();
