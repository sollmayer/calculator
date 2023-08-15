function add(a,b) {return a + b}
function subtract(a,b) {return a - b}
function multiply(a,b) {return a * b}
function divide(a,b) {return a / b}

let operator = '';
let firstNumber = 0;
let secondNumber = 0;

function operate(operator, firstNumber, secondNumber) {
    if(operator === "+") return add(firstNumber, secondNumber);
    else if(operator === "-") return subtract(firstNumber, secondNumber);
    else if(operator === "*") return multiply(firstNumber, secondNumber);
    else if(operator === "/") return divide(firstNumber, secondNumber);
}

function populateDisplay(item){
    let display = document.querySelector('.display p');
    display.textContent += `${item}`
}
