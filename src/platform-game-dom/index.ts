import "./game.scss";
import { runGame, DOMDisplay } from "./game";
import GAME_LEVELS from "./levels";

export default function () {
  runGame(GAME_LEVELS, DOMDisplay);
}
