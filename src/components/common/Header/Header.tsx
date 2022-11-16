import { HeaderSearchInput } from './HeaderSearchInput'

import { Text } from 'src/components/ui/Text'

import styles from './Header.module.scss'

export function Header() {
  return (
    <header data-fes-header className={styles.fesHeader}>
      <div>Logo Aqui</div>

      <nav>
        <ul>
          <li>
            <Text>Eventos</Text>
          </li>
          <li>
            <Text>Usuário</Text>
          </li>
          <li>
            <Text>Sair</Text>
          </li>
        </ul>
      </nav>

      <HeaderSearchInput />
    </header>
  )
}
