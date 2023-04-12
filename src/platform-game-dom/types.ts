interface IVec {
  x: number;
  y: number;
  plus(other: IVec): IVec;
  times(factor: number): IVec;
}

interface IUpdate<T> {
  update(time: number, ...extraParams: unknown[]): T;
}

interface IActor extends IUpdate<IActor> {
  pos: IVec;
  size: IVec;
  type: "lava" | "coin" | "player";
  collide(state: IState): IState;
}

interface ILevel {
  height: number;
  width: number;
  startActors: IActor[];
  rows: GameElement[][];
  touches(pos: IVec, size: IVec, type: "wall" | "lava"): boolean;
}

interface IState extends IUpdate<IState> {
  level: ILevel;
  actors: IActor[];
  status: "playing" | "won" | "lost";
  player: IActor;
  update(time: number, keys: Keys): IState;
}

interface ICoin extends IActor {
  basePos: IVec;
  wobble: number;
  type: "coin";
  update(time: number): ICoin;
}

interface ILava extends IActor {
  speed: IVec;
  reset?: IVec;
  type: "lava";
  update(time: number, state: IState): ILava;
}

interface IPlayer extends IActor {
  type: "player";
  update(time: number, state: IState, keys: Keys): IPlayer;
}

type Ch = "." | "#" | "+" | "@" | "o" | "=" | "|" | "v";

type Keys = Record<"ArrowLeft" | "ArrowRight" | "ArrowUp", boolean>;

type ICreate<T extends IActor> = {
  create: (pos: IVec, ch?: Ch) => T;
};

type GameElement = "empty" | "wall" | "lava" | ICreate<IActor>;

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
  Keys,
  GameElement,
};
