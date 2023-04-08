import type { Point as PointType, Event } from "./models";
import options from "./options";

const { zoom } = options;

function getRandomNumber(size: number): number {
  return Math.floor(Math.random() * size);
}

function normalize({ x, y }: PointType): PointType {
  return { x: Math.floor(x / zoom), y: Math.floor(y / zoom) };
}

class Point implements PointType {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  static getDistance(a: PointType, b: PointType): number {
    const x = a.x - b.x;
    const y = a.y - b.y;
    return Math.sqrt(x ** 2 + y ** 2);
  }
  static create(x: number, y: number): PointType {
    return new Point(x, y);
  }
  static getRandomPoint({
    right,
    bottom,
  }: {
    right: number;
    bottom: number;
  }): PointType {
    return {
      x: getRandomNumber(right),
      y: getRandomNumber(bottom),
    };
  }
  static fromEvent(event: Event): PointType {
    const point = normalize({
      x: event.offsetX,
      y: event.offsetY,
    });
    return new Point(point.x, point.y);
  }
  static toScreen(
    { x, y }: PointType,
    { x: offsetX, y: offsetY } = { x: 0, y: 0 }
  ): PointType {
    if (x === 0) {
      return { x: x + offsetX, y: y * zoom + offsetY };
    }
    if (y === 0) {
      return { x: x * zoom + offsetX, y: y + offsetY };
    }
    return { x: x * zoom + offsetX, y: y * zoom + offsetY };
  }
}

export default Point;
