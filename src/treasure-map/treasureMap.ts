import createMap from "./createMap";
import heatMap from "./renderHeatMap";
import DOM from "./dom";
import renderClickedPoint from "./renderClickedPoint";
import type { Event } from "./models";
import Point from "./Point";
import type { Point as PointType } from "./models";
import createTreasure from "./createTreasure";
import createScore from "./createScore";
import renderWonMessage from "./renderWonMessage";
import renderColorScheme from "./renderColorScheme";

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
      const clickedPoint = Point.fromEvent(event);
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
  renderColorScheme();
  heatMap.showButton(treasure);
}
