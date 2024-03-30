//Create constants for display element and user input
const display = document.querySelector('.display');
const userInput = document.querySelector('.buttons');
//Initialize display text
let displayText = '0';
//Create an emoty array variable for digits 
let digits = [];
//Create an empty string variable for operator
let operator = '';
//Create a variable digit 
let digit; 
//Create function updateDisplay that takes digit and operator as parameters
function updateDisplay(digit, operator) {
	//Push digit to digits
    digits.push(digit);
	//If digits' length is less than ten
    if(digits.length < 10) {
		//Convert digits to a string a store in displayText
        displayText = digits.reduce((num, current) => num + current);
    }
	//Update display's text content with displayText
    display.textContent = displayText + operator;
}
//When the user clicks user input
userInput.addEventListener('click', (event) => {
    //Extract the value and class of the clicked button
    let value = event.target.value;
    let type = event.target.className;
	//If a number button was clicked
    if(type === 'number') {
		//Store value in digit
        digit = value;
    //If an operator buttton was clicked 
    } else if(type === 'operator') {
		//Store value in operator 
        operator = value; 
    }
	//Call updateDisplay
    updateDisplay(digit, operator);
});