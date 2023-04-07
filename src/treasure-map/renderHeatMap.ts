import type { Point as PointType } from "./models";
import DOM from "./dom";
import createClick from "./createClick";
import getColorFromDistance from "./getColorFromDistance";
import options from "./options";
import Point from "./point";

const { size } = options;
const offset: PointType = { x: options.size * options.zoom, y: 0 };

export default function renderHeatMap(treasure: PointType): void {
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const point = Point.toScreen({ x, y }, offset);
      point.color = getColorFromDistance(treasure, { x, y });
      DOM.append(createClick(point));
    }
  }
}
