// Checking Arrays

// Check if something IS an array
let result = Array.isArray([1, 2, 3]);
console.log(result);

let result1 = Array.isArray("a");
console.log(result1);

// every & some
let result2 = [80, 90, 85].every(s => s >= 70);
console.log(result2);  //true

let result3 = [80, 60, 85].every(s => s >= 70);
console.log(result3);  //false

// Playwright API 
[200, 201, 203].every(statusCode => statusCode > 200);

// some — AT LEAST ONE must pass
let result5 = [80, 90, 85].some(s => s > 70);
console.log(result5);

let result6 = [80, 60, 85].some(s => s > 70);
console.log(result6);

//arrow : s => s >= 70