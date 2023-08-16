function add(a,b) {return Number(a) + Number(b)}
function subtract(a,b) {return a - b}
function multiply(a,b) {return a * b}
function divide(a,b) {return a / b}

let operator = null;
let firstNumber = '';
let secondNumber = '';

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

numbers.forEach(number => number.addEventListener('click', ()=>handleNumberClick(number.textContent)))
operation.forEach(operator => operator.addEventListener('click', ()=>setOperation(operator.textContent)))
clearBtn.addEventListener('click',  clearScreen)
resultBtn.addEventListener('click', ()=>{
    const result = operate(operator, firstNumber, secondNumber);
    clearScreen()
    populateScreen(result)
    firstNumber = screen.textContent;
})

function handleNumberClick(number){
    if(operator !== null) {secondNumber += number}
    else firstNumber += number;

    console.log('firstNumber', firstNumber);
    console.log('secondNumber', secondNumber);
    populateScreen(number);
}
function setOperation(operation) {
    if(firstNumber !== '' && secondNumber !== '') return;
    if(firstNumber !== '') {
        if(operator === operation) return;
        operator === null ? populateScreen(operation) : screen.textContent = screen.textContent.slice(0,-1) + operation;
        operator = operation;
        console.log(operator);
    }
    
}

function clearScreen() {
    firstNumber = '';
    secondNumber = '';
    operator = null;
    screen.textContent = '';
}