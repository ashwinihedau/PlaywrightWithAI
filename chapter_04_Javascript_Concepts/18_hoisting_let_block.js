//let is blocked scoped

let x = "global";

if (true) {
    // TDZ for block scoped "x" starts here
    //console.log(x);   //Referenceerror (NOT "global")
    let x = "block";
    console.log(x);

}
console.log(x);