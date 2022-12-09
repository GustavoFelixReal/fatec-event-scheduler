import type { HTMLAttributes, ReactNode } from 'react'

import styles from './Container.module.scss'

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function Container({ children }: ContainerProps) {
  return (
    <main data-fes-container className={styles.fesContainer}>
      {children}
    </main>
  )
}
