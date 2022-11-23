import type { HTMLProps, ReactNode } from 'react'
import { Text } from '../Text'

import styles from './Button.module.scss'

type Variant = 'primary' | 'secondary'
interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  children: ReactNode
  type: 'button' | 'reset' | 'submit'
  block?: boolean
  variant?: Variant
}

export function Button({
  children,
  block = false,
  variant = 'primary',
  ...props
}: ButtonProps) {
  return (
    <button
      data-fes-button
      data-fes-button-variant={variant}
      data-fes-button-block={block}
      className={styles.fesButton}
      {...props}
    >
      <Text as="span" variant="subheading-1/button-text">
        {children}
      </Text>
    </button>
  )
}
