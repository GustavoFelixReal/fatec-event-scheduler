import {
  HiHome,
  HiOutlineArrowRight,
  HiOutlineHome,
  HiOutlineTicket,
  HiOutlineUser,
  HiTicket,
  HiUser
} from 'react-icons/hi'

import { HeaderLink } from './HeaderLink'
import { HeaderSearchInput } from './HeaderSearchInput'
import styles from './Header.module.scss'

export function Header() {
  return (
    <header data-fes-header className={styles.fesHeader}>
      <div>Logo Aqui</div>

      <nav>
        <ul>
          <HeaderLink
            title="Home"
            href="/"
            icon={<HiOutlineHome size={20} />}
            iconActive={<HiHome size={20} />}
          />
          <HeaderLink
            title="Eventos"
            href="/event"
            icon={<HiOutlineTicket size={20} />}
            iconActive={<HiTicket size={20} />}
          />
          <HeaderLink
            title="Usuários"
            href="/users"
            icon={<HiOutlineUser size={20} />}
            iconActive={<HiUser size={20} />}
          />
          <HeaderLink
            title="Sair"
            href="/users"
            icon={<HiOutlineArrowRight size={20} />}
            iconActive={<HiOutlineArrowRight size={20} />}
          />
        </ul>
      </nav>

      <HeaderSearchInput />
    </header>
  )
}
