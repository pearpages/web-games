import type { Point } from "./models";
import math from "./math";

function getDistance(a: Point, b: Point): number {
  const x = a.x - b.x;
  const y = a.y - b.y;
  return Math.sqrt(x ** 2 + y ** 2);
}

function getRandomPoint({
  right,
  bottom,
}: {
  right: number;
  bottom: number;
}): Point {
  return {
    x: math.getRandomNumber(right),
    y: math.getRandomNumber(bottom),
  };
}

export default { getRandomPoint, getDistance };
