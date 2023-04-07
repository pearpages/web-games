import type { Point } from "./models";
import DOM from "./dom";
import options from "./options";

const size = options.zoom;

export default function createClick(point: Point): HTMLDivElement {
  return DOM.createDiv((div) => {
    div.style.position = "absolute";
    div.style.left = `${point.x}px`;
    div.style.top = `${point.y}px`;
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    if (point.color) {
      div.style.backgroundColor = point.color;
    }
  });
}
