import DOM from "/src/shared/dom";

export default function createButtons(
  buttons: Array<{ innerText: string; onClick: () => void }>
): HTMLButtonElement[] {
  return buttons.map(DOM.createButton);
}
