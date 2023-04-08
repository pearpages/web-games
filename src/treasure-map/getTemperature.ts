import type { Point, Temperature } from "./models";
import point from "./point";

function getDistanceHint(distance: number): Temperature {
  if (distance === 0) {
    return "Treasure!";
  } else if (distance < 2) {
    return "Boiling hot!";
  } else if (distance < 4) {
    return "Really hot";
  } else if (distance < 6) {
    return "Hot";
  } else if (distance < 10) {
    return "Warm";
  } else if (distance < 15) {
    return "Cold";
  } else if (distance < 20) {
    return "Really cold";
  } else {
    return "Freezing!";
  }
}

export default function getTemperature(a: Point, b: Point): Temperature {
  return getDistanceHint(point.getDistance(a, b));
}
