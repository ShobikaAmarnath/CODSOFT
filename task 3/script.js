let display = document.getElementById('display');
let expression = '';

function appendToDisplay(value) {
    expression += value;
    display.value = expression;
}

function clearDisplay() {
    expression = '';
    display.value = '';
}

function calculate() {
    try {
        let result = eval(expression);
        display.value = result;
        expression = '';
    } catch (error) {
        display.value = 'Error';
        expression = '';
    }
}

function appendToDisplay(value) {
    if (value === '⌫') {
        expression = expression.slice(0, -1); // Remove the last character
    } else {
        expression += value;
    }
    display.value = expression;
}