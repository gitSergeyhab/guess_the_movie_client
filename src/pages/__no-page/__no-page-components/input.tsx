import { InputHTMLAttributes, forwardRef } from 'react'



interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isValid?: boolean;
}


// function Input ({isValid, ...props}: InputProps) {
//   return (
//     /* eslint-disable react/jsx-props-no-spreading */
//     <input type="text" className={isValid ? 'valid' : 'invalid'} {...props}/>
//   )
// }



// Component = forwardRef((props, ref) => {... return <Element ref={ref}>})
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({isValid, ...props}, ref) => (
      /* eslint-disable react/jsx-props-no-spreading */
      <input
        ref={ref}
        className={isValid ? 'valid' : 'invalid'}
        {...props}
      />
    )
)
