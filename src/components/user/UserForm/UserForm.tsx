import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { Button } from 'src/components/ui/Button'
import { Error } from 'src/components/ui/Error'
import { Input } from 'src/components/ui/Input'
import { Text } from 'src/components/ui/Text'

import styles from './UserForm.module.scss'
import { userFormValidator } from './UserForm.validation'

type UserFormValues = User

interface UserForm {
  defaultValues: User
}

export function UserForm({ defaultValues }: UserForm) {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<UserFormValues>({
    defaultValues,
    resolver: yupResolver(userFormValidator)
  })

  const onSubmit = useCallback((values: UserFormValues) => {
    console.log(values)
  }, [])

  return (
    <section data-fes-user-form>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.fesUserForm}>
        <div role="group">
          <Text as="label" htmlFor="name">
            Nome completo
          </Text>
          <Input
            type="text"
            error={!!errors?.name?.message}
            {...register('name')}
          />
          {errors?.name?.message && <Error>{errors?.name?.message}</Error>}
        </div>

        <div role="group">
          <Text as="label" htmlFor="username">
            Usuário
          </Text>
          <Input
            type="text"
            error={!!errors?.name?.message}
            {...register('username')}
          />
          {errors?.username?.message && (
            <Error>{errors?.username?.message}</Error>
          )}
        </div>

        <div role="group">
          <Text as="label" htmlFor="email">
            E-mail
          </Text>
          <Input
            type="email"
            error={!!errors?.email?.message}
            {...register('email')}
          />
          {errors?.email?.message && <Error>{errors?.email?.message}</Error>}
        </div>

        <Button type="submit" block>
          Enviar
        </Button>
      </form>
    </section>
  )
}
