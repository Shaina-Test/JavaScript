//How to write the objects? 
const obj1 = { a:1 , b:2};
const obj2 = {c: 3, d: 4};
//Object 1 and Object 2 are the object reference names. Actual objects are A1, B2, C3, and D4. 
//=================================
//Objects within the objects 
const obj3 = {
    name1: "Embrace",
    address:{
city: "Hyd"
    }
}
//=================================
const key = 'Hello';
const obj = 
{[key]: 'Shaheena'};
console.log(obj);
//===========================
//There are two ways to retrieve the value for a given key, dot notation and bracket notation.
const obj4 = { greeting: 'hello world' };

obj4.greeting;
// => hello world

obj4['greeting'];
// => hello world

// Bracket notation also works with variables.
const key1 = 'greeting';
obj4[key1];
// => hello world
//===================================
const obj5 = { greeting1: 'hello world' };

obj5.greeting1 = 'Hi there!';
obj5['greeting1'] = 'Welcome.';

obj5.newKey1 = 'new value 1';
obj5['new key 2'] = 'new value 2';

const key2 = 'new key 3';
obj5[key2] = 'new value 3';
console.log(obj5);
//====================================
