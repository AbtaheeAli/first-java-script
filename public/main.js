const numberOfCoffee = 'one'
const fullName = 'Abtahee Ali'
console.log(
  `Hi, my name is ${fullName} and I drink ${numberOfCoffee} coffee per day.`
)

const userName = window.prompt('What is your name?')
console.log(`It is nice to meet you, ${userName}!`)

const valueOne = window.prompt('Please input a number.')
const valueTwo = window.prompt('Please input another number.')

const firstOperand = parseFloat(valueOne)
const secondOperand = parseFloat(valueTwo)

const add = firstOperand + secondOperand
console.log(
  `Here is the total when you add ${valueOne} and ${valueTwo}: ${add}`
)

const subtraction = firstOperand - secondOperand
console.log(
  `Here is the total when you subtract ${valueOne} and ${valueTwo}: ${subtraction}`
)

const product = firstOperand * secondOperand
console.log(
  `Here is the total when you multiple ${valueOne} and ${valueTwo}: ${product}`
)

const quotient = firstOperand / secondOperand
console.log(
  `Here is the total when you divide ${valueOne} and ${valueTwo}: ${quotient}`
)

const remainder = firstOperand % secondOperand
console.log(
  `Here is the remainder of ${valueOne} and ${valueTwo}: ${remainder}`
)

const numbers = [
  100,
  45,
  51,
  59,
  78,
  10,
  74,
  79,
  20,
  27,
  13,
  77,
  74,
  75,
  19,
  54,
  2,
  32,
  83,
  52,
  74,
  75,
  34,
  47,
  24,
  61,
  74,
  78,
  83,
  40,
  71,
  66,
  93,
  8,
  38,
  49,
  84,
  46,
  39,
  41,
  47,
  93,
  83,
  87,
  51,
  72,
  31,
  72,
  86,
  49,
  48,
  6,
  91,
  39,
  81,
  87,
  3,
  59,
  52,
  62,
  101,
  46,
  82,
  29,
  61,
  59,
  59,
  6,
  72,
  88,
  55,
  5,
  36,
  55,
  83,
  60,
  92,
  36,
  19,
  26,
  37,
  81,
  97,
  21,
  6,
  3,
  6,
  8,
  26,
  99,
  71,
  12,
  12,
  21,
  47,
  31,
  44,
  2,
  14,
  88,
  26,
]

let smallestNumber = numbers[0]
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] < smallestNumber) {
    smallestNumber = numbers[i]
  }
}

let largestNumber = numbers[0]
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > largestNumber) {
    largestNumber = numbers[i]
  }
}

let sum = numbers[0]
for (let i = 1; i < numbers.length; i++) {
  sum = sum + numbers[i]
}

const average = sum / numbers.length

console.log(`This is the smallest number: ${smallestNumber}`)
console.log(`This is the largest number: ${largestNumber}`)
console.log(`This is the sum of all the numbers: ${sum}`)
console.log(`This is the average of all the numbers: ${average}`)
