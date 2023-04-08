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

export default function createHelloWorld(id: string) {
  let left = 0;
  let top = 100;
  const element = createElement(id);

  return {
    element,
    moveLeft: () => {
      left -= 10;
      element.style.left = `${left}px`;
    },
    moveRight: () => {
      left += 10;
      element.style.left = `${left}px`;
    },
    moveUp: () => {
      top -= 10;
      element.style.top = `${top}px`;
    },
    moveDown: () => {
      top += 10;
      element.style.top = `${top}px`;
    },
  };
}
