const calculator = document.querySelector(".calculator");
const keys = calculator.querySelector(".calculator__keys");
const display = document.querySelector(".calculator__display");
//const previousKeyType = calculator.dataset.previousKeyType;

keys.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    // Do something
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayedNum = display.textContent;
    const previousKeyType = calculator.dataset.previousKeyType;

    Array.from(key.parentNode.children).forEach((k) =>
      k.classList.remove("is-depressed")
    );
    if (!action) {
      console.log("number key!");
      if (displayedNum === "0" || previousKeyType === "operator") {
        display.textContent = keyContent;

        console.log("entre al if!");
      } else {
        display.textContent = displayedNum + keyContent;
      }
    }
    if (
      action === "add" ||
      action === "subtract" ||
      action === "multiply" ||
      action === "divide"
    ) {
      console.log("operator key!");
      key.classList.add("is-depressed");
      calculator.dataset.previousKeyType = "operator";
      calculator.dataset.firstValue = displayedNum;
      calculator.dataset.operator = action;
    }
    if (action === "decimal") {
      console.log("decimal key!");
      display.textContent = displayedNum + ".";
    }

    if (action === "clear") {
      console.log("clear key!");
      display.textContent = "0"; // Agregado para reiniciar el display
    }

    if (action === "calculate") {
      console.log("equal key!");
      const secondValue = displayedNum;
      const firstValue = calculator.dataset.firstValue;
      const operator = calculator.dataset.operator;
      display.textContent = calculate(firstValue, operator, secondValue);
    }
  }
});

const calculate = (n1, operator, n2) => {
  let result = "";

  if (operator === "add") {
    result = parseFloat(n1) + parseFloat(n2);
  } else if (operator === "subtract") {
    result = parseFloat(n1) - parseFloat(n2);
  } else if (operator === "multiply") {
    result = parseFloat(n1) * parseFloat(n2);
  } else if (operator === "divide") {
    result = parseFloat(n1) / parseFloat(n2);
  }

  return result;
};
