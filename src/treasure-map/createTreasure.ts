import Point from "./Point";
import options from "./options";

export default function createTreasure() {
  return Point.getRandomPoint({
    right: options.size,
    bottom: options.size,
  });
}
