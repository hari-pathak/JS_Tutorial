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

// let arr = [1,2,3,4];
// let newArr = arr.slice(1,3)
// console.log(newArr)


// const num = [1,2,3,4,5,6,7,8,9]
// let newnum = num.slice(4,7);
// console.log(newnum)


//map(); --creates a new array 

// let nums = [1,2,3,4];
// let doubled = nums.map(num => num * 2);
// console.log(doubled)



// const users = [
//     { id:1, name: "Hari" },
//     {id:2, name: "Sita"},
//     {id:3, name: "Ram"}
// ]

// const names = users.map(user => user.name);
// console.log(names)


// const users = [
//     { id:1, name: "Hari", class: 11 },
//     {id:2, name: "Sita", class: 12}, 
//     {id:3, name: "Ram", class: 10}
// ]

// const details = users.map(user => `${user.name} = ${user.class}`)

// console.log(details)

//Add index to each item

// const fruits = ['apple', 'banana', 'mango'];

// const withIndex = fruits.map((fruit, index) => `${index+1}. ${fruit}`)

// console.log(withIndex)


//change values conditionally

// const marks = [90,45,78,33]

// const status = marks.map(mark => mark>50 ? "Pass" : "Fail")

// console.log(status);


// .filter -- creates a new array with only the elements that pass a test condition

// const numbers = [1,2,3,4,5,6];

// const evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log(evenNumbers)


//filter string with length > 4

// const fruits = ['apple', 'mango', 'orange', 'pear', 'abc']

// const longstring =  fruits.filter(fruit => fruit.length > 4)

// console.log("The array of fruits that has more than 4 character", longstring)


//filter users above age 18

// const users = [
//     {name: 'Hari', age: 17},
//     {name: "Sita", age:20},
//     {name: "Ram", age: 15},
//     {name: "Gita", age: 25}
// ]


//  const adults = users.filter(user => user.age > 18)
//  console.log(adults)


// .find() --returns the first element in the array that satisfies a condition  -- if no match is found, it returns undefined

// const numbers = [1,3,5,8,10];

// const firstEven =  numbers.find(num => num % 2 === 0);
// console.log(firstEven)


//find a user by name

// const users = [
//     {id:1, name: "Ram"},
//     {id:2, name: "Sita"},
//     {id:3, name: "Hari"}
// ]

// const user = users.find(d => d.name === "Sita")
// console.log(user)


//find a number greater than 50

// const marks = [40, 45, 55, 60]

// const firstabove50 = marks.find(mark => mark > 50)
// console.log(firstabove50)


//find an item not in the list

// const names = ["Aayush", "Yogesh", "Manish"]
// const result = names.find(name => name === "Krish")
// console.log(result)


//use with index

// const nums = [5,10,15,20]
// const found = nums.find((num, index) => {
//     console.log("Checking index:", index)
//     return num > 10;
// })

// console.log(found)


// .reduce()  --used to reduce an array into a single value

// accumulator - collects the result(start as initialValue)
//currentValue - current element in the array
//initialValue - starting value for the accumulator

//sum of all numbers

// const numbers = [10,20,30];

// const total = numbers .reduce((acc, curr) => acc + curr, 0);

// console.log(total)


//multiply all numbers

// const nums = [2,3,4]

// const product = nums.reduce((acc, curr) => acc * curr, 1);
// console.log(product)






