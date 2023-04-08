function createButton({
  innerText,
  onClick,
}: {
  onClick: () => void;
  innerText: string;
}): HTMLButtonElement {
  const button = document.createElement("button");
  button.innerText = innerText;
  button.onclick = onClick;
  return button;
}

export default function createButtons(
  buttons: Array<{ innerText: string; onClick: () => void }>
): HTMLButtonElement[] {
  return buttons.map(({ innerText, onClick }) =>
    createButton({ innerText, onClick })
  );
}
