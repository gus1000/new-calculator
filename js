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
const roman = document.querySelector(".roman");
const text = document.querySelector(".text");

//

let previous = 0;
let current = "0";
let operation = null;
//This function converts the current result/input into a roman numeral
function romanNumeral(num) {
  // 0     1.   2.   3.   4.  5.  6.  7.  8.  9. 10
  const decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romanNumeral = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I"
  ];
  let romanized = ""; //0     1     2    3      4.  5.    6.   7.    8.   9

  for (let index = 0; index < decimalValue.length; index++) {
    while (decimalValue[index] <= num) {
      romanized += romanNumeral[index];
      num -= decimalValue[index]; //  V + I
    }
  }

  return romanized;
}
//This function converts the current  number into text.

function intToEnglish(number) {
  let NumberAndValuesArray = [
    { value: 1000000000000000000000, str: "sextillion" },
    { value: 1000000000000000000, str: "quintillion" },
    { value: 1000000000000000, str: "quadrillion" },
    { value: 1000000000000, str: "trillion" },
    { value: 1000000000, str: "billion" },
    { value: 1000000, str: "million" },
    { value: 1000, str: "thousand" },
    { value: 100, str: "hundred" },
    { value: 90, str: "ninety" },
    { value: 80, str: "eighty" },
    { value: 70, str: "seventy" },
    { value: 60, str: "sixty" },
    { value: 50, str: "fifty" },
    { value: 40, str: "forty" },
    { value: 30, str: "thirty" },
    { value: 20, str: "twenty" },
    { value: 19, str: "nineteen" },
    { value: 18, str: "eighteen" },
    { value: 17, str: "seventeen" },
    { value: 16, str: "sixteen" },
    { value: 15, str: "fifteen" },
    { value: 14, str: "fourteen" },
    { value: 13, str: "thirteen" },
    { value: 12, str: "twelve" },
    { value: 11, str: "eleven" },
    { value: 10, str: "ten" },
    { value: 9, str: "nine" },
    { value: 8, str: "eight" },
    { value: 7, str: "seven" },
    { value: 6, str: "six" },
    { value: 5, str: "five" },
    { value: 4, str: "four" },
    { value: 3, str: "three" },
    { value: 2, str: "two" },
    { value: 1, str: "one" }
  ];

  let result = "";
  for (let n of NumberAndValuesArray) {
    if (number >= n.value) {
      if (number <= 99) {
        result += n.str;
        number -= n.value;
        if (number > 0) result += " ";
      } else {
        const t = Math.floor(number / n.value);
        const d = number % n.value;
        if (d > 0) {
          return intToEnglish(t) + " " + n.str + " " + intToEnglish(d);
        } else {
          return intToEnglish(t) + " " + n.str;
        }
      }
    }
  }
  return result;
}

let decimalMode = false;
let decimal = ".";

zero.addEventListener("click", function (e) {
  const number = e.target.textContent;
  output.innerText = number;

  if (!decimalMode) {
    // console.log("hi", number);

    current = current === "0" ? number : current + number;
    output.innerText = current;

    // console.log(current);
  } else {
    current = current + number;

    // console.log(current);
    output.innerText = current;
  }

  // console.log("one", current);
});

one.addEventListener("click", function (e) {
  const number = e.target.textContent;
  output.innerText = number;

  if (!decimalMode) {
    console.log("hi", number);

    current = current === "0" ? number : current + number;
    output.innerText = current;

    // console.log(current);
  } else {
    current = current + number;

    // console.log(current);
    output.innerText = current;
  }

  // console.log("one", current);
});

two.addEventListener("click", function (e) {
  const number = e.target.textContent;
  output.innerText = number;

  if (!decimalMode) {
    // console.log("hi", number);

    current = current === "0" ? number : current + number;
    output.innerText = current;

    console.log(current);
  } else {
    current = current + number;

    // console.log(current);
    output.innerText = current;
  }

  // console.log("one", current);
});

three.addEventListener("click", function (e) {
  const number = e.target.textContent;
  output.innerText = number;

  if (!decimalMode) {
    // console.log("hi", number);

    current = current === "0" ? number : current + number;
    output.innerText = current;

    // console.log(current);
  } else {
    current = current + number;

    // console.log(current);
    output.innerText = current;
  }

  // console.log("one", current);
});

four.addEventListener("click", function (e) {
  const number = e.target.textContent;
  output.innerText = number;

  if (!decimalMode) {
    // console.log("hi", number);

    current = current === "0" ? number : current + number;
    output.innerText = current;

    console.log(current);
  } else {
    current = current + number;

    // console.log(current);
    output.innerText = current;
  }
});

five.addEventListener("click", function (e) {
  const number = e.target.textContent;
  output.innerText = number;

  if (!decimalMode) {
    // console.log("hi", number);

    current = current === "0" ? number : current + number;
    output.innerText = current;

    console.log(current);
  } else {
    current = current + number;

    // console.log(current);
    output.innerText = current;
  }
});

six.addEventListener("click", function (e) {
  const number = e.target.textContent;
  output.innerText = number;

  if (!decimalMode) {
    // console.log("hi", number);

    current = current === "0" ? number : current + number;
    output.innerText = current;

    console.log(current);
  } else {
    current = current + number;

    // console.log(current);
    output.innerText = current;
  }
});

seven.addEventListener("click", function (e) {
  const number = e.target.textContent;
  output.innerText = number;

  if (!decimalMode) {
    console.log("hi", number);

    current = current === "0" ? number : current + number;
    output.innerText = current;

    console.log(current);
  } else {
    current = current + number;

    // console.log(current);
    output.innerText = current;
  }
});

eight.addEventListener("click", function (e) {
  const number = e.target.textContent;
  output.innerText = number;

  if (!decimalMode) {
    console.log("hi", number);

    current = current === "0" ? number : current + number;
    output.innerText = current;

    // console.log(current);
  } else {
    current = current + number;

    // console.log(current);
    output.innerText = current;
  }
});

nine.addEventListener("click", function (e) {
  const number = e.target.textContent;
  output.innerText = number;

  if (!decimalMode) {
    // console.log("hi", number);

    current = current === "0" ? number : current + number;
    output.innerText = current;

    console.log(current);
  } else {
    current = current + number;

    // console.log(current);
    output.innerText = current;
  }
});

dot.addEventListener("click", function (e) {
  decimalMode = true;
  current = current + decimal;
});

plus.addEventListener("click", function (e) {
  operation = "plus";
  decimalMode = false;

  if (previous === 0) {
    previous = parseFloat(current);
  }
  current = "0"; // Reset current to  the string '0'
});

minus.addEventListener("click", function (e) {
  operation = "minus";
  if (previous === 0) {
    previous = parseFloat(current);
  }
  current = "0"; //
});

times.addEventListener("click", function (e) {
  operation = "times";
  if (previous === 0) {
    previous = parseFloat(current);
  }
  current = "0"; //
});

divide.addEventListener("click", function (e) {
  operation = "divide";
  if (previous === 0) {
    previous = parseFloat(current);
  }
  current = "0";
});

equal.addEventListener("click", function (e) {
  if (operation === "plus") {
    previous = parseFloat(previous) + parseFloat(current);
    output.innerText = previous;
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
  // else {
  //   console.log("click");
  //   operation === equal;
  //   previous = parseInt(current).toFixed(1).toString();
  //   output.innerText = previous
  // }
  // console.log("equal", previous);
  output.innerText = previous;
  operation = null;
});

roman.addEventListener("click", function (e) {
  operation = "roman";
  if (previous === 0) {
    previous = current;
  }

  const romanized = romanNumeral(previous);
  output.innerText = romanized;
  // console.log(romanized);
});

text.addEventListener("click", function (e) {
  operation = "text";
  
  // I  attempted  to  make this work for negative numbers/decimals
  
  //   if (previous === 0) {
  //     previous = parseInt(current).toFixed(1).toString();
  //   }
  //   if (previous < 0) {
  //   previous = parse(previous).toString().replace("-" , "");
  //   console.log(previous)
  //   const [wholeNumber , decimalNumber] = previous.split(".");
  //   const wholeText = intToEnglish(wholeNumber);
  //   const decimalText = intToEnglish(decimalNumber);
  //   console.log("boo",wholeNumber);
  //   console.log(decimalNumber);
  //   output.innerText =  "negative" + " " + wholeText + " " +  "point" +  decimalText;
  //   return;

  //   }
  previous = current;
  const [wholeNumber, decimalNumber] = previous.split(".");
  const wholeText = intToEnglish(wholeNumber);
  const decimalText = intToEnglish(decimalNumber);
  // console.log(wholeText);
  // console.log(decimalText);
  output.innerText = wholeText;
  // output.innerText = wholeText + "point" +  decimalText
});

ac.addEventListener("click", function (e) {
  current = 0;
  previous = 0;
  operation = null;
  output.innerText = 0;
});
