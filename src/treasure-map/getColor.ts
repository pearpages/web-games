import type { Temperature } from "./models";

type Color =
  | "gold"
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "indigo"
  | "black";

export default function getColor(temperature: Temperature): Color {
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
