// Rest and Spread Operator

// Example Rest --farak farak number combine hunxa in array

// function addNumber(a,b,c,...other){
//     console.log(other)
//     return a + b + c
// }

// const res = addNumber(2,5,6,8,9,10,11)
// console.log(res)  //--received as a combined


//Spread --combined number divide hunxa

var names = ['Ajay', 'Anuj', 'Vivek', "Ram"]  //--passed as a combined

// function getNames(name1, name2, name3){
//     console.log(name1);
//     console.log(name2);
//     console.log(name3)
// }

// getNames(names[0], names[1], names[2]) 

// better option

function getNames(name1, name2, name3 ){
    console.log(name1, name2, name3)
}

getNames(...names)


