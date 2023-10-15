import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "antd";
import { AnyAction } from "@reduxjs/toolkit";
import { AppRoute } from "../../const/const";
import { setNewGame, setNextLevel } from "../../store/single-player-game-slice/single-player-game-slice";
import { fetchSetTestsForSinglePlayer } from "../../store/single-player-game-slice/single-player-game-thunk";
import { ReducerType } from "../../store/store";

export function ButtonNextLevel () {

  const {category} = useSelector((state: ReducerType) => state.singlePlayerGameSlice)
  const dispatch = useDispatch()
  const handleButtonClick = () => {
    dispatch(setNextLevel())
    dispatch(fetchSetTestsForSinglePlayer(category) as unknown as AnyAction)
  }
  return (
    <Button onClick={handleButtonClick}>Продолжить</Button>
  )
}
