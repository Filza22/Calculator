const displayNum = document.getElementById('display');

function appendValue(value) {
    displayNum.value = display.value + value;
}

function clearDisplay() {
    displayNum.value = '';
}

function calculateResult() {
    try {
        displayNum.value = eval(displayNum.value);
    } catch {
        displayNum.value = 'Error....';
    }
}

function calculateResult() {
    displayNum.value = eval(displayNum.value);

}


function toggleMode() {
    document.body.classList.toggle('dark');
}
