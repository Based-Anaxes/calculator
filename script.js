const display = document.querySelector('.display')
const numBtns = document.querySelectorAll('.number');

numBtns.forEach((numBtn) => {
    numBtn.addEventListener('click', () => {
        switch(numBtn.id) {
            case "seven": 
                display.textContent = "7";
                break; 
            case "eight":
                display.textContent = "8";
                break; 
            case "nine": 
                display.textContent = "9";
                break;
            case "four": 
                display.textContent = "4";
                break; 
            case "five":
                display.textContent = "5";
                break; 
            case "six": 
                display.textContent = "6";
                break;
                case "three": 
                display.textContent = "3";
                break; 
            case "two":
                display.textContent = "2";
                break; 
            case "one": 
                display.textContent = "1";
                break;
            case "zero": 
                display.textContent = "0";
                break;
        }
        console.log(display.textContent);
    })
})

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