import type { Temperature, Color, Point } from "../models";
import getTemperature from "./getTemperature";

function getColor(temperature: Temperature): Color {
  switch (temperature) {
    case "Treasure!":
      return "gold";
    case "Boiling hot!":
      return "red";
    case "Really hot":
      return "orange";
    case "Hot":
      return "yellow";
    case "Warm":
      return "green";
    case "Cold":
      return "blue";
    case "Really cold":
      return "indigo";
    case "Freezing!":
      return "black";
  }
}

export default function getColorFromDistance(a: Point, b: Point): Color {
  return getColor(getTemperature(a, b));
}
