import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { AnyAction } from "@reduxjs/toolkit";
import { Variant } from "../../types/game-types";
import { getVariantText } from "../../utils/component-utils";
import { VariantImage } from "../variant-image/variant-image";
import { checkSinglePlayerAnswer } from "../../store/single-player-game-slice/single-player-game-thunk";
import { ReducerType } from "../../store/store";



interface GetClasses {
  rightAnswer:string|number|null;
  isChosen:boolean;
  id: string|number;
}
const getAdditionClass = ({id, rightAnswer, isChosen}: GetClasses) => {
  const isRightVariant = String(rightAnswer) === String(id);
  if (rightAnswer === null ) {
    return isChosen ? 'chosen' : '';
  }
  if (isChosen) {
    return isRightVariant ? 'chosen-right' : 'chosen-wrong';
  }
  return isRightVariant ? 'right' : 'wrong';
}

const getClasses = ({id, rightAnswer, isChosen}: GetClasses) => `variant__button variant__button--${getAdditionClass({id, rightAnswer, isChosen})}`

interface VariantButtonProps {
  variant: Variant,
  testId: string
}
export function VariantButton ({variant, testId}: VariantButtonProps) {

  const [isChosen, setChosen] = useState(false)
  const dispatch = useDispatch()
  const { gameId, rightAnswer, isChecking} = useSelector((state: ReducerType) => state.singlePlayerGameSlice)
  const { imageUrl, id } = variant;
  const variantText = imageUrl ?  null : getVariantText(variant);
  const image = imageUrl ? <VariantImage variant={variant}/> : null;
  const btnClasses = getClasses({rightAnswer, isChosen, id});

  const handleButtonClick = () => {
    setChosen(true);
    dispatch(checkSinglePlayerAnswer({answerId: id, testId, gameId}) as unknown as AnyAction);
  }

  return (
    <li>
      <button
        type="button"
        className={btnClasses}
        onClick={handleButtonClick}
        disabled={isChecking || !!rightAnswer}
      >
        {variantText}
        {image}
      </button>
    </li>

  )

}
