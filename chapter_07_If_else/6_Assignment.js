let a = 10.5;
let b = 12;
let c = 10;

if (a === b === c) {
    console.log("the triangle is equilateral");
}
else if (a === b || b === c || a === c) {
    console.log("The triangle is isosceles");
}
else {
    console.log("The triangle is scalene");
}
