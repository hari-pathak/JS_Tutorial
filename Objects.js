//Objects -- collection of related data written as key-value pairs.

//Real-world thing that has properties

// A car has: brand, color, speed etc
// A user has name, age, email

// const person = {
//     name: "Ram",
//     age: 22,
//     isStudent: true
// }

// name, age, isStudent are keys 
// "Hari", 22, true are values

// Accessing Object properties

// dot notation

// console.log(person.name)
// console.log(person.age)

// console.log(person["age"])
// console.log(person["name"])
// console.log(person["isStudent"])

// person.country = "Nepal"
// delete person.age;

// console.log(person)

//Nested Objects

// const user = {
//     name: "Ram",
//     address: {
//         city: "Bharatpur",
//         town: "Krishnapur"
//     }
// };

// console.log(user.address.city)


//loop through an array

// const personDetail = {
//     name: "Ram",
//     age: 23,
//     country: "Nepal"
// }

// for(let key in personDetail){
//     console.log(key + ":", personDetail[key]);
// }


//looping thourgh a nested object

// const user = {
//     name: "Sita",
    
//     address: {
//         city: "Pokhara",
//         zip: 33700
//     }
// };

// for(let key in user.address){
//     console.log(key + ":" + user.address[key])
// }

// console.log(user.name)


//Object Destructuring -- extracting values from an object

// const person = {
//     name: "Sita",
//     age: 25,
//     city: "Pokhara"
// }

// const {name, age, city} = person

// console.log(name)
// console.log(age)
// console.log(city)

// Rename Variables

// const {name: username} = person

// console.log(username)

// Nested Object Destructuring

// const employee = {
//     name: "Ram",
//     address: {
//         city: "Bharatpur",
//         town: "Krishnapur"
//     }
// };

// const {name, address: {city, town}} = employee

// console.log(name)
// console.log(city)
// console.log(town)


// const product = {
//     title: "Laptop"
// }

// const {title, price=5000} = product;

// console.log(title);
// console.log(price)



