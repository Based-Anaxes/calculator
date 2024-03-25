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
    //Convert digits to a string and store in num
    let num = digits.reduce((value, currentDigit) => value + currentDigit);
    //Store num in displayValue
    displayValue = num; 
    //Store displayValue in display,textContent
    display.textContent = displayValue;
    //Convert num to an integer and store in num1
    num1 = Number(num);
    console.log(num1);
}
 
