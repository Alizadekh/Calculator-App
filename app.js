let screen = document.querySelector("#inputScreen");
let num = document.querySelectorAll(".num");
let equalBtn = document.querySelector(".equal");
let reset = document.querySelector(".reset");

num.forEach((btn) => {
  btn.addEventListener("click", function () {
    console.log(btn.value);
    screen.value += btn.value;
  });
});

equalBtn.addEventListener("click", function () {
  const input = screen.value;

  const numberPattern = /\d+(\.\d+)?/g;
  const operatorPattern = /[\+\-\*\/]/g;

  const numbers = input.match(numberPattern).map(Number);
  const operators = input.match(operatorPattern);

  for (let i = 0; i < operators.length; i++) {
    if (operators[i] === "*" || operators[i] === "/") {
      const result =
        operators[i] === "*"
          ? numbers[i] * numbers[i + 1]
          : numbers[i] / numbers[i + 1];
      numbers.splice(i, 2, result);
      operators.splice(i, 1);
      i--;
    }
  }

  let result = numbers[0];
  for (let i = 0; i < operators.length; i++) {
    const operator = operators[i];
    const nextNumber = numbers[i + 1];

    switch (operator) {
      case "+":
        result += nextNumber;
        break;
      case "-":
        result -= nextNumber;
        break;
      case "*":
        result *= nextNumber;
        break;
      case "/":
        result /= nextNumber;
        break;
    }
  }
  screen.value = result;
});

reset.addEventListener("click", function () {
  screen.value = "";
});
