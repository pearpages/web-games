import type { Point as PointType } from "./models";
import renderClickedPoint from "./renderClickedPoint";
import options from "./options";

const { size } = options;
const offset: PointType = { x: options.size * options.zoom, y: 0 };

function renderHeatMap(treasure: PointType): void {
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      renderClickedPoint({ x, y }, treasure, offset);
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
