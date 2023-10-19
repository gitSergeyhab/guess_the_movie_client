import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Variant } from '../../types/game-types';
import { getVariantText } from '../../utils/component-utils';
import { setTestImagesLoaded } from '../../store/game-visual-slice/game-visual-slice';



export function VariantImage ({variant}: {variant: Variant}) {

  const { name, imageUrl, id} = variant;
  const variantText = getVariantText(variant);

  const [isImgLoaded, setImgLoaded] = useState(false);

  const dispatch = useDispatch()

  useEffect(() => {
    console.log({imageUrl}, 'VariantImage useEffect', {id, isImgLoaded})
    if (imageUrl) {

      dispatch(setTestImagesLoaded({id, value: isImgLoaded }))
    }
    return () => 'VariantImage unmount'
  },[ dispatch, id, imageUrl, isImgLoaded ])


  const handleLImgLoaded = () => {
    console.log('VariantImage', 'setImgLoaded(true)', {isImgLoaded})
    setImgLoaded(true)

  };

  return (
    <figure className='variant__figure'>
      <img
        height={300}
        src={imageUrl}
        alt={name}
        loading='lazy'
        className='variant__image'
        onLoad={handleLImgLoaded}
      />
      <figcaption>{variantText}</figcaption>
    </figure>
  )
}
