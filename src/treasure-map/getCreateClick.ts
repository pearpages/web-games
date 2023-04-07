import type { Point, Element, Temperature } from "./models";
import DOM from "./dom";
import getColor from "./getColor";

type Options = { point: Point; temperature: Temperature };

type Factory = (options: Options) => Element;

export default function getCreateClick(size: number): Factory {
  return ({ temperature, point }) => ({
    getElement: () =>
      DOM.createDiv((div) => {
        div.style.position = "absolute";
        div.style.left = `${point.x}px`;
        div.style.top = `${point.y}px`;
        div.style.width = `${size}px`;
        div.style.height = `${size}px`;
        div.style.backgroundColor = getColor(temperature);
      }),
  });
}
