import { useState, useEffect, RefObject } from 'react'


const calculateLeftAndWidth = (originLeft: number, originRight: number, outerLine?: HTMLDivElement|null) => {
  if (!outerLine) {
    return { left: 0, width: 0,}
  }
  const [left, right] = originLeft > originRight ? [originRight, originLeft] : [originLeft, originRight];
  const width = (right - left) * outerLine.clientWidth / 100;
  return { left, width }
}

interface RangeSliderInnerLineProps {
  left: number;
  right: number;
  outerLine: RefObject<HTMLDivElement> | null;
}

export function RangeSliderInnerLine ({left, right, outerLine}: RangeSliderInnerLineProps) {
  const [leftWidth, setLeftWidth] = useState(calculateLeftAndWidth(left, right, outerLine?.current))

  useEffect(() => {
    setLeftWidth(calculateLeftAndWidth(left, right, outerLine?.current))
  }, [left, right, outerLine])

  useEffect(() => {
    const handleResize = () => setLeftWidth(calculateLeftAndWidth(left, right, outerLine?.current))
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize)
  }, [left, right, outerLine])

  return (
    <div
      className="range-slider__inner-line"
      style={{ left: `${leftWidth.left}%`, width: leftWidth.width }}
    />
  )
}
