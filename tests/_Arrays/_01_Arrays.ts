//arrays and array methods
let fruits = ["apple", "banana", "Kiwi"]
console.log(fruits);
console.log(fruits.length);
fruits.unshift("water"); //add value at the first index
console.log(fruits);
fruits.pop();//removes the last index value
console.log(fruits); 
fruits.shift(); //removes first index value
console.log(fruits); 
fruits.push("jamun"); //add in last index
console.log(fruits);
let f1 = fruits.includes("jamun");
console.log(f1);
let f2 = fruits.indexOf("jamun"); //returns index of the value
console.log(f2);
let f3 = fruits.indexOf("Dragon"); // returns -1 as value not present in the array
console.log(f3);
fruits.unshift("jamun");
console.log(fruits);
let f4 = fruits.lastIndexOf("jamun");
console.log(f4);
let nums1 = [9, 40,28,23,43]
let f5 = nums1.find(x => x>20); //returns value of the first element
console.log(f5);
let f6 = nums1.filter(x => x > 20);
console.log(f6);//Return all the elements of the array which are greater, or according to the condition. 
let f7 = nums1.findIndex(x => x > 20);
console.log(f7);
let f8 = nums1.findLast(x => x > 20);
console.log(f8);
let f9 = nums1.findLastIndex(x => x > 20);
console.log(f9);
//===============================================================
 let students = ["Moratti", "Dominic", "Isabella"]
for(let i=0;i<students.length;i++)
{
    console.log(students[i]);
}
// //==============================================================
for (stud of students){
    console.log(stud);
}
//=========================================
for (let stud1 in students){
    console.log(stud1 ,"->" ,students[stud1]);
}
//======================================================
// array.forEach(function(currentValue, index, array) {
//   // your logic here
// });

// // Or using arrow functions:
// array.forEach((item, index) => {
//   // your logic here
// });
students.forEach((i,index)=>{
    console.log(i, index);
})
//================================================
let s1 = nums1.map(x => x>20 ? "Pass" : "Fail");
console.log(s1);
//============================================================
let s2 = nums1.filter(x => x>20);
console.log(s2);
//==============================================
let s3 = nums1.reduce((a,b) => a+b,0);
console.log(s3);
//===============================================






