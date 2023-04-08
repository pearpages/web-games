import DOM from "./dom";

export default function renderWonMessage() {
  DOM.append(
    DOM.createDiv((div) => {
      div.innerText = "You won!";
      div.style.fontSize = "30px";
      div.style.color = "red";
    })
  );
}
