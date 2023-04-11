import type { IVec } from "./types";
class Vec implements IVec {
  constructor(public x: number, public y: number) {}
  plus(other: Vec) {
    return new Vec(this.x + other.x, this.y + other.y);
  }
  times(factor: number) {
    return new Vec(this.x * factor, this.y * factor);
  }
}

export default Vec;
