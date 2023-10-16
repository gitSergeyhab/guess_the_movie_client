import { ButtonGameAgain } from "../button-game-again/button-game-again";
import { GameResult } from "../game-result/game-result";

export function GameWonBlock () {
  return <GameResult title="Вы победили"> <ButtonGameAgain/> </GameResult>
}
