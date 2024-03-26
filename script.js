// Create an integer variable for num1
let num1 = 0; 
// Create an integer variable for num2
let num2 = 0; 
// Create an object for operators
const operators = {};
// Create an array variable for digits
let digits = [];
// Create a node for display
const display = document.querySelector('.display');
//Create a string variable for displayValue
let displayValue = '';
// Create a nodelist for numBtns 
const numBtns = document.querySelectorAll('.number');
//For each numBtn that a user clicks store the numBtn's value in digits
numBtns.forEach((numBtn) => {
    numBtn.addEventListener('click', () => getNum(numBtn));
});

function getNum(numBtn) {
        digits.push(numBtn.value);
        //Set a limit on how many digits a user can enter
        if (digits.length < 10) {
            //Convert digits to a string and store in displayValue
            displayValue = digits.reduce((value, currentDigit) => value + currentDigit);
            //Set displayValue as display's text content
            display.textContent = displayValue;
            //Convert displayValue to an integer and store in num1
            num1 = Number(displayValue);;
            console.log(num1);
        }
}
