import { useRef } from 'react'
import { NoPageButton } from "./__no-page-components/button";
import { Input } from "./__no-page-components/input";
import { NoPageSlider } from './__no-page-components/slider';
import './no-page.scss'

export function NoPage() {

  // const [isFocus, setIsFocus] = useState(false)

  const inputRef = useRef<HTMLInputElement>(null)

  const handleBtnClick = () => {inputRef.current?.focus()}
  return (
    <>
      <h1>Страница не для проекта, а для проверки разных разностей</h1>
      <Input type='text' ref={inputRef}  />
      <Input type='number' isValid/>
      <NoPageButton isPressed onClick={handleBtnClick}/>
      <NoPageSlider/>
    </>
  )
}
