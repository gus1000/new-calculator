console.clear();

const calculator = document.querySelector(".calculator");
const calculatorKeys = calculator.querySelectorAll("button");
const keyOperators = calculator.querySelectorAll(".key--operator");
const calculatorDisplay = calculator.querySelector(".calculator-display");
// console.log(calculatorKeys);

function operations(operation) {
  switch (operation) {
    case "+":
      previousNumber = parseFloat(previousNumber) + parseFloat(currentNumber);
      break;
    case "-":
      previousNumber = parseFloat(previousNumber) - parseFloat(currentNumber);
      break;
    case "x":
      previousNumber = parseFloat(previousNumber) * parseFloat(currentNumber);
      break;
    case "/":
      previousNumber = parseFloat(previousNumber) / parseFloat(currentNumber);
      break;
    case "=":
      // "=" case is not needed here, as the calculation is done when an operator is clicked
      break;
    case "AC":
      previousNumber = "0";
      currentNumber = "";
      calculatorDisplay.innerText = "";
      break;
  }
  calculatorDisplay.innerText = previousNumber;
}

let previousNumber = "0";
let currentNumber = "";
let pendingOperation = null;

calculatorKeys.forEach(function (key) {
  key.addEventListener("click", function (e) {
    const keyValue = key.textContent;

    if (!isNaN(keyValue)) {
      currentNumber += currentNumber;
      calculatorDisplay.innerText = current;
    } else if (keyValue === "AC") {
      operations(keyValue);
    } else {
      if (currentNumber !== "") {
        if (pendingOperation) {
          operations(pendingOperation);
        } else {
          previousNumber = parseFloat(currentNumber);
        }
      }
      pendingOperation = keyValue;
      currentNumber = "";
    }

    // if (!isNaN(keyValue)) {
    //   // Number button clicked
    //   currentNumber += keyValue;
    //   calculatorDisplay.innerText = currentNumber;
    // } else if (keyValue === "AC") {
    //   // Clear all
    //   operations(keyValue);
    // } else {
    //   // Operator button clicked
    //   if (currentNumber !== "") {
    //     if (pendingOperation) {
    //       // Perform the pending operation before updating it
    //       operations(pendingOperation);
    //     } else {
    //       // If no pending operation, update previousNumber directly
    //       previousNumber = parseFloat(currentNumber);
    //     }
    //   }
    //   pendingOperation = keyValue;
    //   currentNumber = "";
    // }
  });
});

// let previous = "";
// let current = "";
// let operation = null;

// calculatorKeys.forEach(function (key) {
//  key.addEventListener("click", function (e) {

//   const keyValue = parseFloat(key.textContent);
//   console.log(keyValue);

//   // if (isNaN(key.textContent)) {
//   //  operations(key);
//   //  return;
//   // }
//   current = e.target.textContent;
//   // if (current === NaN) {
//   //  return;
//   // }
//   previous = previous + current;
//   console.log(previous);
//   calculatorDisplay.innerText = previous;
//   if (!isNaN(keyValue)) {
//    operations(key);
//   }

//  });
// });
