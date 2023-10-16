import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { AnyAction } from "@reduxjs/toolkit";
import { updateState } from "../../store/single-player-game-slice/single-player-game-slice";
import { ReducerType } from "../../store/store";
import { skipSinglePlayerTest } from "../../store/single-player-game-slice/single-player-game-thunk";

export function ButtonNextTest () {

  const dispatch = useDispatch();

  const {nextTest, skips, gameId} = useSelector((state: ReducerType) => state.singlePlayerGameSlice)

  const handleButtonClick = () => {
    if (nextTest) {
      dispatch(updateState(nextTest))
    } else if(skips && gameId) {
      dispatch(skipSinglePlayerTest(gameId) as unknown as AnyAction)
    }
  }

  const text = nextTest ? 'Дальше' : 'Пропустить вопрос'
  const isDisabled = !skips && !nextTest;

  return (
    <Button onClick={handleButtonClick} disabled={isDisabled}>{text}</Button>
  )
}
