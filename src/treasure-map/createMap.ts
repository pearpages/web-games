import type { Event } from "./models";
import DOM from "./dom";

type Options = {
  size: number;
  onClick: (event: Event) => void;
};

export default function createMap({ size, onClick }: Options): HTMLDivElement {
  return DOM.createDiv((div) => {
    div.style.borderRight = "1px solid black";
    div.style.borderBottom = "1px solid black";
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.onclick = onClick;
  });
}
