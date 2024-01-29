import { bingoNumbers } from '../data/allNumbers';
import './printAllNumbers.css'

export const printAllNumbers = () => {
    const appContainer = document.querySelector("#app");

    const divAllNumbers = document.createElement("div");
    divAllNumbers.className = "divAllNumbers"

    const selected = document.querySelector("selected")

    for (let i = 0; i < bingoNumbers.length; i++) {
        const divnumber = document.createElement("div");
        const numberp = document.createElement("p");

        numberp.textContent = bingoNumbers[i]
        

        divnumber.className = "divnumber"
        divnumber.append(numberp);
        divAllNumbers.append(divnumber)
        
    }
 

    appContainer.append(divAllNumbers);
}

