import { ReactNode } from 'react'

import { useCan } from './Can.hooks'

interface CanProps {
  children: ReactNode
}

export function Can({ children }: CanProps) {
  const userCanSeeComponent = useCan({ mustBeAdmin: true })

  if (!userCanSeeComponent) {
    return null
  }

  return <>{children}</>
}
