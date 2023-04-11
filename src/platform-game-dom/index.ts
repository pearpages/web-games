import "./game.scss";
import DOMDisplay from "./DOMDisplay";
import runGame from "./game";
import GAME_LEVELS from "./levels";

export default function () {
  runGame(GAME_LEVELS, DOMDisplay);
}
