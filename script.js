function add(a,b) {return a + b}
function subtract(a,b) {return a - b}
function multiply(a,b) {return a * b}
function divide(a,b) {return a / b}

let operator = null;
let firstNumber = 0;
let secondNumber = 0;

function operate(operator, firstNumber, secondNumber) {
    if(operator === "+") return add(firstNumber, secondNumber);
    else if(operator === "-") return subtract(firstNumber, secondNumber);
    else if(operator === "*") return multiply(firstNumber, secondNumber);
    else if(operator === "/") return divide(firstNumber, secondNumber);
}

const screen = document.querySelector('.screen p');

const numbers = document.querySelectorAll(".digit");
const operation = document.querySelectorAll(".operation");
const clearBtn = document.querySelector('.clearBtn');
const resultBtn = document.querySelector('.resultBtn');

function populateScreen(item){
    screen.textContent += item
}

numbers.forEach(number => number.addEventListener('click', ()=>populateScreen(number.textContent)))
operation.forEach(operator => operator.addEventListener('click', ()=>setOperation(operator.textContent)))

function setOperation(operation) {
    if(operator === operation) return;
    operator = operation;
    console.log(operator);
}

function clearDisplay() {
    firstNumber = 0;
    document.querySelector('.display p').textContent = '';
}