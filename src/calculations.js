//! Need to import target dom elements for static loading
import {display} from "./app.js";



//* Calculate Function
export function equal(calc) {

    //Evaluate string expression and return result
    let answer = eval(calc)

    return answer
}

//* Clear Function
export function clear (){

    display.textContent = ''

}

//* Backspace Function
export function del (){

    let currentResult = display.textContent
    display.textContent = currentResult.slice(0, -1)

}