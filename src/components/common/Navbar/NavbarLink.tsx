import Link from 'next/link'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'

import { Text } from 'src/components/ui/Text'

interface NavbarLinkProps {
  title: string
  href: string
  icon: ReactNode
  iconActive: ReactNode
}

export function NavbarLink({ title, href, icon, iconActive }: NavbarLinkProps) {
  const { asPath } = useRouter()
  const isActive = asPath.split('?').shift() === href

  return (
    <li>
      <Link href={href}>
        <a data-fes-navbar-link data-fes-navbar-link-active={isActive}>
          {isActive ? iconActive : icon}
          <Text>{title}</Text>
        </a>
      </Link>
    </li>
  )
}
