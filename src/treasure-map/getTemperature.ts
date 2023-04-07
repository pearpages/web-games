import type { Point, Temperature } from "./models";
import point from "./point";

function augmentPoint({ x, y }: Point, zoom: number): Point {
  return {
    x: x * zoom,
    y: y * zoom,
  };
}

function getDistanceHint(distance: number): Temperature {
  if (distance === 0) {
    return "Treasure!";
  } else if (distance < 10) {
    return "Boiling hot!";
  } else if (distance < 20) {
    return "Really hot";
  } else if (distance < 40) {
    return "Hot";
  } else if (distance < 80) {
    return "Warm";
  } else if (distance < 160) {
    return "Cold";
  } else if (distance < 320) {
    return "Really cold";
  } else {
    return "Freezing!";
  }
}

export default function getTemperature(
  a: Point,
  b: Point,
  zoom = 1
): Temperature {
  return getDistanceHint(
    point.getDistance(augmentPoint(a, zoom), augmentPoint(b, zoom))
  );
}
