function add(a,b) {return Number(a) + Number(b)}
function subtract(a,b) {return a - b}
function multiply(a,b) {return a * b}
function divide(a,b) {return a / b}

let operator = null;
let firstNumber = '';
let secondNumber = '';
let decimalSelected = false;

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
const decimalBtn = document.querySelector('.decimal');
const deleteBtn = document.querySelector('.deleteBtn');

numbers.forEach(number => number.addEventListener('click', ()=>handleNumberClick(number.textContent)));
operation.forEach(operator => operator.addEventListener('click', ()=>setOperation(operator.textContent)));
clearBtn.addEventListener('click',  clearScreen);
resultBtn.addEventListener('click', handleResultBtnClick);
decimalBtn.addEventListener('click', handleDecimalBtnClick);
deleteBtn.addEventListener('click', handleDeleteBtnClick);


function populateScreen(item){
    screen.textContent += item
}

function handleNumberClick(number){
    if(operator !== null) {secondNumber += number}
    else firstNumber += number;
    console.log('firstNumber', firstNumber);
    console.log('secondNumber', secondNumber);
    populateScreen(number);
}

function handleResultBtnClick(){
    if(firstNumber !== '' && secondNumber !== ''){
        const result = operate(operator, firstNumber, secondNumber);
        clearScreen()
        populateScreen(result)
        firstNumber = screen.textContent;
    }
}

function handleDecimalBtnClick() {
    const prevChar = screen.textContent[screen.textContent.length - 1];

    if(!isNaN(prevChar) && !decimalSelected){ 
        populateScreen('.');
        decimalSelected = true;
        if(operator === null) parseFloat(firstNumber += '.')
        else if (operator !== null) parseFloat(secondNumber += '.')
    }
    console.log(prevChar)
}

function handleDeleteBtnClick() {
    const prevCharacter = screen.textContent.slice(0,-1);
    screen.textContent = prevCharacter;
    if(operator === null && secondNumber === '') {
        firstNumber = screen.textContent;
    }else if(operator !== null && secondNumber === '') {
        operator = null;
    }else if(firstNumber !== '' && operator !== null){
        let operatorInd = screen.textContent.split('').findIndex(item => item === operator);
        secondNumber = screen.textContent.slice(operatorInd+1);
        console.log(secondNumber)
    }
}

function setOperation(operation) {
    if(firstNumber !== '' && secondNumber !== '') handleResultBtnClick();
    if(firstNumber !== '') {
        if(operator === operation) return;
        operator === null ? populateScreen(operation) : screen.textContent = screen.textContent.slice(0,-1) + operation;
        operator = operation;
        decimalSelected = false;
        console.log(operator);
    }
    
}

function clearScreen() {
    firstNumber = '';
    secondNumber = '';
    operator = null;
    decimalSelected = false;
    screen.textContent = '';
}