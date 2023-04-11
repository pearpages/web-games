interface IVec {
  x: number;
  y: number;
  plus(other: IVec): IVec;
  times(factor: number): IVec;
}

interface IActor {
  pos: {
    x: number;
    y: number;
  };
  size: {
    x: number;
    y: number;
  };
  type: string;
  collide(state: IState): IState;
  update(time: number, state: IState, keys: string[]): IActor;
}

interface ILevel {
  startActors: IActor[];
  touches(
    pos: { x: number; y: number },
    size: { x: number; y: number },
    type: string
  ): boolean;
}

interface IState {
  level: ILevel;
  actors: IActor[];
  status: "playing" | "won" | "lost";
  player: IActor;
  update(time: number, keys: string[]): IState;
}

interface ICoin {
  pos: IVec;
  basePos: IVec;
  wobble: number;
  type: "coin";
  size: IVec;
  update(time: number): ICoin;
  collide(state: IState): IState;
}

export type { IVec, IActor, ILevel, IState, ICoin };
