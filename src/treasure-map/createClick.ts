import type { Point as PointType } from "./models";
import options from "./options";
import DOM from "/src/shared/dom";

const defaultSize = options.zoom;

export default function createClick(
  point: PointType,
  size = defaultSize,
  position = "absolute",
  display?: string
): HTMLDivElement {
  return DOM.createDiv((div) => {
    if (display) {
      div.style.display = display;
    }
    div.style.position = position;
    div.style.left = `${point.x}px`;
    div.style.top = `${point.y}px`;
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    if (point.color) {
      div.style.backgroundColor = point.color;
    }
  });
}
