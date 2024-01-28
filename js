// console.clear();
const zero = document.querySelector(".zero");

const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const equal = document.querySelector(".equal");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const divide = document.querySelector(".divide");
const times = document.querySelector(".times");
const dot = document.querySelector(".dot");

const output = document.querySelector(".output");
const ac = document.querySelector(".ac");
const roman = document.querySelector(".roman")

//

let previous = 0;
let current = "0";
// let operation = null;
// const digits = [];

// zero.addEventListener("click", function (e) {
//   current = parseInt(e.target.textContent);
//   // console.log("one", current);
// });
// let number = "";
// one.addEventListener("click", function (e) {
//   digits.push(e.target.textContent);
//   console.log(digits);

//   // console.log("one", current);
// });

// two.addEventListener("click", function (e) {
//   numbers.push(e.target.textContent);
//   console.log(digits);
// });

// plus.addEventListener("click", function (e) {
//   operation = "plus";
//   if (previous === 0) {
//     let number = '';

//     previous = parseInt(number);
//   }
//   // console.log("previous", previous);
//   // previous += current;
//   // console.log(previous, "after");
// });

// minus.addEventListener("click", function (e) {
//   operation = "minus";
//   if (previous === 0) {
//     previous = parseInt(number);
//     console.log("hi");
//   }

// else {
//   previous -= current;
// }
// });

// times.addEventListener("click", function (e) {
//   operation = "times";
//   if (previous === 0) {
//     previous = number;
//   }
//else if (current === 0) {
//     return ;

//   }
// else {
//   previous *= current;
// }
// });

// divide.addEventListener("click", function (e) {
//   operation = "divide";
//   if (previous === 0) {
//     previous = parseInt(number);
//   }
// });

// equal.addEventListener("click", function (e) {
//   if (operation === "plus") {
//     previous = parseInt(previous) + parseInt(number);
//     current = 0;
//   } else if (operation === "minus") {
//     previous -= current;
//     current = 0;
//   } else if (operation === "times") {
//     previous *= current;
//   } else if (operation === "divide") {
//     previous /= current;
//   }
//   console.log("equal", previous);
//   output.innerText = previous;
//   operation = null;
// });

// dot.addEventListener("click", function (e) {
//   const decimal = e.target.textContent;
//   number = number + decimal;
// });

function romanNumeral(num) { // 0     1.   2.   3.   4.  5.  6.  7.  8.  9. 10
  const decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romanNumeral = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  let romanized = ''; //0     1     2    3      4.  5.    6.   7.    8.   9

  for (let index = 0; index < decimalValue.length; index++) {
    while (decimalValue[index] <= num) {
      romanized += romanNumeral[index];
      num -= decimalValue[index]; //  V + I
    }
  }

  return romanized;
}




let decimalMode = false;
let decimal = ".";




one.addEventListener("click", function (e) {
  const number = e.target.textContent;

  if (!decimalMode) {
    console.log("hi")
    // console.log( "hi", number )
    current = current === "0" ? number : current + number;
    console.log(current);
  } else {
    current = current + number;
    console.log(current);
  }

  // console.log("one", current);
});

dot.addEventListener("click", function (e) {
  decimalMode = true;
   current =  current + decimal;
  
});

plus.addEventListener("click", function (e) {
  operation = "plus";
    decimalMode = false;

  if (previous === 0) {
    previous = parseFloat(current);
  }
  current = "0"; // Reset current to '0'
});

minus.addEventListener("click", function (e) {
  operation = "minus";
  if (previous === 0) {
    previous = parseFloat(current);
  }
  current = "0"; // Reset current to '0'
});

times.addEventListener("click", function (e) {
  operation = "times";
  if (previous === 0) {
    previous = parseFloat(current);
  }
  current = "0"; // Reset current to '0'
});

divide.addEventListener("click", function (e) {
  operation = "divide";
  if (previous === 0) {
    previous = parseFloat(current);
  }
  current = "0"; // Reset current to '0'
});

equal.addEventListener("click", function (e) {
  if (operation === "plus") {
    previous = parseFloat(previous) + parseFloat(current);
    current = "0";
  } else if (operation === "minus") {
    previous = parseFloat(previous) - parseFloat(current);
    console.log(previous);
    current = "0";
  } else if (operation === "times") {
    previous = parseFloat(previous) * parseFloat(current);
  } else if (operation === "divide") {
    previous = parseFloat(previous / parseFloat(current));
  } 
  console.log("equal", previous);
  output.innerText = previous;
  operation = null;
});

roman.addEventListener("click" , function(e) {
  operation = "roman";
   if (previous === 0) {
     previous = current;
   }
  
  const romanized = romanNumeral(previous);
  console.log(romanized);
})


ac.addEventListener("click", function (e) {
  current = 0;
  previous = 0;
  operation = null;
  output.innerText = 0;
});
