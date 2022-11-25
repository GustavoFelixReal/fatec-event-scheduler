import { forwardRef, HTMLProps } from 'react'

import styles from './Input.module.scss'

interface InputProps extends HTMLProps<HTMLInputElement> {
  error?: boolean
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { error, ...props }: InputProps,
  ref
) {
  return (
    <input
      ref={ref}
      data-fes-input
      data-fes-input-error={error}
      className={styles.fesInput}
      {...props}
    />
  )
})
