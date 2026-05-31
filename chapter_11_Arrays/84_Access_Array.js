//Accessing & Modifying

let status = ["pass", "fail", "skip"];
console.log(status[0]);
console.log(status[1]);
console.log(status[2]);

//status.at is using where we want to use index as -1, -2....
console.log(status.at(-1)); //skip
console.log(status.at(-2)); //fail
console.log(status.at(-3)); //pass

//Modify
status[1] = "blocked";
console.log(status);