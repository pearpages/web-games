import Vec from "./Vec";
import State from "./State";
import type { IVec, Ch, ILava, IState, ICreate } from "./types";

const size = new Vec(1, 1);

class Lava implements ILava {
  constructor(public pos: IVec, public speed: IVec, public reset?: IVec) {}

  get type(): "lava" {
    return "lava";
  }

  get size() {
    return size;
  }

  static create(pos: IVec, ch: Ch): ILava {
    if (ch == "=") {
      return new Lava(pos, new Vec(2, 0));
    } else if (ch == "|") {
      return new Lava(pos, new Vec(0, 2));
    } else if (ch == "v") {
      return new Lava(pos, new Vec(0, 3), pos);
    }
  }

  collide(state: IState): IState {
    return new State(state.level, state.actors, "lost");
  }

  update(time: number, state: IState): ILava {
    let newPos = this.pos.plus(this.speed.times(time));
    if (!state.level.touches(newPos, this.size, "wall")) {
      return new Lava(newPos, this.speed, this.reset);
    } else if (this.reset) {
      return new Lava(this.reset, this.speed, this.reset);
    } else {
      return new Lava(this.pos, this.speed.times(-1));
    }
  }
}

const actor: ICreate<ILava> = Lava;
export default actor;
