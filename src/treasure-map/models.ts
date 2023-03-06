type Point = {
    x: number;
    y: number;
}

type Event = { offsetX: number, offsetY: number }

interface Element {
    getElement(): HTMLElement;
}

export type { Point, Element, Event };