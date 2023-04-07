type Temperature =
  | "Treasure!"
  | "Boiling hot!"
  | "Really hot"
  | "Hot"
  | "Warm"
  | "Cold"
  | "Really cold"
  | "Freezing!";

type Color =
  | "gold"
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "indigo"
  | "black";

type Point = {
  x: number;
  y: number;
  color?: Color;
};

type Event = { offsetX: number; offsetY: number };

interface Element {
  getElement(): HTMLElement;
}

export type { Temperature, Color, Point, Element, Event };
