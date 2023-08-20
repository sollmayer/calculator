function add(a,b) {return Number(a) + Number(b)}
function subtract(a,b) {return a - b}
function multiply(a,b) {return a * b}
function divide(a,b) {return a / b}

let operator = null;
let firstNumber = '';
let secondNumber = '';
let decimalSelected = false;

const screen = document.querySelector('.screen p');
const numbers = document.querySelectorAll(".digit");
const operation = document.querySelectorAll(".operation");
const clearBtn = document.querySelector('.clearBtn');
const resultBtn = document.querySelector('.resultBtn');
const decimalBtn = document.querySelector('.decimal');
const deleteBtn = document.querySelector('.deleteBtn');

numbers.forEach(number => number.addEventListener('mousedown', ()=>{
    number.classList.add('clicked');
    handleNumberClick(number.textContent);
}));
numbers.forEach(number => number.addEventListener('mouseup', ()=> {number.classList.remove('clicked')}))
numbers.forEach(number => number.addEventListener('mouseout', ()=> {number.classList.remove('clicked')}))
operation.forEach(operator => operator.addEventListener('click', ()=>setOperation(operator.textContent)));
clearBtn.addEventListener('click',  clearScreen);
resultBtn.addEventListener('click', handleResultBtnClick);
decimalBtn.addEventListener('click', handleDecimalBtnClick);
deleteBtn.addEventListener('click', handleDeleteBtnClick);

window.addEventListener('keydown', (e)=>{
    if(!isNaN(e.key)) handleNumberClick(e.key)
    if(e.key == '.') handleDecimalBtnClick()
    if(e.key == 'Backspace') handleDeleteBtnClick()
    if(e.key == 'Enter') handleResultBtnClick()
    else if(e.key.match(/[\+\-\*\/]/)) setOperation(e.key);
})

function populateScreen(item){
    screen.textContent += item
}
function operate(operator, firstNumber, secondNumber) {
    if(operator === "+") return add(firstNumber, secondNumber);
    else if(operator === "-") return subtract(firstNumber, secondNumber);
    else if(operator === "*") return multiply(firstNumber, secondNumber);
    else if(operator === "/") {
        if(secondNumber == 0) {
            alert("You can't divide by zero")
            return '';
        }
        else return divide(firstNumber, secondNumber)
    };
}
function handleNumberClick(number){
    let operatorIndex = screen.textContent.split('').findIndex(item => item === operator);
    if((operator === null && screen.textContent == '0') 
        || (screen.textContent.slice(operatorIndex + 1) == '0')) return; 
    
    if(operator !== null) {secondNumber += number}
    else firstNumber += number;

    populateScreen(number);
}

function handleResultBtnClick(){
    if(firstNumber !== '' && secondNumber !== ''){
        const result = Math.round(operate(operator, firstNumber, secondNumber) * 10000)/10000;
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
        if(operator === null) parseFloat(firstNumber += '.');
        else if (operator !== null) parseFloat(secondNumber += '.');
    }
}

function handleDeleteBtnClick() {
    const deletedItem = screen.textContent.slice(screen.textContent.length - 1)
    if(deletedItem === '.') decimalSelected = false;
    screen.textContent = screen.textContent.slice(0,-1);
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
    }
    
}

function clearScreen() {
    firstNumber = '';
    secondNumber = '';
    operator = null;
    decimalSelected = false;
    screen.textContent = '';
}