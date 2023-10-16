import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { AnyAction } from "@reduxjs/toolkit";
import { Variant } from "../../types/game-types";
import { getVariantText } from "../../utils/component-utils";
import { VariantImage } from "../variant-image/variant-image";
import { checkSinglePlayerAnswer } from "../../store/single-player-game-slice/single-player-game-thunk";
import { ReducerType } from "../../store/store";
// import { setAnswerCorrect } from "../../store/single-player-game-slice/single-player-game-slice";



const getClasses = ({isRightVariant, rightAnswer, isChosen}:
  {rightAnswer:string|number|null, isRightVariant: boolean, isChosen:boolean}) => {
  if (rightAnswer === null) {
    return 'variant__button'
  }
  if (isChosen) {
    return isRightVariant ? 'variant__button variant__button--chosen-right' : 'variant__button variant__button--chosen-wrong'

  }
  return isRightVariant ? 'variant__button variant__button--right' : 'variant__button variant__button--wrong'

}

interface VariantButtonProps {
  variant: Variant,
  testId: string
}
export function VariantButton ({variant, testId}: VariantButtonProps) {

  const [isChosen, setChosen] = useState(false)

  const dispatch = useDispatch()
  const { gameId, rightAnswer} = useSelector((state: ReducerType) => state.singlePlayerGameSlice)
  const { imageUrl, id } = variant;
  const variantText = imageUrl ?  null : getVariantText(variant);
  const image = imageUrl ? <VariantImage variant={variant}/> : null;

  const isRightVariant = String(rightAnswer) === String(id);

  const btnClasses = getClasses({rightAnswer, isRightVariant, isChosen});


  const handleButtonClick = () => {
    console.log({answerId: id, testId})
    // dispatch(setAnswerCorrect(null));
    setChosen(true);
    dispatch(checkSinglePlayerAnswer({answerId: id, testId, gameId}) as unknown as AnyAction)
  }
  return (
    <li>
      <button
        type="button"
        className={btnClasses}
        onClick={handleButtonClick}
        disabled={!!rightAnswer}
      >
        {variantText}
        {image}
      </button>
    </li>

  )

}
