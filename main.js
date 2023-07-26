const display = document.getElementById("result");
const buttons = document.querySelectorAll('input[type="button"]');
const equal = document.querySelector(".equal");
const del = document.querySelector(".delete");
const allClear = document.querySelector(".clear");

function updateDisplay(value) {
  display.textContent += value;
}

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const currentValue = button.value;
    updateDisplay(currentValue);
  });
});

function math(a, b, operator) {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;

    default:
      return "Ошибка";
  }
}

function equasion(string) {
  let [a, operation, b] = string.split(/(\+|\-|\*|\/)/);
  a = parseFloat(a);
  b = parseFloat(b);
  return math(a, b, operation);
}

equal.addEventListener("click", (event) => {
  display.textContent = equasion(display.textContent);
});

del.addEventListener("click", (event) => {
  display.textContent = display.textContent.slice(0, -3);
});

allClear.addEventListener("click", (event) => {
  display.textContent = "";
});
