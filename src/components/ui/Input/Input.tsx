import type { HTMLProps } from 'react'

import styles from './Input.module.scss'

type InputProps = HTMLProps<HTMLInputElement>

export function Input({ ...props }: InputProps) {
  return <input data-fes-input className={styles.fesInput} {...props} />
}
