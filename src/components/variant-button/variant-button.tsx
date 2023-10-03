import { IVariant } from "../../types/question-type";
import { getVariantText } from "../../utils/component-utils";
import { VariantImage } from "../variant-image/variant-image";

export function VariantButton ({variant}: {variant: IVariant}) {

  const { imageUrl } = variant;
  const variantText = imageUrl ?  null : getVariantText(variant);
  const image = imageUrl ? <VariantImage variant={variant}/> : null;
  return (
    <li>
      <button type="button" className="variant__button">
        {variantText}
        {image}
      </button>
    </li>

  )

}
