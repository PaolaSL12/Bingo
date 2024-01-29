import { bingoNumbers } from "../data/allNumbers";
import { generateRandomNumbers } from "../data/randomNumbers";

let paused = false;

export function togglePause() {
    paused = !paused;
}

export const SelectedNumber = async () => {
    const selectedContainer = document.querySelector(".divNumber");
    
    const synth = window.speechSynthesis;

    if (selectedContainer) {
        const randomNumbers = generateRandomNumbers();
        const delay = 4000;

        for (let i = 0; i < randomNumbers.length; i++) {
            await new Promise((resolve) => setTimeout(resolve, delay));

            while (paused) {
                await new Promise(resolve => setTimeout(resolve, 100));
            }

            selectedContainer.innerHTML = "";

            const numberSelected = document.createElement("p");
            const currentNumber = bingoNumbers[randomNumbers[i]];

            const utterThis = new SpeechSynthesisUtterance(`${currentNumber}`)

            synth.speak(utterThis)
            numberSelected.textContent = currentNumber;
            selectedContainer.append(numberSelected);

            const allNumberContainers = document.querySelectorAll(".divAllNumbers .divnumber");
            
            allNumberContainers.forEach(container => {
                const containerNumber = container.querySelector("p").textContent;
                if (containerNumber === currentNumber) {
                    container.classList.add("selected");
                }
            });
        }
    }
};