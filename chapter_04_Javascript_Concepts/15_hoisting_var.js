console.log(x);
var x = 10;
console.log(x);

//behind the scenes:

//var x:              <--- hoisted with undefined
//console.log(x);     <--- undefined
// x = 10;            <--- assignment stays in place
//console.log(x);     <--- 10

//var greeting
console.log(greeting);
var greeting = "Hello";
console.log(greeting);