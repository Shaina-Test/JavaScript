//Reverse a string using `split`, `reverse`, and `join` methods. 
let name = "Shaheena";
let reverserdstring = name.split('').reverse().join('');
console.log(reverserdstring);
//===========================================================
//Reverse a string using a function with a for loop. 
function riversing(name1){
    let reversedname = "";
for(let i = name1.length-1;i>=0;i--){
reversedname += name1[i];
}
return reversedname;
}
console.log(riversing("Jaffer"));
//=====================================================
//2nd time same Reverse with a loop. 
function againreverse(str1){
    let str2 = "";
    for(let i = str1.length-1;i>=0;i--){
str2 += str1[i];
    }
    return str2;
}
console.log(againreverse("Karam"));
//============================Third practice ===================================
function thirdreverse(str3){
    let str4 = "";
    for(let i = str3.length-1;i>=0;i--){
str4 += str3[i];
    }
    return str4;
}
console.log(thirdreverse("Third"));
//======================Fourth practice ========================================
function reverseastring(str5){
    let str6 = "";
for(let i=str5.length-1;i>=0;i--){
str6 += str5[i];
}
return str6
}
console.log(reverseastring("forth"));
//================================================
let Fifthreverse = function (str7){
return str7.split('').reverse().join('');
}
console.log(Fifthreverse("Fifth"));
//========================Arrow function ============================================
let sixthreverse = (str8) => str8.split('').reverse().join('');
console.log(sixthreverse("Sixth"));
//==================================================
// Reverse the Order of Words in a Sentence
// Write a function reverseWordOrder(sentence) that keeps each word spelled normally, but reverses the order in which the words appear.
// Input: "Playwright with JavaScript is fast"
// Expected Output: "fast is JavaScript with Playwright"
let str9 = "Madam is not madam";
function reversesentence(str9){
    let str10 = str9.split(' ').reverse().join(' ');
console.log(str10);}
reversesentence(str9);
//==================================================
function reverseWordOrder(sentence) {
  return sentence.split(' ').reverse().join(' ');
}

console.log(reverseWordOrder("Playwright with JavaScript is fast"));
// Output: "fast is JavaScript with Playwright"
//