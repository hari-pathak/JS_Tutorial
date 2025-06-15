//Array

//Special veriable that can hold multiple values in a single variable


// let fruits = ['apple', 'orange', 'mango']

// console.log(fruits[0])
// console.log(fruits[1])
// console.log(fruits[2])


// let numbers = [1,2,3,4,5]
// let mixed = ['text', 123, true]


// console.log(typeof mixed)

// it return object because arrays are a special kind of objects -- so typeof an array returns "object"


//best way to check if it's an array
// console.log(Array.isArray(mixed))

//array methods

// 1 .push() - Add to the end

// let arr = [1,2];
// arr.push(3)
// console.log(arr)

//2 .pop() - Remove from the end

// let num = [1, "hari", true];
// num.pop();
// console.log(num)

//3 .shift() - Remove from the start

// let arr = [1,2,3];
// arr.shift();
// console.log(arr)

//4 .unshift() - Add to the start

// let arr = [2,3]
// arr.unshift(4);
// console.log(arr)

//5 .splice - Add/Remove at any position

// let arr = [1,2,3,4,5];
// arr.splice(2,1);  //remove 1 item at index 2
// console.log(arr)

// arr.splice(1,0, "a", "b")  //add at index 1
// console.log(arr)


//6 .slice(start, end) - Copy part of the array 

let arr = [1,2,3,4];
let newArr = arr.slice(1,3)
console.log(newArr)


const num = [1,2,3,4,5,6,7,8,9]
let newnum = num.slice(4,7);
console.log(newnum)
