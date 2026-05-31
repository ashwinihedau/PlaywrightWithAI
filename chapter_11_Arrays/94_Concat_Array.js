let a = [1, 2];
let b = [3, 4]

// let d = a + b;  -this is not join properly so we will use concat
// console.log(d);   o/p-1,23,4

let c = a.concat(b);
console.log(c);

// spread (modern way) - concatenation. (...)
let d = [...a, ...b];
console.log(d);

//join
let s = ["pass", "fail", "skip"].join("|");
console.log(s);