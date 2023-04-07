type CreateElement = (doMagic: (div: HTMLDivElement) => void) => HTMLDivElement;

const createDiv: CreateElement = (doMagic) => {
  const div = document.createElement("div");
  doMagic(div);
  return div;
};

function append(element: HTMLElement) {
  document.body.appendChild(element);
}

export default { createDiv, append };
export type { CreateElement };
