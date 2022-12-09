import { ReactNode } from 'react'
import { Back } from './components/common/Back'
import { Navbar } from './components/common/Navbar'

interface LayoutProps {
  children?: ReactNode
  back?: boolean
  search?: boolean
}

export function Layout({ back, search, children }: LayoutProps) {
  return (
    <>
      {back && <Back />}

      <Navbar search={search} />

      {children}
    </>
  )
}
