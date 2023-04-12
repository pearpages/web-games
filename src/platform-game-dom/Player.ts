import Vec from "./Vec";
import type { ICreate, IPlayer, IState, IVec, Keys } from "./types";

const size = new Vec(0.8, 1.5);
const playerXSpeed = 7;
const gravity = 30;
const jumpSpeed = 17;

class Player implements IPlayer {
  constructor(public pos: IVec, public speed: IVec) {}

  get type(): "player" {
    return "player";
  }

  get size() {
    return size;
  }

  static create(pos: IVec): IPlayer {
    return new Player(pos.plus(new Vec(0, -0.5)), new Vec(0, 0));
  }

  collide(state: IState): IState {
    return state;
  }

  update(time: number, state: IState, keys: Keys): IPlayer {
    let xSpeed = 0;
    if (keys.ArrowLeft) xSpeed -= playerXSpeed;
    if (keys.ArrowRight) xSpeed += playerXSpeed;
    let pos = this.pos;
    let movedX = pos.plus(new Vec(xSpeed * time, 0));
    if (!state.level.touches(movedX, this.size, "wall")) {
      pos = movedX;
    }

    let ySpeed = this.speed.y + time * gravity;
    let movedY = pos.plus(new Vec(0, ySpeed * time));
    if (!state.level.touches(movedY, this.size, "wall")) {
      pos = movedY;
    } else if (keys.ArrowUp && ySpeed > 0) {
      ySpeed = -jumpSpeed;
    } else {
      ySpeed = 0;
    }
    return new Player(pos, new Vec(xSpeed, ySpeed));
  }
}

const actor: ICreate<IPlayer> = Player;

export default actor;
