import { ButtonGameAgain } from "../button-game-again/button-game-again";
import { GameResult } from "../game-result/game-result";

export function GameLostBlock () {
  return <GameResult title="Игра закончена" > <ButtonGameAgain/></GameResult>
}
