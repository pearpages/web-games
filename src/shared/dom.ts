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

export default { createDiv, append };
export type { CreateDiv };