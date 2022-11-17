import Link from 'next/link'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'

import { Text } from 'src/components/ui/Text'

interface HeaderLinkProps {
  title: string
  href: string
  icon: ReactNode
  iconActive: ReactNode
}

export function HeaderLink({ title, href, icon, iconActive }: HeaderLinkProps) {
  const { asPath } = useRouter()
  const isActive = asPath.split('?').shift() === href

  return (
    <li data-fes-header-link>
      <Link href={href} prefetch>
        <a>
          <Text>
            {isActive ? iconActive : icon} {title}
          </Text>
        </a>
      </Link>
    </li>
  )
}
