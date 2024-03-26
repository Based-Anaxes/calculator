//Create an integer variable for num1
let num1 = 0;
//Create an integer variable for num2
let num2 = 0;
//Create an object for operators
const operators = {};
//Create an array variable for digits
let digits = [];
//Create a display variable and store the .display element in it
const display = document.querySelector('.display');
//Create a userInput variable and store the .buttons element in it 
const userInput = document.querySelector('.buttons')
//Create a string variable for displayValue
let displayValue = '';
//Create a variable digit with no value
let digit; 
//Create a function getOpperand that takes digit as a parameter
function getOpperand(digit) {
    //Store digit in digits
    digits.push(digit);
    //If digits is less than 10 
    if(digits.length < 10) {
        //Convert digits to a string and store in displayValue 
        displayValue = digits.reduce((num, current) => num + current);
	    //Set displayValue as display's text content
        display.textContent = displayValue; 
	    //Convert displayValue to a number and store in num1
        num1 = Number(displayValue);
        console.log(num1);
    }
}
//Add a click event listener to userInput
userInput.addEventListener('click', (event) => {
    	//Create a variable btn and store the button that was clicked in it
        let btn = event.target; 
	    //If the user clicked a .number button store it's value in digit
        if(btn.className == 'number') {
            digit = btn.value;
            //Call the getOpperand function
            getOpperand(digit);
        }
}) 

