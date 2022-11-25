import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { Button } from 'src/components/ui/Button'
import { Input } from 'src/components/ui/Input'
import { Link } from 'src/components/ui/Link'
import { Text } from 'src/components/ui/Text'

import styles from './LoginForm.module.scss'
import { loginFormValidator } from './LoginForm.validation'
import { Error } from 'src/components/ui/Error'
import { useAuth } from 'src/sdk/auth/AuthContext'
type LoginFormValues = {
  email: string
  password: string
}

export function LoginForm() {
  const { signIn } = useAuth()

  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<LoginFormValues>({ resolver: yupResolver(loginFormValidator) })

  const onSubmit = useCallback(
    (values: LoginFormValues) => {
      signIn(values)
    },
    [signIn]
  )

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      data-fes-login-form
      className={styles.fesLoginForm}
    >
      <div role="group">
        <Text as="label" htmlFor="email">
          E-mail
        </Text>
        <Input
          type="email"
          error={!!errors?.email?.message}
          {...register('email', {
            required: 'Required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'E-mail inválido'
            }
          })}
        />
        {errors?.email?.message && <Error>{errors?.email?.message}</Error>}
      </div>

      <div role="group">
        <Text as="label" htmlFor="password">
          Senha
        </Text>
        <Input
          type="password"
          error={!!errors?.password?.message}
          {...register('password', {
            required: 'Required'
          })}
        />
        {errors?.password?.message && (
          <Error>{errors?.password?.message}</Error>
        )}
      </div>

      <Button type="submit" block>
        Login
      </Button>

      <Text
        as="span"
        variant="subheading-1/button-text"
        data-fes-create-account-link
      >
        Não tem uma conta? <Link href="/register">registre-se</Link>
      </Text>
    </form>
  )
}
