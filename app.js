
//* Target DOM elements

const display = document.querySelector('.input')
const pad = document.querySelector('.pad-grid .one')


console.log(display)
console.log(pad.innerHTML)


pad.addEventListener('click', function(){

//Get the value of the button clicked
let value = pad.innerHTML

//Append the value clicked to the display
display.innerHTML += value


})



