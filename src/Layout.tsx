import { ReactNode } from 'react'
import { Header } from './components/common/Header'

interface LayoutProps {
  children?: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />

      {children}
    </>
  )
}
