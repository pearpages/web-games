import type { Point as PointType } from "./models";
import Point from "./Point";
import getColor from "./getColor";
import DOM from "./dom";
import options from "./options";
import createClick from "./createClick";

export default function renderClickedPoint(
  clickedPoint: PointType,
  treasure: PointType,
  offset?: PointType
): void {
  const point = Point.toScreen(clickedPoint, offset);
  point.color = getColor(treasure, clickedPoint);
  DOM.append(createClick(point));
}
