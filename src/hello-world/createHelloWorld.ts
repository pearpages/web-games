export default function createHelloWorld(id: string) {
  let left = 0;
  let top = 100;
  const element = document.createElement("div");
  element.innerText = "Hello World";
  element.id = id;
  const style = {
    border: "1px solid red",
    display: "inline-block",
    padding: "4px",
    position: "absolute",
    top: `${top}px`,
  };
  Object.entries(style).forEach(([key, value]: any) => {
    element.style[key] = value;
  });
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
