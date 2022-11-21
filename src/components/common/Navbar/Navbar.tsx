import {
  HiHome,
  HiOutlineArrowRight,
  HiOutlineHome,
  HiOutlineTicket,
  HiOutlineUser,
  HiTicket,
  HiUser
} from 'react-icons/hi'

import { NavbarLink } from './NavbarLink'
import { NavbarSearchInput } from './NavbarSearchInput'
import styles from './Navbar.module.scss'

export function Navbar() {
  return (
    <header data-fes-navbar className={styles.fesNavbar}>
      <nav>
        <ul>
          <NavbarLink
            title="Home"
            href="/"
            icon={<HiOutlineHome size={20} />}
            iconActive={<HiHome size={20} />}
          />
          <NavbarLink
            title="Eventos"
            href="/event"
            icon={<HiOutlineTicket size={20} />}
            iconActive={<HiTicket size={20} />}
          />
          <NavbarLink
            title="Usuários"
            href="/users"
            icon={<HiOutlineUser size={20} />}
            iconActive={<HiUser size={20} />}
          />
          <NavbarLink
            title="Sair"
            href="/users"
            icon={<HiOutlineArrowRight size={20} />}
            iconActive={<HiOutlineArrowRight size={20} />}
          />
        </ul>
      </nav>

      <NavbarSearchInput />
    </header>
  )
}
