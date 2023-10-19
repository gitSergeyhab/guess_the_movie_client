import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { AnyAction } from "@reduxjs/toolkit";
import { updateState } from "../../store/single-player-game-slice/single-player-game-slice";
import { ReducerType } from "../../store/store";
import { skipSinglePlayerTest } from "../../store/single-player-game-slice/single-player-game-thunk";
import { resetTest } from "../../store/game-visual-slice/game-visual-slice";

export function ButtonNextTest () {

  const dispatch = useDispatch();

  const {nextTest, skips, gameId, isChecking} = useSelector((state: ReducerType) => state.singlePlayerGameSlice)


  const handleButtonClick = () => {
    if (nextTest) {
      dispatch(updateState(nextTest))
    } else if(skips && gameId) {
      dispatch(skipSinglePlayerTest(gameId) as unknown as AnyAction)
    }
    dispatch(resetTest())
  }

  const text = nextTest ? 'Дальше' : 'Пропустить вопрос'
  const isDisabled = (!skips && !nextTest) || isChecking;

  return <Button onClick={handleButtonClick} disabled={isDisabled} block>{text}</Button>
}
