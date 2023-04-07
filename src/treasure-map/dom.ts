type CreateDiv = (doMagic?: (div: HTMLDivElement) => void) => HTMLDivElement;

const createDiv: CreateDiv = (doMagic) => {
  const div = document.createElement("div");
  if (doMagic) doMagic(div);
  return div;
};

function append(element: HTMLElement) {
  document.body.appendChild(element);
}

export default { createDiv, append };
export type { CreateDiv };
