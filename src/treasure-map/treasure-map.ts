import createMap from "./createMap";
import createHeatMap from "./renderHeatMap";
import DOM from "./dom";
import createClick from "./createClick";
import type { Event } from "./models";
import getColorFromDistance from "./getColorFromDistance";
import Point from "./point";
import options from "./options";

function showHeatMapButton(onclick: (removeButton: () => void) => void): void {
  const button = document.createElement("button");
  button.innerText = "Show heat map";
  button.onclick = () => onclick(() => button.remove());
  document.body.appendChild(button);
}

export default function game() {
  const treasure = Point.getRandomPoint({
    right: options.size,
    bottom: options.size,
  });

  let won = false;

  const score = {
    id: "score",
    totalClicks: 0,
    getScoreText() {
      return `Total clicks: ${this.totalClicks}`;
    },
    init() {
      DOM.append(
        DOM.createDiv((div) => {
          div.id = this.id;
          div.innerText = this.getScoreText();
        })
      );
    },
    reRender() {
      document.getElementById(this.id).innerText = this.getScoreText();
    },
  };

  DOM.append(
    createMap((event: Event) => {
      if (won) {
        return;
      }
      const clickedPoint = Point.normalize(Point.toPoint(event));
      score.totalClicks++;
      if (treasure.x === clickedPoint.x && treasure.y === clickedPoint.y) {
        alert("You found the treasure!");
        won = true;
        DOM.append(
          DOM.createDiv((div) => {
            div.innerText = "You won!";
            div.style.fontSize = "30px";
            div.style.color = "red";
          })
        );
      }
      const point = Point.toScreen(clickedPoint);
      point.color = getColorFromDistance(treasure, clickedPoint);

      DOM.append(createClick(point));
      score.reRender();
    })
  );
  score.init();
  showHeatMapButton((removeButton: () => void) => {
    createHeatMap(treasure);
    removeButton();
  });
}
