import createClick from "./createClick";
import DOM from "./dom";
import getColorFromDistance from "./getColor";
import type { Color } from "./models";
import options from "./options";
import Point from "./Point";

const { size } = options;

export default function renderColorScheme() {
  const treasure = Point.create(options.size, 0);
  const colors: Color[] = [];
  for (let x = 0; x < size; x++) {
    colors.push(getColorFromDistance(treasure, { x, y: 0 }));
  }
  colors.push(getColorFromDistance(treasure, treasure));

  const div = DOM.createDiv();

  div.appendChild(DOM.createDiv((div) => (div.innerHTML = "Distance: ")));

  colors.forEach((color) =>
    div.appendChild(
      createClick({ x: 0, y: 0, color }, 12, "relative", "inline-block")
    )
  );

  DOM.append(div);
}
