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

function handleOperatorInput(btnValue) {
	operator = btnValue;
	num1 = Number(displayContent);
	displayContent = '0';
	display.textContent = num1 + operator;
}

function handleNumberInput(btnValue) {
	if(displayContent.length < 9) {
		displayContent += btnValue;
	}
	if(displayContent[0] === '0') {
		displayContent = displayContent.substring(1);
	}
	if(operator !== '') {
		num2 = Number(displayContent);
	}
	console.log(num2);
	display.textContent = operator + displayContent;
}

function operate(operator, num1, num2) {
	let result = operators[operator](num1, num2);
	console.log(result);
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
	}
});