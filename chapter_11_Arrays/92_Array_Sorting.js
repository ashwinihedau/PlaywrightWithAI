let fruits = ["Banana", "Apple", "Cherry"]
fruits.sort();
console.log(fruits);

let number = [2, 4, 1];
number.sort();
console.log(number);

//By default, arrays are sorted in lexicographic order. On the basis of first charac
let num = [10, 1, 21, 2];
num.sort();
console.log(num);

//if we want normal sorting
let nums = [10, 1, 21, 2];
nums.sort((a, b) => a - b);  //ascending
console.log(nums);
nums.sort((a, b) => b - a); //descending
console.log(nums);
// nums.sort((c, d) => d - c); //descending  ---any alphabets can use instead of  & b
// console.log(nums);