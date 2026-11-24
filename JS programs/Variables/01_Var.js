/* variables are used to store data values, Var is the original keyword it is function scoped 
which can be redeclared and reassigned multiple times, which means not trust worthy it can be changed
anywhere and whatever
in the below example var a has declared twice with different names it gives 2 different names
it will be always confusing which value to be used in realworld scenario, var is not used anywhere
by professionals*/


var a = "Jaffer"; //global scope variable, it can be used anywhere in the program
console.log("this is my name", a);

function myname() {
     var a = "Shaheena";//local scope variable, it will be used only inside this function, it will not affect the global variable
    console.log("this is my name", a);

}myname();
