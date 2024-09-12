document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll("button");
    
    console.log("Buttons selected:", buttons);

    let currentInput = ""; 
    let previousInput = "";
    let operator = ""; 

    function updateDisplay(value) {
        display.textContent = value;
    }

    function handleButtonClick(event) {
        console.log("Button clicked: ", event.target.textContent);
        const buttonValue = event.target.textContent;
        
        if (buttonValue === "C") {
            currentInput = "";
            previousInput = "";
            operator = "";
            updateDisplay("0");
            return;
        }
        
        if (event.target.id === "backspace") {
            currentInput = currentInput.slice(0, -1);
            console.log("backspace")
            if (currentInput === "") {
                updateDisplay("0");
            } else {
                updateDisplay(currentInput);
            }
            return;
        }
        
        if (["+", "-", "*", "/"].includes(buttonValue)) {
            if (currentInput === "" && buttonValue === "-") {
                currentInput = "-";
                updateDisplay(currentInput);
            } else if (currentInput !== "") {
                if (previousInput === "") {
                    previousInput = currentInput;
                    operator = buttonValue;
                    currentInput = "";
                } else {
                    previousInput = calculate(previousInput, currentInput, operator);
                    operator = buttonValue;
                    currentInput = "";
                    updateDisplay(previousInput);
                }
            }
            return;
        }
        
        if (["(", ")"].includes(buttonValue)) {
            currentInput += buttonValue;
            updateDisplay(currentInput);
            return;
        }
        
        if (buttonValue === "=") {
            if (currentInput !== "" && previousInput !== "" && operator !== "") {
                const result = calculate(previousInput, currentInput, operator);
                updateDisplay(result);
                currentInput = result;
                previousInput = "";
                operator = "";
            }
            return;
        }
        
        if (!isNaN(buttonValue) || buttonValue === ".") {
            currentInput += buttonValue;
            updateDisplay(currentInput);
        }
        console.log("Current input:", currentInput)
    }
    
    function calculate(firstValue, secondValue, operator) {
        const num1 = parseFloat(firstValue);
        const num2 = parseFloat(secondValue);

        if (operator === "+") return (num1 + num2).toString();
        if (operator === "-") return (num1 - num2).toString();
        if (operator === "*") return (num1 * num2).toString();
        if (operator === "/") return (num1 / num2).toString();
    }

    buttons.forEach(button => {
        button.addEventListener("click", handleButtonClick);
    });
});
