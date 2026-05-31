// ### Question 1 — Even or Odd

// Problem: Take a number and print whether it's even or odd.

// let number = 7;

let number = 7;

if (number / 2 === 0) {
    console.log("Number is Even");
}
else {
    console.log("Number is Odd");
}

// ### Question 2 — Student Grade Calculator

// Problem: Take marks (0–100) and print the grade based on these rules:

// - 90 and above → A

// - 80–89 → B

// - 70–79 → C

// - 60–69 → D

// - Below 60 → Fail

let grade = 72;

if (grade >= 90) {
    console.log("Grade is A");
}
else if (grade <= 89) {
    console.log("Grade is B");
}
else if (grade <= 79) {
    console.log("Grade is C");
}
else if (grade > 60) {
    console.log("Grade is D");
}
else {
    console.log("Grade is A");
}

// Question 3 — Leap Year Check

// Problem: Take a year and check if it's a leap year.

// Rules:





// Divisible by 4 AND not divisible by 100 → Leap year



// OR divisible by 400 → Leap year



// Else → Not a leap year