// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// const { number } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

// PSEUDOCODE: We invoke the describe/it method with people as the argument. In plain words we explain what the function does, "takes in an array of objects and returns an array with a sentence about each person with their name capitalized". We then provide an argument for the function to call on. Using toEqual we then chain it with the expected output.

const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]

describe("bigPeople", () => {
  it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized", () => {
    expect(bigPeople(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]
    )
  })
})

// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// b) Create the function that makes the test pass.
// Pseudocode: we declare a function named bigPeople that takes in an object as its parameter. Using .split method were going to split the 'name' key into an array and capitalize the 0 index with .toUpperCase. Now that we have the first letter capitalized we add it to the sliced array of words so together they will form the key with capitalized words. Then we add it to the outputted string using interpolation. 

function bigPeople(object) {
  let fullSentence = object.map(object => object.name.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ") + ` is ${object.occupation}.`)
  return fullSentence
}


// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

describe("remainder", () => {
  it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.", () => {
    expect(remainder(hodgepodge1)).toEqual([2, 0, -1, 0])
    expect(remainder(hodgepodge2)).toEqual([2, 1, -1])
  })
})

// b) Create the function that makes the test pass.
// Pseudocode: We create a function named remainder and set the parameters to arr. Inside the function we declare a variable div3 and its going to equal the arr.filter so we can filter every element that is strictly equal to an number to a new array. We then return div3.map so that we can iterate through the whole array and return every number modulo 3. ez

const remainder = (arr) => {
  let div3 = arr.filter(value => typeof value === 'number')
  return div3.map(arr => arr % 3)
}

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

describe("cubeAndSum", () => {
  it("takes in an array of numbers and returns the sum of all the numbers cubed", () => {
    expect(cubeAndSum(cubeAndSum1)).toEqual(99)
    expect(cubeAndSum(cubeAndSum2)).toEqual(1125)
  })
})

// b) Create the function that makes the test pass.
// Pseudocode: Create ba function named cubeAndSum that takes in array as its parameter. Declare a variable named cubed and its gonna equal the mapped array with their values to the power of 3. Declare a variable named sum and set it to 0. We're gonna run a for loop on cubed and add each value to sum( which starts with 0) and this should return us the sum of every number included in the array named cubed. 

function cubeAndSum(array) {
  let sum = 0
  let cubed = array.map(value => value ** 3)
  for (let i = 0; i < cubed.length; i++) {
    sum += cubed[i]
  }
  return sum
}

