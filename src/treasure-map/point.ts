import type { Point } from "./models";

function getDistance(a: Point, b: Point): number {
  const x = a.x - b.x;
  const y = a.y - b.y;
  return Math.sqrt(x ** 2 + y ** 2);
}

function getRandomNumber(size: number): number {
  return Math.floor(Math.random() * size);
}

function getRandomPoint({
  right,
  bottom,
}: {
  right: number;
  bottom: number;
}): Point {
  return {
    x: getRandomNumber(right),
    y: getRandomNumber(bottom),
  };
}

export default { getRandomPoint, getDistance };
