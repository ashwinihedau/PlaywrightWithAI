let result = ["pass", "fail", "pass", "error", "fail"]

//indexOf - returns first index, or -1 if not found
result.indexOf("fail");  //1
result.indexOf("skip");  //-1

//lastIndexOf - searches from the last
result.lastIndexOf("fail"); //4

//includes - return boolean
result.includes("error"); //true
result.includes("skip"); //false

//find - return first matching element
let nums = [10, 25, 30, 45];
let r = nums.find(x => x > 20);  //25  //this is an arrow function
console.log(r);

//findIndex
nums.findIndex(n => n > 20); //1,2,3

//findLast
nums.findLast(n => n > 20); //45

//findLastIndex
nums.findLastIndex(n => n > 20); //3
console.log(nums);

