//Create constants for display element and user input
const display = document.querySelector('.display');
const userInput = document.querySelector('.buttons')
//Create a variable displayText and assign it to display's text content
let displayText = display.textContent;
//Create a function to update display based on which button was clicked
function updateDisplay(event) {
	//Create variables for the clicked button's value and type
    let value = event.target.value;
    let type = event.target.className; 
	//If displayText is assigned to the string zero and the button that was clicked was a number button 
    if(displayText === '0' && type === 'number') {
		//Store value in displayText
        displayText = value; 
	//Otherwise if the button that was clicked was a numbers button 
    } else if (type === 'number') {
		//Append value to the existing displayText 
        displayText += value;
	//Otherwise if the button that was clicked was an operator button and displayText is not an empty string 
    } else if (type === 'operator') {
        //Append value to the exisiting displayText followed by a space
        displayText += value; 
    }
    //Assign displayText to the display's text content
    display.textContent = displayText; 
}
//When the user clicks userInput, call updateDisplay
userInput.addEventListener('click', updateDisplay);