import { useDispatch, useSelector } from "react-redux";
import { Button } from "antd";
import { AnyAction } from "@reduxjs/toolkit";

import { ReducerType } from "../../store/store";
import { startNewLvl } from "../../store/single-player-game-slice/single-player-game-thunk";

export function ButtonNextLevel () {

  const {category} = useSelector((state: ReducerType) => state.singlePlayerGameSlice)
  const dispatch = useDispatch()
  const handleButtonClick = () => {
    dispatch(startNewLvl(category) as unknown as AnyAction)
  }
  return (
    <Button onClick={handleButtonClick}>Продолжить</Button>
  )
}
