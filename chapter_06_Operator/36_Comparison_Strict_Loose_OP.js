// number == string
console.log(42 == "42"); // == -> loose compasion    true
console.log(42 === "42"); //data type and converted value  false 
console.log(42 == "45"); //value different  false


console.log(5 === 5);   //true
console.log(5 === "5");  //false

console.log(5 == 5);    //true
console.log(5 == "5");  //true 

console.log(0 == ""); // ?  "" = conveted to 0 - checked by the loose   true
console.log(0 === "");    //false


console.log(true == 1);  //true
console.log(false == 0);  //true
console.log(true == "1");  //true
console.log(true == 2);  // false


console.log(5 != "5"); // false , 5 = int, "5" string, both of them are not equal? - lose couple
console.log(5 !== "5"); // true ( value, dataType)
//console.log(5 !=== "5"); This doesn't excit


// === Strict check we will check for both the datatype and value
// == Lose check we will check either value or data type.