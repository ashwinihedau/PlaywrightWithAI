let greet = function (name) {
    return `Hello ${name}`;
}
let result = greet("Ashwini");
console.log(result);

//Arrow function
let greet2 = (name1) => "Hi " + name1;
let result2 = greet2("Ashu");
console.log(result2);

// If you want to make a normal function to arrow function. 
// Remove the keyword function, remove the keyword return, remove the curly braces, and use the =>

const doubleIt = n => n * 2;
console.log(doubleIt(10));

const printIt = name3 => console.log(name3);
printIt("Dutta");