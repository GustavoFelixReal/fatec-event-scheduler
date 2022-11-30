import {
  HiOutlineArrowRight,
  HiOutlineTicket,
  HiOutlineUser,
  HiOutlineUserGroup,
  HiTicket,
  HiUser,
  HiUserGroup
} from 'react-icons/hi'

import { NavbarLink } from './NavbarLink'
import { NavbarSearchInput } from './NavbarSearchInput'
import styles from './Navbar.module.scss'
import { useAuth } from 'src/sdk/auth/AuthContext'

interface NavbarProps {
  search?: boolean
}

export function Navbar({ search = false }: NavbarProps) {
  const { user } = useAuth()

  return (
    <header
      data-fes-navbar
      data-fes-navbar-search={search}
      className={styles.fesNavbar}
    >
      <nav>
        <ul>
          {/* <NavbarLink
            title="Home"
            href="/"
            icon={<HiOutlineHome size={20} />}
            iconActive={<HiHome size={20} />}
          /> */}
          <NavbarLink
            title="Eventos"
            href="/event"
            icon={<HiOutlineTicket size={20} />}
            iconActive={<HiTicket size={20} />}
          />
          <NavbarLink
            title="Usuários"
            href="/users"
            icon={<HiOutlineUserGroup size={20} />}
            iconActive={<HiUserGroup size={20} />}
          />
          <NavbarLink
            title={user?.name || 'Eu'}
            href="#"
            icon={<HiOutlineUser size={20} />}
            iconActive={<HiUser size={20} />}
          />
          <NavbarLink
            title="Sair"
            href="/logout"
            icon={<HiOutlineArrowRight size={20} />}
            iconActive={<HiOutlineArrowRight size={20} />}
          />
        </ul>
      </nav>

      {search && <NavbarSearchInput />}
    </header>
  )
}
