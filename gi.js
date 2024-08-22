function clearDisplay() {
    document.getElementById('display').value = '';
}

function appendNumber(number) {
    document.getElementById('display').value += number;
}

function appendOperator(operator) {
    const display = document.getElementById('display');
    const currentValue = display.value;
    // Prevent multiple operators
    if (currentValue && !['+', '-', '*', '/'].includes(currentValue.slice(-1))) {
        display.value += operator;
    }
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}
