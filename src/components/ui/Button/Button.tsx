import type { HTMLProps, ReactNode } from 'react'
import { Text } from '../Text'

import styles from './Button.module.scss'

type Rounded = 'smooth' | 'pill' | 'none'
type Spacing = 'inherit' | 'small' | 'regular' | 'large'
type Variant = 'primary' | 'secondary' | 'transparent'
interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  children?: ReactNode
  type?: 'button' | 'reset' | 'submit'
  block?: boolean
  variant?: Variant
  rounded?: Rounded
  spacing?: Spacing
}

export function Button({
  children,
  block = false,
  variant = 'primary',
  rounded = 'none',
  spacing = 'regular',
  ...props
}: ButtonProps) {
  return (
    <button
      data-fes-button
      data-fes-button-variant={variant}
      data-fes-button-block={block}
      data-fes-button-rounded={rounded}
      data-fes-button-size={spacing}
      className={styles.fesButton}
      {...props}
    >
      <Text as="span" variant="subheading-1/button-text">
        {children}
      </Text>
    </button>
  )
}
