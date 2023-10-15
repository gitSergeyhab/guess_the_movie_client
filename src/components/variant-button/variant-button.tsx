import { useDispatch } from "react-redux";
import { AnyAction } from "@reduxjs/toolkit";
import { Variant } from "../../types/game-types";
import { getVariantText } from "../../utils/component-utils";
import { VariantImage } from "../variant-image/variant-image";
import { checkSinglePlayerAnswer } from "../../store/single-player-game-slice/single-player-game-thunk";
import { setAnswerCorrect } from "../../store/single-player-game-slice/single-player-game-slice";

export function VariantButton ({variant, testId}: {variant: Variant, testId: string}) {

  const dispatch = useDispatch()
  const { imageUrl, id } = variant;
  const variantText = imageUrl ?  null : getVariantText(variant);
  const image = imageUrl ? <VariantImage variant={variant}/> : null;


  const handleButtonClick = () => {
    console.log({answerId: id, testId})
    dispatch(setAnswerCorrect(null));
    dispatch(checkSinglePlayerAnswer({answerId: id, testId}) as unknown as AnyAction)
  }
  return (
    <li>
      <button
        type="button"
        className="variant__button"
        onClick={handleButtonClick}
      >
        {variantText}
        {image}
      </button>
    </li>

  )

}
