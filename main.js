//declare variable

const inputName = document.getElementById('name-input');
const inputButton = document.getElementById("button-input");
const outputName = document.getElementById('name-output');
const currentName = document.getElementById('name');
const sectionColor = document.getElementById('section');

const greenColorButton = document.getElementById('green-button-color');
const pinkColorButton = document.getElementById('pink-button-color');
const blueColorButton = document.getElementById('blue-button-color');


inputButton.addEventListener('click', () => {
    console.log(inputName.value);
    outputName.textContent = inputName.value;
});

greenColorButton.addEventListener('click', () => {
    sectionColor.style.backgroundColor = 'lightGreen';
   
});

pinkColorButton.addEventListener('click', () => {
    sectionColor.style.backgroundColor = 'pink';
   
});

blueColorButton.addEventListener('click', () => {
    sectionColor.style.backgroundColor = 'lightBlue';
   
});




//Validate Script import
console.log('hello world!')
console.log(inputName)
console.log(currentName)