function calcAvgSquare(num1, num2, num3) {
  let number1 = parseInt(num1)
  let number2 = parseInt(num2)
  let number3 = parseInt(num3)
  let multiplier = Math.pow(number1,2)
  let answer = ((number1 + number2 + number3)/3)*multiplier
  console.log(answer)
  return answer
  }

let inpt1 = prompt("Enter the first of three numbers")
let inpt2 = prompt("Enter the second of three numbers")
let inpt3 = prompt("Enter the third of three numbers")

calcAvgSquare(inpt1, inpt2, inpt3)


/*
Example function

function testEven(num1, num2) {
  let number1 = num1
  let number2 = num2
  if (number1 % 2 == 0) {
    console.log(`${number1} is an even number!`)
  } else {
    console.log(`${number1} is not an even number.`)}
  if (number2 % 2 == 0) {
    console.log(`${number2} is an even number!`)
  } else {
    console.log(`${number2} is not an even number.`)}
  }

let inpt1 = prompt("Enter your first number")
let inpt2 = prompt("Enter your second number")

testEven(inpt1, inpt2)
*/