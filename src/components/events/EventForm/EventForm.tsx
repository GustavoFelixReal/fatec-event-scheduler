import { yupResolver } from '@hookform/resolvers/yup'
import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from 'src/components/ui/Button'
import { Error } from 'src/components/ui/Error'
import { Input } from 'src/components/ui/Input'
import { Text } from 'src/components/ui/Text'
import { Event } from 'src/pages/event'
import { api } from 'src/services/apiClient'
import styles from './EventForm.module.scss'
import { createEventValidator } from './EventForm.validation'
import { toast } from 'react-toastify'
import Router from 'next/router'

type EventFormValues = Omit<
  Event,
  'author' | 'id' | 'status' | 'createdAt' | 'updatedAt'
>

export function EventForm() {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<EventFormValues>({ resolver: yupResolver(createEventValidator) })

  const onSubmit = useCallback(async (values: EventFormValues) => {
    await api
      .post('events', values)
      .then(() => {
        toast.success('Evento criado com sucesso')
        Router.push('/event')
      })
      .catch(() => {
        toast.error('Erro ao criar o evento')
      })
  }, [])

  return (
    <section data-fes-event-form className={styles.fesEventForm}>
      <Text as="h1" variant="heading-1">
        Criar Evento
      </Text>

      <form
        onSubmit={handleSubmit(onSubmit)}
        data-fes-login-form
        className={styles.fesLoginForm}
      >
        <div role="group">
          <Text as="label" htmlFor="title">
            * Título
          </Text>
          <Input
            type="text"
            error={!!errors?.title?.message}
            {...register('title')}
          />
          {errors?.title?.message && <Error>{errors?.title?.message}</Error>}
        </div>
        <div role="group">
          <Text as="label" htmlFor="description">
            * Descrição
          </Text>
          <Input
            type="text"
            error={!!errors?.description?.message}
            {...register('description')}
          />
          {errors?.description?.message && (
            <Error>{errors?.description?.message}</Error>
          )}
        </div>
        <div role="group">
          <Text as="label" htmlFor="objective">
            * Objetivo
          </Text>
          <Input
            type="text"
            error={!!errors?.objective?.message}
            {...register('objective')}
          />
          {errors?.objective?.message && (
            <Error>{errors?.objective?.message}</Error>
          )}
        </div>
        <div role="group">
          <Text as="label" htmlFor="contactDetails">
            Informações de contato
          </Text>
          <Input
            type="text"
            error={!!errors?.contactDetails?.message}
            {...register('contactDetails')}
          />
          {errors?.contactDetails?.message && (
            <Error>{errors?.contactDetails?.message}</Error>
          )}
        </div>
        <div role="group">
          <Text as="label" htmlFor="startDate">
            * Data e hora de início
          </Text>
          <Input
            type="datetime-local"
            error={!!errors?.startDate?.message}
            {...register('startDate')}
          />
          {errors?.startDate?.message && (
            <Error>{errors?.startDate?.message}</Error>
          )}
        </div>
        <div role="group">
          <Text as="label" htmlFor="endDate">
            * Data e hora de encerramento
          </Text>
          <Input
            type="datetime-local"
            error={!!errors?.endDate?.message}
            {...register('endDate')}
          />
          {errors?.endDate?.message && (
            <Error>{errors?.endDate?.message}</Error>
          )}
        </div>
        <div role="group">
          <Text as="label" htmlFor="location">
            * Localização
          </Text>
          <Input
            type="text"
            error={!!errors?.location?.message}
            {...register('location')}
          />
          {errors?.location?.message && (
            <Error>{errors?.location?.message}</Error>
          )}
        </div>

        <Button type="submit" block rounded="pill">
          Criar Evento
        </Button>
      </form>
    </section>
  )
}
