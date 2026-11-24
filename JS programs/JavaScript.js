//To print any statment in the console we use console.log() function. It is used to print any statement in the console. It is a built-in function in JavaScript.
console.log("Hello Shaheena"); // Output: Hello Shaheena

//To declare a variable in JavaScript we use var, let and const keywords.
var name = "Shaheena"; // Using var
let age = 25; // Using let
const city = "New York"; // Using const
//let is block scoped and its value can be reassigned but cannot be redeclared. const is block scoped and its value cannot be reassigned or redeclared. var is function scoped and its value can be reassigned and redeclared.
let Married = false; // Using let
console.log(typeof name); // Output: string
console.log(typeof age); // Output: number
console.log(typeof city); // Output: string
console.log(typeof(Married)); // Output: boolean
//we can give the variable inside the brakets or without brakets. If we give the variable inside the brackets it will print the value of the variable. 
//we cannot redeclare a variable with the same name using let or const. We can reassign the value of a variable declared with let but not with const. We can reassign and redeclare a variable declared with var.
if (!Married) {
    console.log("Shaheena is married");
} else {
    console.log("Shaheena is not married");
}

while(age < 30) {
    age++;
    console.log("Shaheena is young");
    
}
let i = 20;
for(let i = 0; i <= 20; i++) {
    console.log("Shaheena is beautiful");
}

for (let j = 0; j <= 20; j++) {
    if (j % 2 == 0 && j % 5 == 0) //it prints the numbers which are divisible by 2 and 5. 
                                    //result is 10 only as both should statisfy the condition.
        if(j % 2 == 0 || j % 5 == 0) //it prints the numbers which are divisible by 2 or 5.
                                 // result is 0,2,4,5,6,8,10,12,14,15,16,18,20 as both should satisfy the condition.
        {
        console.log(j);
    }
}

Marks =[15,20,96,22,10,92]
console.log(Marks);
console.log(Marks.length); // Output: 6
console.log(Marks.push(100)); // Adding an element to the end of the array
console.log(Marks.pop()); // Removing the last element from the array
console.log(Marks.shift()); // Removing the first element from the array
console.log(Marks.unshift(5)); // Adding an element to the beginning of the array
Marks[4] = 9; // Changing the value of the 5th element in the array
console.log(Marks);

Let a = 10;
Let b = 20; 
Let c = 30;
let max = (a>b) ? "A is maximun" : (b>c) ? "B is maximum" : "C is maximum";
console.log(max);