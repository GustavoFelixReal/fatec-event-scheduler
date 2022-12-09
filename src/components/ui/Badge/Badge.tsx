import { ReactNode } from 'react'

import styles from './Badge.module.scss'

export type Variant =
  | 'primary'
  | 'secondary'
  | 'red'
  | 'purple'
  | 'salmon'
  | 'magenta'
  | 'green'
  | 'yellow'

interface BadgeProps {
  children: ReactNode
  hover?: boolean
  variant?: Variant
}

export function Badge({
  children,
  hover = false,
  variant = 'primary',
  ...props
}: BadgeProps) {
  return (
    <span
      data-fes-badge
      data-fes-badge-hover={hover}
      data-fes-badge-variant={variant}
      className={styles.fesBadge}
      {...props}
    >
      {children}
    </span>
  )
}
