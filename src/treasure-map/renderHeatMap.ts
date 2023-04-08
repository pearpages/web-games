import type { Point as PointType } from "./models";
import DOM from "./dom";
import createClick from "./createClick";
import getColor from "./getColor";
import options from "./options";
import Point from "./point";

const { size } = options;
const offset: PointType = { x: options.size * options.zoom, y: 0 };

function renderHeatMap(treasure: PointType): void {
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const point = Point.toScreen({ x, y }, offset);
      point.color = getColor(treasure, { x, y });
      DOM.append(createClick(point));
    }
  }
}

function showHeatMapButton(treasure: PointType): void {
  const button = document.createElement("button");
  button.innerText = "Show heat map";
  button.onclick = () => {
    renderHeatMap(treasure);
    button.remove();
  };
  document.body.appendChild(button);
}

export default {
  showButton: showHeatMapButton,
};
