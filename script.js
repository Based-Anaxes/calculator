const operators = {
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
    return operators[operator](num1, num2);
}