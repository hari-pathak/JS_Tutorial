// ES6+ (also called ECMAScript 2015 and beyond) is essential for writing modern, clean and efficient JavaScript - especially if you're using React or working with Node.js

// 1. let and const

//let age = 25;  //Can be reassigned
//const name = "Sita" //Cannot be reassigned

//2. Arrow Function (=>)

// const greet = () => console.log("Hello!")
//greet()


//3. Template Literals(``) -- use backticks for strings with variables

// const person = "Hari";
// console.log(`Hello, ${person}!`)


//4. Destructuring

// Object Destructuring

// const user = {name: 'Ram', age: 28};
// const {name, age} = user;
// console.log(name)
// console.log(age)

//Array Destructuring

// const nums = [1,2,3]
// const [first, second] = nums;

// console.log(first)
// console.log(second)


//6. Rest & Spread Operators


// Rest(...): Used to gather or collect the remaining items into an array.


// 1. function argument

// function sum(...numbers){
//     return numbers.reduce((a,b) => a+b,0)
// }

// console.log(sum(1,2,3,4))

// Step-by-step explanation
// 1. function sum(...numbers) defines a function named sum.
// 2. The ...numbers is called the rest parameter
        //* it collects all the arguments passed into the function and stores them in an array called numbers
        //* so if you call sum(1,2,3,4), then numbers will be [1,2,3,4]

// ...numbers collects all arguments into a single array



// const nums = [1,2,3,4]
// const total = nums.reduce((a,b) => a+b,0)
// console.log(total)



// 2. destructuring arrays

// const [first, second, ...rest] = [10,20,30,40,50]

// console.log(first)
// console.log(second)
// console.log(rest)


//3 Destructuring Objects
// const user = {
//     name: "Sita",
//     age: 25,
//     country: "Nepal"
// };

// const {name, ...otherDetails} = user;
// console.log(name)
// console.log(otherDetails)



//Spread Operator(...) -- Used to spread out or expand the contents of an array or object.

//if a box containes items, the spread operator opens the box and lays out the items one by one.

// const numbers = [1,2,3,4,5,6,7,8,9]
// console.log(...numbers)

//Combine arrays

// const a = [1,2]
// const b = [3,4]
// const combined = [...a, ...b]
// console.log(combined)


//Spread into objects

// const obj1 = {a:1, b:"hari"}
// const obj2 = {c:'Ram', d:4}
// const merged = {...obj1, ...obj2}
// console.log(merged)


//spreading strings

// const word= "Hi";

// const letters = [...word]
// console.log(letters)

["H", "i"] //each character becomes an element of the array



//Spread the array into individual names

// function greetAll(...names){
//     for(let name of names){
//         console.log(`Hello, ${name}!`)
//     }
// }

// const guests = ["Alice", "Bob", "charlie"]

// greetAll(...guests)