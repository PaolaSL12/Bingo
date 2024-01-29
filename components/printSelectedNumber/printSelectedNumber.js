import { SelectedNumber } from '../SelectedNumber/SelectedNumber';
import { generateRandomNumbers } from '../data/randomNumbers';
import './printSelectedNumber.css'

export const printSelectedNumber = () => {
    const appContainer = document.querySelector("#app");

    const divSelectedNumber = document.createElement("div");
    const divNumber = document.createElement("div");
    const numberSelected = document.createElement("p");

    const randomNumbers = generateRandomNumbers()

    divSelectedNumber.className = "divSelectedNumber";
    divNumber.className = "divNumber"

    SelectedNumber()

    divNumber.append(numberSelected);
    divSelectedNumber.append(divNumber);
    appContainer.append(divSelectedNumber);
}