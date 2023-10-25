import {useState, useRef } from 'react'
import { RangeSliderInput } from './range-slider-input'
import { RangeSliderControl } from './range-slider-control'
import { RangeSliderInnerLine } from './range-slider-inner-line';




export function NoPageRangeSlider () {

  const [leftControl, setLeftControl] = useState(0);
  const [rightControl, setRightControl] = useState(100);
  const outerLine = useRef<HTMLDivElement>(null);

  return (
    <div className="range-slider">
      <div className="range-slider__container">
        <div className="range-slider__inputs">
          <RangeSliderInput
            controlType='left'
            value={leftControl}
            setValue={setLeftControl}
          />
          <RangeSliderInput
            controlType='right'
            value={rightControl}
            setValue={setRightControl}
          />
        </div>
        <div className="range-slider__outer-line" ref={outerLine}>
          <RangeSliderInnerLine
            left={leftControl}
            right={rightControl}
            outerLine={outerLine}
          />
          <RangeSliderControl
            controlType='left'
            value={leftControl}
            setValue={setLeftControl}
            outerLine={outerLine}

          />
          <RangeSliderControl
            controlType='right'
            value={rightControl}
            setValue={setRightControl}
            outerLine={outerLine}
          />
        </div>
      </div>
    </div>
  )
}
