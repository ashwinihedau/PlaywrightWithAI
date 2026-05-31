let tests = ["login", "checkout", "search"];

for (let i = 0; i < tests.length; i++) {
    console.log(tests[i]);
}

console.log("----------------------------------");

//for...of (cleanest for value)
for (test of tests) {
    console.log(tests);
}

console.log("----------------------------------");

//forEach

tests.forEach((i, index) => {
    console.log(i, index);
});

console.log("----------------------------------");

const students = ["Alice", "Bob", "Charlie"];
//for....in
for (let student in students) {
    console.log(student, "->", students[student]); //index = in
    console.log(students[student]);
}