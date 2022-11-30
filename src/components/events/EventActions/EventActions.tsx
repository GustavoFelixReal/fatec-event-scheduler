import { useRouter } from 'next/router'
import { useCallback } from 'react'
import {
  HiOutlineThumbDown,
  HiOutlineThumbUp,
  HiOutlineX
} from 'react-icons/hi'
import { Button } from 'src/components/ui/Button'
import { Event, Status } from 'src/pages/event'
import { api } from 'src/services/apiClient'
import { toast } from 'react-toastify'
import styles from './EventActions.module.scss'
import { AxiosResponse } from 'axios'
import { useEvent } from 'src/sdk/events/useEvents'

interface EventActionsProps {
  status: Status
}

export function EventActions({ status }: EventActionsProps) {
  const { updateEvent } = useEvent()

  const router = useRouter()

  const handleAction = useCallback(async (status: Status) => {
    await api
      .put(`events/${router.query.id}/change_status`, { status })
      .then((response: AxiosResponse<{ event: Event }>) => {
        const { event } = response.data

        updateEvent(event)

        toast.success('Situação do evento alterada com sucesso.')
      })
      .catch(() => {
        toast.error('Erro ao executar a ação')
      })

    console.log(status)
  }, [])

  return (
    <section data-fes-event-actions className={styles.fesEventActions}>
      {status === 'PENDING' && (
        <>
          <Button
            variant="primary"
            rounded="smooth"
            onClick={() => handleAction('APPROVED')}
          >
            <HiOutlineThumbUp size={20} /> Aprovar
          </Button>
          <Button
            variant="secondary"
            rounded="smooth"
            onClick={() => handleAction('REJECTED')}
          >
            <HiOutlineThumbDown size={20} /> Rejeitar
          </Button>
        </>
      )}

      {status === 'APPROVED' && (
        <>
          <Button
            variant="primary"
            rounded="smooth"
            onClick={() => handleAction('CANCELLED')}
          >
            <HiOutlineX size={20} /> Cancelar
          </Button>
        </>
      )}

      {status === 'REJECTED' && (
        <>
          <Button
            variant="primary"
            rounded="smooth"
            onClick={() => handleAction('APPROVED')}
          >
            <HiOutlineThumbUp size={20} /> Ativar
          </Button>
        </>
      )}
    </section>
  )
}
