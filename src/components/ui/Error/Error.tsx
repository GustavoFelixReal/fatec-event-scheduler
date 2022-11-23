import { ReactNode } from 'react'
import { Text } from '../Text'

import styles from './Error.module.scss'

interface ErrorProps {
  children: ReactNode
}

export function Error({ children }: ErrorProps) {
  return (
    <Text
      as="span"
      variant="caption-p"
      role="alert"
      data-fes-error
      className={styles.fesError}
    >
      {children}
    </Text>
  )
}
