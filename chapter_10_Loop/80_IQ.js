for (let i = 0; i < 3; i++) {
    if (i === 1) continue;   //if - this is the one line if condition is true then it will continue and console.log will not print and it will increment the value
    console.log(i);  //the bove if condition is false then only this line will execute ---output will be 0, 2
}   