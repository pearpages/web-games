import type { Point, Element } from "./models";
import type { Temperature } from "./math";
import type { CreateElement } from "./dom";
import getColor from "./getColor";

type Options = { point: Point; temperature: Temperature };

class Click implements Element {
  static createElement: CreateElement;
  static size: number;
  temperature: Temperature;
  point: Point;
  constructor({ point, temperature }: Options) {
    this.temperature = temperature;
    this.point = point;
  }
  getElement = () =>
    Click.createElement((div) => {
      div.style.position = "absolute";
      div.style.left = `${this.point.x}px`;
      div.style.top = `${this.point.y}px`;
      div.style.width = `${Click.size}px`;
      div.style.height = `${Click.size}px`;
      div.style.backgroundColor = getColor(this.temperature);
    });
}

export default function creator({
  create,
  size,
}: {
  create: CreateElement;
  size: number;
}): (options: Options) => Click {
  Click.createElement = create;
  Click.size = size;
  return (options) => new Click(options);
}
