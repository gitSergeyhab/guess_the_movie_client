import { useDispatch, useSelector } from "react-redux";
import { Button } from "antd";
import { AnyAction } from "@reduxjs/toolkit";
import { setGameStatus } from "../../store/single-player-game-slice/single-player-game-slice";
import { GameStatus } from "../../const/game-const";
import { exitSinglePlayerGame } from "../../store/single-player-game-slice/single-player-game-thunk";
import { ReducerType } from "../../store/store";

export function ButtonStopGame () {
  const dispatch = useDispatch()
  const gameId = useSelector((state: ReducerType) => state.singlePlayerGameSlice.gameId)
  const handleButtonClick = () => {
    dispatch(setGameStatus(GameStatus.None))
    if (gameId) {
      dispatch(exitSinglePlayerGame(gameId) as unknown as AnyAction)
    }

  }
  return (
    <Button onClick={handleButtonClick}>Завершить игру</Button>
  )
}
