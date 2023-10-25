import { useDispatch } from "react-redux";
import { Button } from "antd";
import { AnyAction } from "@reduxjs/toolkit";
import { setGameStatus } from "../../store/single-player-game-slice/single-player-game-slice";
import { GameStatus } from "../../const/game-const";
import { exitSinglePlayerGame } from "../../store/single-player-game-slice/single-player-game-thunk";

export function ButtonStopGame () {
  const dispatch = useDispatch()
  const handleButtonClick = () => {
    dispatch(setGameStatus(GameStatus.None))
    dispatch(exitSinglePlayerGame() as unknown as AnyAction)
  }

  return (
    <Button onClick={handleButtonClick}>Завершить игру</Button>
  )
}
