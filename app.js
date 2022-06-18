// Selecting Element        
const calculation1Display = document.querySelector('.answer')
const calculation2Display = document.querySelector('.calculation')
const tempResultDisplay = document.querySelector('.temp-result')
const numbersEl = document.querySelectorAll('.numbers')
const operationEl = document.querySelectorAll('.operator')
const allClearEl = document.querySelector('.all-clear')
const equalEl = document.querySelector('.equal')
const clearLastEl = document.querySelector('.clear-last')
const clearLastValue = document.querySelector('.clear-last-value')

// Data layer;
let displayOneNumber = '',
    displayTwoNumber = '',
    result = null,
    lastOperation = '',
    haveDot = false;

// Add eventlistener 
numbersEl.forEach(number => {
    // console.log(element);
    number.addEventListener('click', function(e){
        // console.log(typeof e.target.innerText);
        if (e.target.innerText === '.' && !haveDot) {
            haveDot = true;
        }else if(e.target.innerText === '.' && haveDot){
            return;
        }
        displayTwoNumber += e.target.innerText;
        calculation2Display.textContent = displayTwoNumber;

        number.classList.add('clicked')
    })
});

operationEl.forEach(operator => {
    // console.log(operator);
    operator.addEventListener('click', (e) => {
        // console.log(e.target.innerText);

        if(!displayTwoNumber) result;
        haveDot = false;
        const operationName =  e.target.innerText;

        if(displayOneNumber && displayTwoNumber && lastOperation){
            mathOperation()
        } else{
            result = parseFloat(displayTwoNumber);
        }
        clearVar(operationName);
        lastOperation = operationName;
        // displayTwoNumber += e.target.innerText;
        // calculationDisplay.textContent = displayTwoNumber;
    })
})

equalEl.addEventListener('click', () => {
    if(!displayOneNumber || !displayTwoNumber) return;
    haveDot = false;
    mathOperation();
    clearVar();
    calculation2Display.textContent = result;
    tempResultDisplay.textContent = '';
    displayTwoNumber = result;
    displayOneNumber = '';
})


clearLastEl.addEventListener('click', ()=>{
    calculation2Display.textContent = '0';
    displayTwoNumber = '';
})

clearLastValue.addEventListener('click', function(){
    displayTwoNumber = displayTwoNumber.substring(0, displayTwoNumber.length - 1)
    calculation2Display.textContent = displayTwoNumber
    // console.log(displayTwoNumber);
})

// function of logic

function clearVar(opName = ''){
    displayOneNumber += displayTwoNumber + ' ' + opName + ' ';
    calculation1Display.textContent = displayOneNumber;
    displayTwoNumber = '';
    calculation2Display.textContent = '';
    tempResultDisplay.textContent = result;
}

function mathOperation(){
    if (lastOperation === '+') {
        result = parseFloat(result) + parseFloat(displayTwoNumber)
    }
    else if (lastOperation === '-') {
        result = parseFloat(result) - parseFloat(displayTwoNumber)
    }
    else if (lastOperation === '×') {
        result = parseFloat(result) * parseFloat(displayTwoNumber)
    }
    else if (lastOperation === '÷') {
        result = parseFloat(result) / parseFloat(displayTwoNumber)
    }
    else if (lastOperation === '%') {
        result = parseFloat(result) % parseFloat(displayTwoNumber)
    }
}

allClearEl.addEventListener('click', ()=>{
    displayOneNumber = '';
    displayTwoNumber = '';
    result = '';
    calculation1Display.textContent = '';
    calculation2Display.textContent = '0';
    tempResultDisplay.textContent = '';
})


// tempResultDisplay.textContent = eval(displayTwoNumber)

// equalEl.addEventListener('click', (e) => {
//     answerDisplay.textContent = eval(displayTwoNumber)
// })
