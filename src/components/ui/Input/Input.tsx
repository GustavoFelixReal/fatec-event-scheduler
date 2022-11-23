import type { HTMLProps } from 'react'

import styles from './Input.module.scss'

interface InputProps extends HTMLProps<HTMLInputElement> {
  error?: boolean
}

export function Input({ error, ...props }: InputProps) {
  return (
    <input
      data-fes-input
      data-fes-input-error={error}
      className={styles.fesInput}
      {...props}
    />
  )
}
