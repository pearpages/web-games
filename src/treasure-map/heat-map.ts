import type { Point } from "./models";
import getTemperature from "./getTemperature";
import DOM from "./dom";

type Options = {
  treasure: Point;
  options: any;
  createClick: any;
  offset: Point;
};

export default function renderHeatMap({
  treasure,
  options,
  createClick,
  offset,
}: Options) {
  for (let y = 0; y < options.size; y++) {
    for (let x = 0; x < options.size; x++) {
      const point = options.toScreen({ x, y }, offset);
      const treasurePoint = options.toScreen(treasure, offset);
      DOM.append(
        createClick({
          point,
          temperature: getTemperature(treasurePoint, point),
        }).getElement()
      );
    }
  }
}
