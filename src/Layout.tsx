import { ReactNode } from 'react'
import { Navbar } from './components/common/Navbar'

interface LayoutProps {
  children?: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />

      {children}
    </>
  )
}
