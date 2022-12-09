import { ReactNode } from 'react'

import styles from './Table.module.scss'

interface TableProps {
  children: ReactNode
}

export function Table({ children }: TableProps) {
  return (
    <table data-fes-table className={styles.fesTable}>
      {children}
    </table>
  )
}
