import createButtons from "./createButtons";
import createHelloWorld from "./createHelloWorld";

function main() {
  const hello = createHelloWorld("hello");
  const buttons = createButtons([
    { innerText: "Left", onClick: hello.moveLeft },
    { innerText: "Up", onClick: hello.moveUp },
    { innerText: "Right", onClick: hello.moveRight },
    { innerText: "Down", onClick: hello.moveDown },
  ]);

  document.body.appendChild(hello.element);
  buttons.forEach((button) => document.body.appendChild(button));
}

export default main;
