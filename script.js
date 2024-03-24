let digits = [];
const display = document.querySelector('.display')
const numBtns = document.querySelectorAll('.number');
const operations = {
    '+': function(num1, num2) {
        return num1 + num2;
    },
    '-': function(num1, num2) {
        return num1 - num2;
    },
    '*': function(num1, num2) {
        return num1 * num2;
    },
    '/': function(num1, num2) {
        return num1 / num2;
    }
};

numBtns.forEach((numBtn) => {
    numBtn.addEventListener('click', () => {
        digits.push(numBtn.value);
        let num = digits.reduce((digit, current) => digit + current);
        display.textContent = num;
    })
})

function operate(operator, num1, num2) {
    return operations[operator](num1, num2);
}