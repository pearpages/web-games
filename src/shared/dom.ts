type CreateDiv = (
  changeElement?: (div: HTMLDivElement) => void
) => HTMLDivElement;

const createDiv: CreateDiv = (changeElement) => {
  const div = document.createElement("div");
  if (changeElement) changeElement(div);
  return div;
};

function append(element: HTMLElement) {
  document.body.appendChild(element);
}

function applyStyles(element: HTMLElement, styles: Record<string, string>) {
  Object.entries(styles).forEach(([key, value]) => {
    element.style[key as any] = value;
  });
}

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

export default { createDiv, createButton, append, applyStyles };
export type { CreateDiv };
