import DOM from "/src/shared/dom";

function createElement(id: string): HTMLDivElement {
  return DOM.createDiv((div) => {
    div.innerText = "Hello World";
    div.id = id;
    const style = {
      border: "1px solid red",
      display: "inline-block",
      padding: "4px",
      position: "absolute",
      top: `${top}px`,
    };
    DOM.applyStyles(div, style);
  });
}

const toPx = (number: number) => `${number}px`;

export default function createHelloWorld(id: string) {
  let left = 0;
  let top = 100;
  const element = createElement(id);
  DOM.applyStyles(element, { left: toPx(left), top: toPx(top) });

  return {
    element,
    moveLeft: () => {
      left -= 10;
      element.style.left = toPx(left);
    },
    moveRight: () => {
      left += 10;
      element.style.left = toPx(left);
    },
    moveUp: () => {
      top -= 10;
      element.style.top = toPx(top);
    },
    moveDown: () => {
      top += 10;
      element.style.top = toPx(top);
    },
  };
}
