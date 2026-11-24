//Find if the strings are anagrams. 
let ana1 = "North";
let ana2 = "Thorn";
if (ana1.length !== ana2.length){
    console.log("is not a Anangram");
}
let ana3 = ana1.toLowerCase().split('').sort().join('');
let ana4 = ana2.toLowerCase().split('').sort().join('');
if(ana3 === ana4){
    console.log("its a anagram");
}else {
    console.log("Not");
}
