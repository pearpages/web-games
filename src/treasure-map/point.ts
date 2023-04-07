import type { Point, Event } from "./models";
import options from "./options";

const { zoom } = options;

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

function toScreen(
  { x, y }: Point,
  { x: offsetX, y: offsetY } = { x: 0, y: 0 }
): Point {
  if (x === 0) {
    return { x: x + offsetX, y: y * zoom + offsetY };
  }
  if (y === 0) {
    return { x: x * zoom + offsetX, y: y + offsetY };
  }
  return { x: x * zoom + offsetX, y: y * zoom + offsetY };
}

function normalize({ x, y }: Point): Point {
  return { x: Math.floor(x / zoom), y: Math.floor(y / zoom) };
}

function toPoint(event: Event): Point {
  return {
    x: event.offsetX,
    y: event.offsetY,
  };
}

export default { getRandomPoint, getDistance, toScreen, normalize, toPoint };
