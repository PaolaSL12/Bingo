
import { SelectedNumber } from "../SelectedNumber/SelectedNumber";
import { printAllNumbers } from "../printAllNumbers/printAllNumbers";
import { printButtonPuse } from "../printButtonPuse/printButtonPuse";
import { printSelectedNumber } from "../printSelectedNumber/printSelectedNumber";
import "./StartButton.css";

export const printStartButton = () => {
  const appContainer = document.querySelector("#app");

  const divStartButton = document.createElement("div");
  const startButton = document.createElement("button");

  divStartButton.className = "startButton";
  startButton.textContent = "EMPEZAR JUEGO";
  startButton.addEventListener("click", () => {
    startButton.className = "none";
    divStartButton.className = "none";
   
    printSelectedNumber();
    SelectedNumber()
    printAllNumbers();
    printButtonPuse()

    
  });

  divStartButton.append(startButton);
  appContainer.append(divStartButton);
};
