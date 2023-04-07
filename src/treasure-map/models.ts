type Temperature =
  | "Treasure!"
  | "Boiling hot!"
  | "Really hot"
  | "Hot"
  | "Warm"
  | "Cold"
  | "Really cold"
  | "Freezing!";

type Point = {
  x: number;
  y: number;
};

type Event = { offsetX: number; offsetY: number };

interface Element {
  getElement(): HTMLElement;
}

export type { Temperature, Point, Element, Event };
