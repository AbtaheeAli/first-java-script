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

const sum = firstOperand + secondOperand
console.log(
  `Here is the total when you add ${valueOne} and ${valueTwo}: ${sum}`
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
