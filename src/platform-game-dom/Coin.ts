import Vec from "./Vec";
import type { IVec, IState, ICoin } from "./types";
import State from "./State";

const size = new Vec(0.6, 0.6);

const wobbleSpeed = 8,
  wobbleDist = 0.07;

class Coin implements ICoin {
  constructor(public pos: IVec, public basePos: IVec, public wobble: number) {}

  get type(): "coin" {
    return "coin";
  }

  get size() {
    return size;
  }

  static create(pos: IVec) {
    let basePos = pos.plus(new Vec(0.2, 0.1));
    return new Coin(basePos, basePos, Math.random() * Math.PI * 2);
  }

  update(time: number): ICoin {
    let wobble = this.wobble + time * wobbleSpeed;
    let wobblePos = Math.sin(wobble) * wobbleDist;
    return new Coin(
      this.basePos.plus(new Vec(0, wobblePos)),
      this.basePos,
      wobble
    );
  }

  collide(state: IState): IState {
    let filtered = state.actors.filter((a) => a != this);
    let status = state.status;
    if (!filtered.some((a) => a.type == "coin")) status = "won";
    return new State(state.level, filtered, status);
  }
}

export default Coin;
