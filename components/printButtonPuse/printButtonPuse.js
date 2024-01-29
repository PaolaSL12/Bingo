import { togglePause } from "../SelectedNumber/SelectedNumber";
import "./printButtonPuse.css";

export const printButtonPuse = () => {
    const appContainer = document.querySelector("#app");

    const divPauseButton = document.createElement("div");
    const pauseButton = document.createElement("button");

    divPauseButton.className = "divPauseButton"
    pauseButton.textContent = "PAUSAR JUEGO";

    pauseButton.addEventListener("click", () => {
        togglePause()
    })


    divPauseButton.append(pauseButton);
    appContainer.append(divPauseButton);
}