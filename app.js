//Import my modules
import { equal, clear, del } from "./calculations.js";

//* Target DOM elements
const display = document.querySelector(".input");
const pad = document.querySelector(".pad-grid");

console.log(display);
console.log(pad.innerHTML);

//* Added event listen to the parent element.
//* Used event bubbling on parent element.
pad.addEventListener("click", function (e) {
  
    if (e.target.className == "pad") {
   
    //Get the value of the button clicked
    const div = e.target.innerHTML;

    //Append the value clicked to the display
    display.innerHTML += div;
  }
  
  else if (e.target.className == "equal") {
    //Get all the inputs
    const output = display.innerHTML;

    //Pass output into function
    let answer = equal(output);

    display.textContent = answer;
  } 
  
  else if (e.target.className == "backspace") {
    del();
  }

});
