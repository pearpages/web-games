interface IVec {
  x: number;
  y: number;
  plus(other: IVec): IVec;
  times(factor: number): IVec;
}

interface IActor {
  pos: IVec;
  size: IVec;
  type: "lava" | "coin" | "player";
  collide(state: IState): IState;
  update(time: number, state: IState, keys: PressedKeys): IActor;
}

interface ILevel {
  height: number;
  width: number;
  startActors: IActor[];
  rows: GameElement[][];
  touches(pos: IVec, size: IVec, type: "wall" | "lava"): boolean;
}

interface IState {
  level: ILevel;
  actors: IActor[];
  status: "playing" | "won" | "lost";
  player: IPlayer;
  update(time: number, keys: PressedKeys): IState;
}

interface ICoin extends IActor {
  basePos: IVec;
  wobble: number;
  type: "coin";
}

interface ILava extends IActor {
  speed: IVec;
  reset?: IVec;
  type: "lava";
}

interface IPlayer extends IActor {
  type: "player";
}

type Ch = "." | "#" | "+" | "@" | "o" | "=" | "|" | "v";

type Key = "ArrowLeft" | "ArrowRight" | "ArrowUp";

type PressedKeys = Record<Key, boolean>;

type ICreate<T extends IActor> = {
  create: (pos: IVec, ch?: Ch) => T;
};

type GameElement = "empty" | "wall" | "lava" | ICreate<IActor>;

interface IDisplay {
  clear(): void;
  syncState(state: IState): void;
  scrollPlayerIntoView(state: IState): void;
}

type Display = {
  new (parent: HTMLElement, level: ILevel): IDisplay;
};

export type {
  ICreate,
  IVec,
  IActor,
  ILevel,
  IState,
  ICoin,
  ILava,
  Ch,
  IPlayer,
  PressedKeys,
  GameElement,
  IDisplay,
  Display,
  Key,
};
