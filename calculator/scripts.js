const displayElement = document.getElementById("display");
let firstOperand = '';
let secondOperand = '';
let currentOperator = null;

function appendNumber(number) {
  if (currentOperator === null) {
    // Append the number to firstOperand
    firstOperand += number;
    displayElement.textContent = firstOperand || '0'; // Show the entered number
  } else {
    // Append the number to secondOperand
    secondOperand += number;
    displayElement.textContent = secondOperand || '0'; // Show the entered number
  }
}

function setOperator(operator) {
  if (firstOperand !== '') {
    currentOperator = operator;
    displayElement.textContent = operator; // Optionally show the operator
  }
}

function calculateResult() {
  if (firstOperand !== '' && secondOperand !== '' && currentOperator !== null) {
    const num1 = parseFloat(firstOperand);
    const num2 = parseFloat(secondOperand);
    let result;

    switch (currentOperator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        if (num2 === 0) {
          displayElement.textContent = "Error: Division by zero";
          return;
        }
        result = num1 / num2;
        break;
    }

    displayElement.textContent = result;
    firstOperand = result.toString(); // Convert to string for further input
    secondOperand = '';
    currentOperator = null;
  }
}

function clearDisplay() {
  firstOperand = '';
  secondOperand = '';
  currentOperator = null;
  displayElement.textContent = '0';
}
