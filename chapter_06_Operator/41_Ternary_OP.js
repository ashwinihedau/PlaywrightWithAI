//Ternary operator
// condiotion ? true : false

let dipali_age = 18;
let dipali_will_goa = dipali_age >= 18 ? "Dipali can go" : "no goa";
console.log(dipali_will_goa);

let actualStatusCode = 200;
let expectedSatusCode = 200;
let test_result = actualStatusCode === expectedSatusCode ? "Pass" : "Fail";
console.log(test_result);

let enviornment = "staging";
let baseURL = enviornment === "prod"
    ? "https://www.prod.com"
    : "https://www.staging.com";
console.log(baseURL);

let isCI = "true";
let browsermode = isCI ? "headless" : "headed";
console.log("lunching Browser in:", browsermode, "mode");

let responseTime = 850;  //ms
let sla = 1000;  //ms
let slastatus = responseTime >= sla ? "within SLA" : "SLA Breached";
console.log(`Response: ${responseTime}ms - ${slastatus}`);

//Nested Ternary - Multiple condiotion
let age_ashwini = 31;
let is_ashwini_d = age_ashwini > 18 ? (age_ashwini > 26 ? "Yes_Drink" : "No_Drink") : "NO GOA";
console.log(is_ashwini_d);

//---------------------------------------------------

let statusCode = 404;
let category =
    statusCode < 300 ? "Success" :
        statusCode < 400 ? "Redirect" :
            statusCode < 500 ? "Client error" : "Server Error";

console.log(`Status ${statusCode}: ${category}`);

let temp = 35;
let feel = (temp >= 40) ? "Vey Hot" :
    (temp >= 30) ? "Hot" :
        (temp >= 20) ? "warm" :
            (temp >= 10) ? "Cool" : "Cold";
console.log("7. Temperature:", temp, "| Feel:", feel);
console.log(`Temperatue : ${temp} , Feel : ${feel}`);


//Assignment - maximum number between two numbers, by using the ternary operator
let a = 20;
let b = 21;

let max = a > b ? "a is a maximum number" : "b is a maximum number";
console.log(max);

//OR
let num1 = 12;
let num2 = 14;

let maxx = num1 > num2 ? num1 : num2;
console.log(`The maximum number is: ${maxx}`);

//Assignment2 - Maximumn number between the three numbers also by using turnary operator
let n1 = 30;
let n2 = 10;
let n3 = 40;

let max3 = (n1 > n2 && n1 > n3) ? n1 : (n2 > n3 ? n2 : n3);
console.log(`The maximum number is: ${max3}`);


//Practice
let score = 5;
let finalScore = score-- + 2;  //5 +2

console.log(score);  // 4
console.log(finalScore); //7

//Practice2
let x = 3;
let y = x++ * x;  // 3 * 4

console.log(x); //4
console.log(y); //12

//Practice3
let points = 8;
let total = ++points + points-- - --points;  // 9 + 9 - 7

console.log(points); //7
console.log(total); //11