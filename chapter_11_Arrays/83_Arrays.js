//Different ways of creating array
//first way - this is directly accessing
let browser = ["Chrome", "Opera", "Firefox", "Safari"];

//Second way by using constructor
//Creating empty array
let score = new Array(3);  //3 is the lenght  ---o/p - [ <3 empty items> ]
//lets fill the values
score[0] = 1;
score[1] = 1;
score[2] = 1;

//new is a keyword
//Third way
let score2 = new Array(1, 2, 3); //we have directly assign the value
console.log(score);
console.log(score2);

let numbers = new Array(100, 200, 300, 400, 500);  //if we are using new keyword then the () should use
console.log(numbers);

//fourth way 
let test = Array.of(10, 11, 12, 13);
console.log(test);

//Array.from -> divide the string or the number in multidimention
let chars = Array.from("hello");
//[ 'h', 'e', 'l', 'l', 'o' ]
console.log(chars);