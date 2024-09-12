document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll("button");
    
    let currentInput = ""; 
    let previousInput = "";
    let operator = ""; 

    function updateDisplay(value) {
        display.textContent = value;
    }

    function handleButtonClick(event) {
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
            updateDisplay(currentInput === "" ? "0" : currentInput);
            return;
        }
        if (["+", "-", "*", "/"].includes(buttonValue)) {
            currentInput += buttonValue;
            updateDisplay(currentInput);
            return;
        }
        if (buttonValue === "(" || buttonValue === ")") {
            currentInput += buttonValue;
            updateDisplay(currentInput);
            return;
        }
        if (buttonValue === "=") {
            try {
                const result = eval(currentInput);
                updateDisplay(result);
                currentInput = result.toString();
            } catch (error) {
                updateDisplay("Error");
            }
            return;
        }
        if (!isNaN(buttonValue) || buttonValue === ".") {
            currentInput += buttonValue;
            updateDisplay(currentInput);
        }
    }
    
    buttons.forEach(button => {
        button.addEventListener("click", handleButtonClick);
    });
});
