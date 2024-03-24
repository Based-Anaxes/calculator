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

function operate(operator, num1, num2) {
    return operations[operator](num1, num2);
}