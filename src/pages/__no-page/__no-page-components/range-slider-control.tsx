import {useCallback, useState, useEffect, InputHTMLAttributes, Dispatch, SetStateAction, RefObject } from 'react'



const calculatePosition = (percent: number, evt: MouseEvent|TouchEvent, outerLine?: HTMLDivElement|null) => {
  if (!outerLine) {
    return 0;
  }
  const lineLength = outerLine.clientWidth;
  const controlX = lineLength * percent / 100;
  let pos = 0
  if ('movementX' in evt) {
    pos = controlX + evt.movementX;
  } else {
    pos = evt.touches[0].pageX + outerLine.offsetLeft;
  }
  if (pos > 0 && pos < outerLine.clientWidth) {
    return  pos / outerLine.clientWidth * 100;
  }
  return percent;
}


interface RangeSliderControlProps extends InputHTMLAttributes<HTMLInputElement> {
  controlType: string;
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
  outerLine: RefObject<HTMLDivElement> | null;
}

export function RangeSliderControl({controlType, setValue, value, outerLine}:RangeSliderControlProps) {

  const classes = `range-slider__control-btn range-slider__control-btn--${controlType}`;
  const [isDown, setIsDown] = useState(false);
  const handleDown = () => setIsDown(true);

  const handleMove = useCallback((evt: MouseEvent|TouchEvent) => {
    setValue((posPercent) => calculatePosition(posPercent, evt, outerLine?.current))
  }, [outerLine, setValue])

  useEffect(() => {
    if (isDown) {
      window.addEventListener('mousemove', handleMove);
      window.addEventListener('touchmove', handleMove);
    }
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('touchmove', handleMove);
    }
  }, [isDown, handleMove])

  useEffect(() => {
    const handleUp = () => setIsDown(false);
    window.addEventListener('mouseup', handleUp);
    window.addEventListener('touchend', handleUp);
    return () => {
      window.removeEventListener('mouseup', handleUp);
      window.removeEventListener('touchend', handleUp);
    }
  }, [])

  return (
    <button
      className={classes}
      type="button"
      aria-label="left control button"
      style={{  left: `calc(${value}% - 0.5rem)`, zIndex: isDown ? 2:1 }}
      onMouseDown={handleDown}
      onTouchStart={handleDown}
    />
  )
}
