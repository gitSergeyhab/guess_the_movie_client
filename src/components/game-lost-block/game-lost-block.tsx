import { GameResult } from "../game-result/game-result";
import { StopGameButton } from "../stop-game-button/stop-game-button";

export function GameLostBlock () {
  return <GameResult title="Игра закончена" > <StopGameButton text="Сыграть еще"/> </GameResult>
}
