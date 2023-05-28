//! Import css for webpack bundler
import './styles/style.css';



//Import my modules
import {equal, clear, del} from "./calculations.js";

//* Target DOM elements
export const display = document.querySelector(".input");
const pad = document.querySelector(".pad-grid");
const body = document.querySelector('.main')

console.log(body)


//* Added event listen to the parent element.
//* Used event bubbling on parent element.
pad.addEventListener("click", function (e) {

    if (e.target.className == "pad") {

        //Get the value of the button clicked
        const div = e.target.innerHTML;

        //Append the value clicked to the display
        display.innerHTML += div;

        display.style.color = "#06031ad8"

    } else if (e.target.className == "equal") {
        //Get all the inputs
        const output = display.innerHTML;

        //Pass output into function
        let answer = equal(output);

        //Change output color
        display.style.color = "#0f6be2"


        display.textContent = answer;
    } else if (e.target.className == "backspace") {
        del()
        
    } else if (e.target.className == "clear") {

        clear()

    }

    //*Theme conditions
    else if (e.target.className == "t1"){
        body.setAttribute('class', 'one')
    }

    else if (e.target.className == "t2"){
        body.setAttribute('class', 'two')
    }

});






