//Palindrome Word reads the same backward as forward. eg madam 
let pal1 = "Madam"
let pal2 ="";
function palindrome(pal1){
    for(let i = pal1.length-1;i>=0;i--){
pal2 += pal1[i];
    }
    return pal2;}
    if (pal1 === pal2){
console.log("Its a palindrome");}
else{
    console.log("Its not a  palindrome");
}
console.log(palindrome(pal1));
//====================================================================
let pal3 = "Madam";
function palindrometwo(pal3){
    let pal4 = "";
    for (let i = pal3.length-1;i>=0;i--){
        pal4 += pal3[i];
    }
    if (pal3.toLowerCase() === pal4.toLowerCase()){
console.log("Hooray");}
else {
    console.log("Check again");
}return pal4;
}console.log(palindrometwo(pal3));
//=====================================================================
let pal5 = "Madam";
function palindromethree(pal5){
     let pal6 = pal5.split('').reverse().join('');
   if (pal5.toLowerCase() === pal6.toLowerCase()){
    console.log("Hammayya");
}else {
    console.log("Ayyo");
}

}palindromethree(pal5);
//===================================================================




