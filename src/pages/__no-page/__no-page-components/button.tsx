import {ButtonHTMLAttributes} from 'react'


interface NoPageButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isPressed?: boolean
}

export function NoPageButton ({isPressed, ...props}:NoPageButtonProps) {
  return (
        /* eslint-disable react/jsx-props-no-spreading */

    <button type="button" className={isPressed ? 'valid' : 'invalid'} {...props} >Click Me</button>
  )
}
