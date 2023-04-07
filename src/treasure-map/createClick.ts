import type { Point, Element, Temperature } from "./models";
import DOM from "./dom";
import getColor from "./getColor";
import options from "./options";

const size = options.zoom;

type Options = { temperature: Temperature; point: Point };

export default function createClick({
  temperature,
  point,
}: Options): HTMLDivElement {
  return DOM.createDiv((div) => {
    div.style.position = "absolute";
    div.style.left = `${point.x}px`;
    div.style.top = `${point.y}px`;
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getColor(temperature);
  });
}
