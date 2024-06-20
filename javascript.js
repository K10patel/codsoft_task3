document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    const clearButton = document.getElementById('clear');
    const equalsButton = document.getElementById('equal');

    let currentInput = '';
    let previousInput = '';
    let operator = '';

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const value = this.getAttribute('data-value');

            if (value >= '0' && value <= '9' || value === '.') {
                currentInput += value;
                updateDisplay(currentInput);
            } else if (this.classList.contains('operator')) {
                if (currentInput !== '') {
                    previousInput = currentInput;
                    currentInput = '';
                    operator = value;
                }
            }
        });
    });

    clearButton.addEventListener('click', function () {
        currentInput = '';
        previousInput = '';
        operator = '';
        updateDisplay('0');
    });

    equalsButton.addEventListener('click', function () {
        if (currentInput !== '' && previousInput !== '' && operator !== '') {
            const result = calculate(previousInput, currentInput, operator);
            currentInput = result.toString();
            previousInput = '';
            operator = '';
            updateDisplay(currentInput);
        }
    });

    function updateDisplay(value) {
        display.textContent = value;
    }

    function calculate(a, b, operator) {
        a = parseFloat(a);
        b = parseFloat(b);
        switch (operator) {
            case '+':
                return a + b;
            case '-':
                return a - b;
            case '*':
                return a * b;
            case '/':
                return a / b;
            default:
                return 0;
        }
    }
});
