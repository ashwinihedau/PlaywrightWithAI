let value = 10; //Define 
console.log(value);

value = 20; //Reassign value
console.log(value);

value = value + 10;
value = value + 10;
console.log("value is:" ,value);

//let - block scope
//Block {} can be:
//if() {}
//for() {}
//function name() {}

let testing = "pending";

if (testing == "pending") {
   let value1 = 30;
   console.log(value1)
}

//console.log(value1);ReferenceError: value1 is not defined

//let testing = "Repeat"; SyntaxError: Identifier 'testing' has already been declared
