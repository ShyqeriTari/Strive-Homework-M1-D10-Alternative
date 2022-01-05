  /*   JS EXERCISES

        21) Given variables x = "John" and y = "Doe", write on the console "John <> Doe"
        22) Create an object with properties such name, surname, email
        23) Delete the email property from the previously created object
        24) Create an array with 10 strings in it
        25) Print in the console every string from the previous array
        26) Create an array with 100 random numbers in it
        27) Write a function to get the maximum and minimum values from the previously created array
        28) Create an array of arrays, in which every array has 10 random numbers
        29) Create a function that gets 2 arrays as parameters and returns the longest one
        30) Create a function that gets 2 arrays of numbers as parameters and returns the one with the higher sum of values
*/

let x = "John"
let y = "Doe"
console.log(x + " <> " + y)

let anObj = {
    name: "Mary",
    surname: "Louis",
    email: "mary.louis@gmail.com"
}

console.log(anObj)

delete anObj.email
console.log(anObj)

let anArr = []

for (let i = 1; i <= 10; i++){
    anArr.push(i.toString())
}
console.log(anArr)

for (let i = 0; i < anArr.length; i++) {
    console.log(anArr[i])
}

let otherArr = []

for (let i = 0; i < 100;i++) {
    otherArr.push(Math.floor(Math.random() * 100))
}

console.log(otherArr)

let min = 101
let max = 0
function maxAndMin() {
    for(let i = 0; i < otherArr.length; i++){
        if (otherArr[i] > max) {
           max = otherArr[i]
        
    } else if (otherArr[i] < min ){
min = otherArr[i]
    }
}

    console.log( max, min)
}

maxAndMin()

let arrOfArr = [[],[],[]]

for (let j = 1; j <=10; j++){
for (let i = 0; i < arrOfArr.length; i++) {
    arrOfArr[i].push(Math.floor(Math.random() * 10))
}
}

console.log(arrOfArr)

function longestArray (arr1, arr2) {
    if (arr1.length > arr2.length){
        console.log(arr1 + " is longer than " + arr2)
    } else if (arr2.length > arr1.length){
        console.log(arr2 + " is longer than " + arr1)
    } else {
        console.log(arr1 + " length is equal to " + arr2 + " length")
    }
}

longestArray(["1",2,"3",4],[2,"3",4])

        let aOne = 0
        let aTwo = 0
function higherArrValue(array1, array2) {

    for (let i = 0; i < array1.length; i++){
        aOne += array1[i]
    }
    for(let i = 0; i < array2.length; i++){
        aTwo += array2[i]
    }
    if (aOne > aTwo) {
console.log(aOne + " is higher than " + aTwo)
} else if (aOne < aTwo) {
    console.log(aTwo + " is higher than " + aOne)
    } else {
        console.log (aOne + " is equal to " + aTwo)
    }
}

higherArrValue([1,1,1,1,100,2], [1,1,1,1,100,2])