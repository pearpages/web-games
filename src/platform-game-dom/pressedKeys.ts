import type { Key, PressedKeys } from "./types";

function trackKeys(keys: string[], alias: Record<string, Key>): PressedKeys {
  const aliasKeys = Object.keys(alias);
  const pressedKeys: PressedKeys = Object.create({
    ArrowLeft: false,
    ArrowRight: false,
    ArrowUp: false,
  });
  function track(event: KeyboardEvent) {
    if (keys.includes(event.key)) {
      pressedKeys[event.key as Key] = event.type == "keydown";
      event.preventDefault();
    } else if (aliasKeys.includes(event.key.toLowerCase())) {
      pressedKeys[alias[event.key.toLowerCase()]] = event.type == "keydown";
      event.preventDefault();
    }
  }
  window.addEventListener("keydown", track);
  window.addEventListener("keyup", track);
  return pressedKeys;
}

const arrowKeys = trackKeys(["ArrowLeft", "ArrowRight", "ArrowUp"], {
  w: "ArrowUp",
  a: "ArrowLeft",
  d: "ArrowRight",
  o: "ArrowUp",
  k: "ArrowLeft",
  ñ: "ArrowRight",
});

export default arrowKeys;
