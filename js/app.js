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
// -----------------------------------------------------------------

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
// -------------------------------------------------------------

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
// --------------------------------------------------------------

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
//     // shorthand for previous line
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
// -------------------------------------------------------

// // variables
// const defaultResult = 0;
// let currentResult = defaultResult;
// let logEntries = [];


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
//     currentResult += enteredNumber;
//     createAndWriteOutput("+", initialResult, enteredNumber);
//     logEntries.push(enteredNumber);
//     console.log(logEntries[1]);
// }
// function subtract() {
//     const enteredNumber = getUserNumberInput();
//     const initialResult = currentResult;
//     currentResult -= enteredNumber;
//     createAndWriteOutput("-", initialResult, enteredNumber);
// }
// function multiply() {
//     const enteredNumber = getUserNumberInput();
//     const initialResult = currentResult;
//     currentResult *= enteredNumber;
//     createAndWriteOutput("*", initialResult, enteredNumber);
// }
// function divide() {
//     const enteredNumber = getUserNumberInput();
//     const initialResult = currentResult;
//     currentResult /= enteredNumber;
//     createAndWriteOutput("/", initialResult, enteredNumber);
// }


// // event listeners
// addBtn.addEventListener("click", add);
// subtractBtn.addEventListener("click", subtract);
// multiplyBtn.addEventListener("click", multiply);
// divideBtn.addEventListener("click", divide);
// ----------------------------------------------------------

// // variables
// const defaultResult = 0;
// let currentResult = defaultResult;
// let logEntries = [];


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
//     currentResult += enteredNumber;
//     createAndWriteOutput("+", initialResult, enteredNumber);
//     const logEntry = {
//         operation: "ADD",
//         prevResult: initialResult,
//         number: enteredNumber,
//         result: currentResult
//     };
//     logEntries.push(logEntry);
//     console.log(logEntry.operation);
//     console.log(logEntries);
// }
// function subtract() {
//     const enteredNumber = getUserNumberInput();
//     const initialResult = currentResult;
//     currentResult -= enteredNumber;
//     createAndWriteOutput("-", initialResult, enteredNumber);
// }
// function multiply() {
//     const enteredNumber = getUserNumberInput();
//     const initialResult = currentResult;
//     currentResult *= enteredNumber;
//     createAndWriteOutput("*", initialResult, enteredNumber);
// }
// function divide() {
//     const enteredNumber = getUserNumberInput();
//     const initialResult = currentResult;
//     currentResult /= enteredNumber;
//     createAndWriteOutput("/", initialResult, enteredNumber);
// }


// // event listeners
// addBtn.addEventListener("click", add);
// subtractBtn.addEventListener("click", subtract);
// multiplyBtn.addEventListener("click", multiply);
// divideBtn.addEventListener("click", divide);
// ---------------------------------------------------------

// // variables
// const defaultResult = 0;
// let currentResult = defaultResult;
// let logEntries = [];


// // functions
// // declaration
// function getUserNumberInput() {
//     return parseInt(userInput.value);
// }
// function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
//     const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
//     outputResult(currentResult, calcDescription);
// }
// function writeToLog(
//     operationIdentifier,
//     prevResult,
//     operationNumber,
//     newResult
// ) {
//     const logEntry = {
//         operation: operationIdentifier,
//         prevResult: prevResult,
//         number: operationNumber,
//         result: newResult
//     };
//     logEntries.push(logEntry);
//     console.log(logEntries);
// }

// // calling
// function add() {
//     const enteredNumber = getUserNumberInput();
//     const initialResult = currentResult;
//     currentResult += enteredNumber;
//     createAndWriteOutput("+", initialResult, enteredNumber);
//     writeToLog("ADD",initialResult,enteredNumber,currentResult);
// }
// function subtract() {
//     const enteredNumber = getUserNumberInput();
//     const initialResult = currentResult;
//     currentResult -= enteredNumber;
//     createAndWriteOutput("-", initialResult, enteredNumber);
//     writeToLog("SUBTRACT",initialResult,enteredNumber,currentResult);
// }
// function multiply() {
//     const enteredNumber = getUserNumberInput();
//     const initialResult = currentResult;
//     currentResult *= enteredNumber;
//     createAndWriteOutput("*", initialResult, enteredNumber);
//     writeToLog("MULTIPLY",initialResult,enteredNumber,currentResult);
// }
// function divide() {
//     const enteredNumber = getUserNumberInput();
//     const initialResult = currentResult;
//     currentResult /= enteredNumber;
//     createAndWriteOutput("/", initialResult, enteredNumber);
//     writeToLog("DIVIDE",initialResult,enteredNumber,currentResult);
// }


// // event listeners
// addBtn.addEventListener("click", add);
// subtractBtn.addEventListener("click", subtract);
// multiplyBtn.addEventListener("click", multiply);
// divideBtn.addEventListener("click", divide);
// -------------------------------------------------------------


