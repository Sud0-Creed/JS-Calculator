//* Target DOM elements

const display = document.querySelector('.input')
const pad = document.querySelector('.pad-grid')

console.log(display)
console.log(pad.innerHTML)

//* Added event listen to the parent element.
//* Used event bubbling on parent element.
pad.addEventListener('click', function (e) {

    if (e.target.className == "pad") {

        //Get the value of the button clicked
        const div = e.target.innerHTML;

        console.log(div)
        //Append the value clicked to the display
        display.innerHTML += div
    }

})



