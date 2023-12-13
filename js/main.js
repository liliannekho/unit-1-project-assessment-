
const initialNumber = 0;
let displayNumber = initialNumber;
let clickCounter = 1; //input field starts at 1


let displayElement = document.querySelector('.display');
let inputElement = document.querySelector('.input');
let plusButton = document.querySelector('.plus');
let minusButton = document.querySelector('.minus');


const add = () => {
    //increment the click counter
    clickCounter++;
    //update display and input field 
    displayNumber = initialNumber + clickCounter;
    displayElement.innerHTML = displayNumber;
    inputElement.value = clickCounter; 
    //color change
    changeColor();
};

const minus = () => {
    //decrease the click counter 
    clickCounter--;
    displayNumber = initialNumber + clickCounter;
    displayElement.innerHTML = displayNumber;
    inputElement.value = clickCounter; 
    changeColor();
};

//Event listeners
plusButton.addEventListener('click', add);
minusButton.addEventListener('click', minus);

const initialize = () => {
    displayElement.innerHTML = displayNumber;
    inputElement.value = clickCounter;
};

initialize();

//Changing colors
const changeColor = () => {
    //change color based on counter value
    if (displayNumber < 0) {
        displayElement.style.color = 'red';
    } else {
        displayElement.style.color = 'black';
    }
};
