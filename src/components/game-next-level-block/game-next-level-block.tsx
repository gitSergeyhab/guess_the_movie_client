import { ButtonNextLevel } from "../button-next-level/button-next-level";
import { GameResult } from "../game-result/game-result";
import { StopGameButton } from "../stop-game-button/stop-game-button";

export function GameNextLevelBlock () {
  return  (
    <GameResult title="Уровень завершен" >
      <ButtonNextLevel/>
      <StopGameButton text="Закончить игру"/>
    </GameResult>
  )
}
