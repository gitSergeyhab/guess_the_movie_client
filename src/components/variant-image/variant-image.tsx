import { Variant } from '../../types/game-types';
import { getVariantText } from '../../utils/component-utils';



export function VariantImage ({variant}: {variant: Variant}) {

  const { name, imageUrl} = variant;
  const variantText = getVariantText(variant);

  return (
    <figure>
      <img
        height={300}
        src={imageUrl}
        alt={name}
        loading='lazy'
        className='variant__image'
      />
      <figcaption>{variantText}</figcaption>
    </figure>
  )
}
