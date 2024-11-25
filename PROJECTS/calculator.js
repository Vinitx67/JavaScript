document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll(".btn");
    let currentValue = ""; // Keeps track of the current input
    let operator = null;   // Stores the current operator
    let firstOperand = null; // Stores the first operand

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const value = button.getAttribute("data-value");

            if (value === null) {
                // Handle special buttons without `data-value`
                if (button.id === "clear") {
                    clearCalculator();
                } else if (button.id === "equals") {
                    calculateResult();
                }
                return;
            }

            if (!isNaN(value) || value === ".") {
                // Append numbers and decimal points
                currentValue += value;
                updateDisplay(currentValue);
            } else if (["+", "-", "*", "/"].includes(value)) {
                // Operator clicked
                setOperator(value);
            }
        });
    });

    function updateDisplay(value) {
        display.value = value;
    }

    function setOperator(op) {
        if (currentValue === "") return; // Prevent operator without a number
        if (firstOperand === null) {
            firstOperand = parseFloat(currentValue);
        } else if (operator) {
            // Perform intermediate calculation before setting new operator
            firstOperand = performCalculation();
        }
        operator = op;
        currentValue = ""; // Reset for the second operand
    }

    function calculateResult() {
        if (firstOperand !== null && operator !== null && currentValue !== "") {
            const result = performCalculation();
            updateDisplay(result);
            clearAfterResult(result);
        }
    }

    function performCalculation() {
        const secondOperand = parseFloat(currentValue);
        let result;
        switch (operator) {
            case "+":
                result = firstOperand + secondOperand;
                break;
            case "-":
                result = firstOperand - secondOperand;
                break;
            case "*":
                result = firstOperand * secondOperand;
                break;
            case "/":
                result = secondOperand !== 0 ? firstOperand / secondOperand : "Error";
                break;
            default:
                result = currentValue;
        }
        return result;
    }

    function clearCalculator() {
        currentValue = "";
        firstOperand = null;
        operator = null;
        updateDisplay("");
    }

    function clearAfterResult(result) {
        currentValue = result.toString();
        firstOperand = null;
        operator = null;
    }
});
