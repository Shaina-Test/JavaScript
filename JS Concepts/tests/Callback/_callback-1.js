function greet(){
    console.log("Hello");
}
function greeting(callingback){
console.log("calledback_1");
callingback();
console.log("calledback_2");

}greeting(greet);
//=====================================================================
