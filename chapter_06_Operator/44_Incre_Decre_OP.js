// // Pre-Increment
// let a = 10;
// let b = ++a;

// console.log(b);  //11
// console.log(a);  //11


// //Practice
// let score = 5;
// let finalScore = score-- + 2;  //5 +2

// console.log(score);  // 4
// console.log(finalScore); //7

// //Practice2
// let x = 3;
// let y = x++ * x;  // 3 * 4

// console.log(x); //4
// console.log(y); //12

//Practice3
let points = 8;
let total = ++points + points-- - --points;  // 9 + 9 - 7

console.log(points); //7
console.log(total); //11

//Practice4 

let n = 2;
let boss = (n++ * ++n) - (n-- + --n);  //(2 * 4) - (4 + 2) = 8 - 6 = 2

console.log(n); //2
console.log(boss); //2