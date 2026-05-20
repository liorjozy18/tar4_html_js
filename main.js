import { add, subtract, multiply, divide } from "./functions.js";

let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));
let operator = prompt("Enter operation: +, -, *, /").trim();

let result;

switch (operator) {
    case "+":
        result = add(num1, num2);
        break;

    case "-":
        result = subtract(num1, num2);
        break;

    case "*":
    case "x":
    case "X":
        result = multiply(num1, num2);
        break;

    case "/":
    case ":":
        result = divide(num1, num2);
        break;

    default:
        result = "Invalid operation";
}

console.log("Result:", result);

document.getElementById("result").innerText = "Result: " + result;

alert("Result: " + result);