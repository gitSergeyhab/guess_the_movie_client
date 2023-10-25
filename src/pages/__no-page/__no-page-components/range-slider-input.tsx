import { InputHTMLAttributes, Dispatch, SetStateAction, ChangeEventHandler } from 'react'


interface RangeSliderInputProps extends InputHTMLAttributes<HTMLInputElement> {
  controlType: string;
  value: number;
  setValue: Dispatch<SetStateAction<number>>
}
export function RangeSliderInput ({controlType, value, setValue}: RangeSliderInputProps) {

  const classes = `range-slider__input range-slider__input--${controlType}`
  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (evt) =>  setValue(+evt.currentTarget.value)

  return (
    <input
      type="number"
      className={classes}
      min={0}
      max={100}
      value={Math.round(value)}
      onChange={handleInputChange}
    />
  )
}
