import type { IActor, ILevel, IPlayer, IState, PressedKeys } from "./types";

function overlap(actor1: IActor, actor2: IActor): boolean {
  return (
    actor1.pos.x + actor1.size.x > actor2.pos.x &&
    actor1.pos.x < actor2.pos.x + actor2.size.x &&
    actor1.pos.y + actor1.size.y > actor2.pos.y &&
    actor1.pos.y < actor2.pos.y + actor2.size.y
  );
}

class State implements IState {
  constructor(
    public level: ILevel,
    public actors: IActor[],
    public status: IState["status"]
  ) {}

  static start(level: ILevel): IState {
    return new State(level, level.startActors, "playing");
  }

  get player(): IPlayer {
    return this.actors.find((a) => a.type == "player") as IPlayer;
  }

  update(time: number, pressedKeys: PressedKeys): IState {
    const actors: IActor[] = this.actors.map((actor) =>
      actor.update(time, this, pressedKeys)
    );
    let newState: IState = new State(this.level, actors, this.status);

    if (newState.status != "playing") return newState;

    let player = newState.player;
    if (this.level.touches(player.pos, player.size, "lava")) {
      return new State(this.level, actors, "lost");
    }

    for (let actor of actors) {
      if (actor != player && overlap(actor, player)) {
        newState = actor.collide(newState);
      }
    }
    return newState;
  }
}

export default State;
export type { IState };
