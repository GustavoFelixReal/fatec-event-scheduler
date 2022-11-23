import { Button } from 'src/components/ui/Button'
import { Input } from 'src/components/ui/Input'
import { Link } from 'src/components/ui/Link'
import { Text } from 'src/components/ui/Text'

import styles from './LoginForm.module.scss'

export function LoginForm() {
  return (
    <form data-fes-login-form className={styles.fesLoginForm}>
      <div role="group">
        <Text as="label" htmlFor="username">
          Usuário
        </Text>
        <Input id="username" name="username" />
      </div>

      <div role="group">
        <Text as="label" htmlFor="password">
          Senha
        </Text>
        <Input type="password" id="password" name="password" />
      </div>

      <Button type="submit" block>
        Login
      </Button>

      <Text
        as="span"
        variant="subheading-1/button-text"
        data-fes-create-account-link
      >
        Não tem uma conta?{' '}
        <Link href="/register" prefetch>
          registre-se
        </Link>
      </Text>
    </form>
  )
}
