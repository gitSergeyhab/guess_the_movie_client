import { GameResult } from "../game-result/game-result";
import { StopGameButton } from "../stop-game-button/stop-game-button";

export function GameWonBlock () {
  return <GameResult title="Вы победили"> <StopGameButton text="Сыграть еще"/> </GameResult>
}
