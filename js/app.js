
// const defaultResult = 0;
// let currentResult = defaultResult;
// let currentResult;

// function add(num1, num2) {
// function add() {
// const result = num1 + num2;
// alert("The result is " + result);
// return result;
// currentResult = currentResult + userInput.value;

// const calcDescription=`${currentResult}+${userInput.value}`;

// currentResult = currentResult + +userInput.value;
// currentResult = currentResult + parseInt(userInput.value);

// outputResult(currentResult, calcDescription);
// }

// add(1, 2);
// currentResult = add(1, 2);
// addBtn.addEventListener("click", add);

// currentResult = (currentResult + 10) * 3 / 2 - 1;
// let calculationDescription = "(" + defaultResult + " + 10) * 3 / 2 - 1";

// let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;
// outputResult(currentResult, calculationDescription);



// const defaultResult = 0;
// let currentResult = defaultResult;

// function getUserNumberInput(){
//     return parseInt(userInput.value);
// }

// function add() {
//     const enteredNumber=getUserNumberInput();
//     const calcDescription=`${currentResult}+${enteredNumber}`;
//     currentResult = currentResult + enteredNumber;
//     outputResult(currentResult, calcDescription);
// }

// addBtn.addEventListener("click", add);



// const defaultResult = 0;
// let currentResult = defaultResult;

// function getUserNumberInput() {
//     return parseInt(userInput.value);
// }

// function add() {
//     const enteredNumber = getUserNumberInput();
//     const calcDescription = `${currentResult}+${enteredNumber}`;
//     currentResult = currentResult + enteredNumber;
//     outputResult(currentResult, calcDescription);
// }

// addBtn.addEventListener("click", add);




// // variables
// const defaultResult = 0;
// let currentResult = defaultResult;


// // functions
// // declaration
// function getUserNumberInput() {
//     return parseInt(userInput.value);
// }
// function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
//     const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
//     outputResult(currentResult, calcDescription);
// }

// // calling
// function add() {
//     const enteredNumber = getUserNumberInput();
//     const initialResult = currentResult;
//     currentResult = currentResult + enteredNumber;
//     // shortway for previous line
//     // currentResult += enteredNumber;
//     createAndWriteOutput("+", initialResult, enteredNumber);
// }

// function subtract() {
//     const enteredNumber = getUserNumberInput();
//     const initialResult = currentResult;
//     currentResult = currentResult - enteredNumber;
//     createAndWriteOutput("-", initialResult, enteredNumber);
// }

// function multiply() {
//     const enteredNumber = getUserNumberInput();
//     const initialResult = currentResult;
//     currentResult = currentResult * enteredNumber;
//     createAndWriteOutput("*", initialResult, enteredNumber);
// }

// function divide() {
//     const enteredNumber = getUserNumberInput();
//     const initialResult = currentResult;
//     currentResult = currentResult / enteredNumber;
//     createAndWriteOutput("/", initialResult, enteredNumber);
// }


// // event listeners
// addBtn.addEventListener("click", add);
// subtractBtn.addEventListener("click", subtract);
// multiplyBtn.addEventListener("click", multiply);
// divideBtn.addEventListener("click", divide);


// variables
const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];


// functions
// declaration
function getUserNumberInput() {
    return parseInt(userInput.value);
}
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

// calling
function add() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult += enteredNumber;
    createAndWriteOutput("+", initialResult, enteredNumber);
}
function subtract() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    createAndWriteOutput("-", initialResult, enteredNumber);
}
function multiply() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    createAndWriteOutput("*", initialResult, enteredNumber);
}
function divide() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    createAndWriteOutput("/", initialResult, enteredNumber);
}


// event listeners
addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
