import createMap from "./createMap";
import heatMap from "./renderHeatMap";
import DOM from "./dom";
import createClick from "./createClick";
import type { Event } from "./models";
import getColor from "./getColor";
import Point from "./point";
import type { Point as PointType } from "./models";
import options from "./options";
import createScore from "./createScore";

function createTreasure() {
  return Point.getRandomPoint({
    right: options.size,
    bottom: options.size,
  });
}

function renderWonMessage() {
  DOM.append(
    DOM.createDiv((div) => {
      div.innerText = "You won!";
      div.style.fontSize = "30px";
      div.style.color = "red";
    })
  );
}

function renderClickedPoint(
  clickedPoint: PointType,
  treasure: PointType
): void {
  const point = Point.toScreen(clickedPoint);
  point.color = getColor(treasure, clickedPoint);
  DOM.append(createClick(point));
}

function hasWonTheGame(clickedPoint: PointType, treasure: PointType) {
  return treasure.x === clickedPoint.x && treasure.y === clickedPoint.y;
}

export default function game() {
  const treasure = createTreasure();
  let won = false;
  const score = createScore();

  DOM.append(
    createMap((event: Event) => {
      if (won) {
        return;
      }
      const clickedPoint = Point.normalize(Point.toPoint(event));
      renderClickedPoint(clickedPoint, treasure);
      score.updateScore();
      if (hasWonTheGame(clickedPoint, treasure)) {
        alert("You found the treasure!");
        won = true;
        renderWonMessage();
      }
    })
  );
  score.init();
  heatMap.showButton(treasure);
}
