import Router from 'next/router'
import { HiArrowLeft } from 'react-icons/hi'

import { Button } from 'src/components/ui/Button'

import styles from './Back.module.scss'

export function Back() {
  return (
    <div data-fes-back className={styles.fesBack}>
      <Button
        variant="transparent"
        onClick={Router.back}
        data-fes-navbar-back-button
      >
        <HiArrowLeft size={20} />
      </Button>
    </div>
  )
}
