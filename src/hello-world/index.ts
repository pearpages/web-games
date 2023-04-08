import createButtons from "./createButtons";
import createHelloWorld from "./createHelloWorld";
import DOM from "/src/shared/dom";

function main() {
  const hello = createHelloWorld("hello");
  const buttons = createButtons([
    { innerText: "Left", onClick: hello.moveLeft },
    { innerText: "Up", onClick: hello.moveUp },
    { innerText: "Right", onClick: hello.moveRight },
    { innerText: "Down", onClick: hello.moveDown },
  ]);

  DOM.append(hello.element);
  buttons.forEach((button) => DOM.append(button));
}

export default main;
