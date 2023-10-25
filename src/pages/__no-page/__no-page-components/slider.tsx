import { useState, useEffect, useRef } from 'react'




const calculatePosition = (x: number, evt: MouseEvent|TouchEvent, right: HTMLDivElement|null) => {
  if (!right) {
    return 0;
  }
  let pos = 0;
  if ('movementX' in evt) {
    pos = x + evt.movementX
  } else {
    pos = evt.touches[0].pageX - right.offsetLeft;
  }
  if (pos > 0 && pos <= right.clientWidth) {
    return pos;
  }
  return x;
}

export function NoPageSlider () {

  const [isDown, setIsDown] = useState(false);
  const [handlerPosition, setHandlerPosition] = useState(0);
  const rightRef = useRef<HTMLDivElement>(null);

  const handleMove = (evt: MouseEvent|TouchEvent) => {
    setHandlerPosition((pos) =>  calculatePosition(pos, evt, rightRef.current));
  }

  const setHandlerToCenter = () => {
    const leftWidth = rightRef.current ? rightRef.current.clientWidth / 2 : 0;
    setHandlerPosition(leftWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', setHandlerToCenter);
    return () => window.removeEventListener('resize', setHandlerToCenter)
  }, [])

  useEffect(() => {
    if (isDown) {
      window.addEventListener('mousemove', handleMove);
      window.addEventListener('touchmove', handleMove);
    }
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('touchmove', handleMove);
    }
  }, [isDown])


  useEffect(() => {
    setTimeout(setHandlerToCenter, 1) // в antd sider отриыовывается после рендеринга, поэтому и setTimeout
    const handleUp = () => setIsDown(false);
    window.addEventListener('mouseup', handleUp);
    window.addEventListener('touchend', handleUp);
    return () => {
      window.removeEventListener('mouseup', handleUp);
      window.removeEventListener('touchend', handleUp);
    }
  },[])

  const handleDown = () => setIsDown(true)
  return (
    <div className="slider__wrapper">
      <div
        className="slider__right"
        ref={rightRef}
      >
        <div
          className="slider__left"
          style={{ clipPath: `polygon(0% 0%, ${handlerPosition}px 0%, ${handlerPosition}px 100%, 0% 100%)` }}
        />
        <button
          type='button'
          className="slider__handler"
          onMouseDown={handleDown}
          onTouchStart={handleDown}
          aria-label="slider split line"
          style={{ left: handlerPosition }}
         />
      </div>
    </div>
  )
}
