//With parameter, no return type

function greetByname(name) {
    console.log("Hi", name);
}

greetByname("Ashwini");

let result = greetByname("Anurag");  //This is also calling
console.log(result);         //no return


function begger(money) {
    console.log("Thanks", money);
}
begger(200);

let returnMesomething = begger(100);
console.log(returnMesomething);  // no return