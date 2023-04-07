import type { Temperature, Point } from "./models";

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

function augmentPoint({ x, y }: Point, zoom: number): Point {
  return {
    x: x * zoom,
    y: y * zoom,
  };
}

function getTemperature(a: Point, b: Point, zoom = 1): Temperature {
  return getDistanceHint(
    getDistance(augmentPoint(a, zoom), augmentPoint(b, zoom))
  );
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

export { getRandomPoint, getTemperature };
export type { Temperature };
