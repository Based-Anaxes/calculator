const display = document.querySelector('.display');
const userInput = document.querySelector('.userInput');
const operators = {
	'+': function(num1, num2) {
		return num1 + num2; 
	},
	'-': function(num1, num2) {
		return num1 - num2;
	}, 
	'*': function(num1, num2) {
		return num1 * num2
	}, 
	'/': function(num1, num2) {
		return num1 / num2; 
	}
}

let num1 = 0;
let num2 = 0; 
let operator = ''
let displayContent = '0';
let result = 0;

function handleNumberInput(btnValue) {
	if(displayContent.length < 9) {
		displayContent += btnValue;
	}
	if(displayContent[0] === '0') {
		displayContent = displayContent.substring(1);
	}
	if(operator === '') {
		num1 = Number(displayContent);
		display.textContent = num1; 
	} else {
		num2 = Number(displayContent);
		display.textContent = operator + num2;
	}
}

function handleOperatorInput(btnValue) {
    if (num2 !== 0) {
        operate(operator, num1, num2);
        num1 = result;
        num2 = 0;
    }
    operator = btnValue;
    displayContent = '0';
    display.textContent = num1 + operator + displayContent;
}

function operate(operator, num1, num2) {
	result = operators[operator](num1, num2);
	display.textContent = result;
}

userInput.addEventListener('click', (event) => {
	let btnValue = event.target.value; 
	let btnClass = event.target.className;
	switch(btnClass) {
		case 'number':
			handleNumberInput(btnValue); 
			break;
		case 'operator':
			handleOperatorInput(btnValue);
			break;
		case 'equals': 
			operate(operator, num1, num2);
	}
});