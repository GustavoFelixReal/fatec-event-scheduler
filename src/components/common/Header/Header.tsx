import { HeaderSearchInput } from './HeaderSearchInput'

import styles from './Header.module.scss'

export function Header() {
  return (
    <header data-fes-header className={styles.fesHeader}>
      <div>Logo Aqui</div>

      <nav>
        <ul>
          <li>Eventos</li>
          <li>Usuário</li>
          <li>Sair</li>
        </ul>
      </nav>

      <HeaderSearchInput />
    </header>
  )
}
