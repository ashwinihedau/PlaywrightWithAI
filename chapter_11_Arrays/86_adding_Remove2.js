let arr = [1, 2, 3];
arr.push(4, 5, 6);
console.log(arr);
//O/p - arr = [1,2,3,4,5,6];
// index = 0,1,2,3,4,5;

//Splice(start, deletecount,...,itemsToAdd)
// arr.splice(2, 1);  //from 2nd incex delete one number
// console.log(arr); //[1,2,4,5,6]

//0 means dont delete and add on the specific index
// arr.splice(2, 0, 99);
// console.log(arr);  //[1,2,99,3,4,5,6]

//1 means delete and replace the number
// arr.splice(2, 1, 99);
// console.log(arr);  //[1,2,99,4,5,6]

arr.splice(1, 2, 10, 20);  //on 1st index i want to delete 2 number and replace the vakue of  1st and 2nd index by 10, 20 
console.log(arr); //[1,10,20,4,5,6] 

