
let Remainder = ""
let Average = ""

function calcAvgSquare(num1, num2, num3) {
  let number1 = parseInt(num1)
  let number2 = parseInt(num2)
  let number3 = parseInt(num3)
  let multiplier = Math.pow(number1,2)
  let answer = ((number1 + number2 + number3)/3)*multiplier
  alert(`The answer is ${answer}.`)
  return answer
  }

function divideTwo(num1, num2) {
  let firstNumber = parseInt(num1)
  let secondNumber = parseInt(num2)
  let division = Math.floor(firstNumber / secondNumber)
  let remainder = firstNumber % secondNumber
  alert(`The result of dividing ${firstNumber} by ${secondNumber} is ${division} with a remainder of ${remainder}.`)
  }

whatchaGonnaDo = prompt("Do you want to do an average calculation or a remainder of the division of two numbers calculation? Enter Average or Remainder.")
new_str = whatchaGonnaDo.toString()

if (whatchaGonnaDo === "Remainder") {
  let inptDivide1 = prompt("Enter the first of two numbers")
  let inptDivide2 = prompt("Enter the second of two numbers")
  divideTwo(inptDivide1, inptDivide2)
} else if (whatchaGonnaDo === "Average") {
  let inpt1 = prompt("Enter the first of three numbers")
  let inpt2 = prompt("Enter the second of three numbers")
  let inpt3 = prompt("Enter the third of three numbers")
  calcAvgSquare(inpt1, inpt2, inpt3)
} else {
  alert("You didn't give a valid answer.")}



