//For loop
// for(initialization;condition,increment/decrement)
let name = "shaheena";
for(let i = 0;i<name.length;i++){
    console.log(i);
}

//======================================================================
 
//for of, for in, for each

for(let i = 0;i<100;i++){
    if(i%3 === 0){
        console.log("Fizz");
    }else if (i%5 === 0){
        console.log("Buzz");
    } else if (i%3 === 0 && i%5 ===0){
        console.log("FizzBuzz");
    }else {
        console.log(i);
    }
}

//===========================================================
//Bizz-Bazz-Boff (Three Divisors)Loop numbers from 1 to 150.
// Multiples of 3 $\rightarrow$ "Bizz"
// Multiples of 5 $\rightarrow$ "Bazz"
// Multiples of 7 $\rightarrow$ "Boff"
// Combine them when numbers share multiples 
// (e.g., 15 $\rightarrow$ "BizzBazz", 105 $\rightarrow$ "BizzBazzBoff").

for (let i = 1; i <= 150; i++) {
  if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0) {
    console.log("BizzBazzBoff");
  } else if (i % 3 === 0 && i % 5 === 0) {
    console.log("BizzBazz");
  } else if (i % 3 === 0 && i % 7 === 0) {
    console.log("BizzBoff");
  } else if (i % 5 === 0 && i % 7 === 0) {
    console.log("BazzBoff");
  } else if (i % 3 === 0) {
    console.log("Bizz");
  } else if (i % 5 === 0) {
    console.log("Bazz");
  } else if (i % 7 === 0) {
    console.log("Boff");
  } else {
    console.log(i);
  }
}