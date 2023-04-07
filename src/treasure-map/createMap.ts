import type { Event } from "./models";
import DOM from "./dom";
import options from "./options";

const size = options.size * options.zoom;

type HandleClick = (event: Event) => void;

export default function createMap(onClick: HandleClick): HTMLDivElement {
  return DOM.createDiv((div) => {
    div.style.borderRight = "1px solid black";
    div.style.borderBottom = "1px solid black";
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.onclick = onClick;
  });
}
