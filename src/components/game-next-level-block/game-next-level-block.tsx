import { ButtonNextLevel } from "../button-next-level/button-next-level";
import { ButtonStopGame } from "../button-stop-game/button-stop-game";
import { GameResult } from "../game-result/game-result";

export function GameNextLevelBlock () {
  return  (
    <GameResult title="Уровень завершен" >
      <ButtonNextLevel/>
      <ButtonStopGame/>
    </GameResult>
  )
}
