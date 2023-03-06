type CreateElement = (doMagic: (div: HTMLDivElement) => void) => HTMLDivElement;

const createDiv: CreateElement = (doMagic) => {
    const div = document.createElement('div');
    doMagic(div);
    return div;
}

function render(element: HTMLElement) {
    document.body.appendChild(element);
}

export { createDiv, render };
export type { CreateElement }