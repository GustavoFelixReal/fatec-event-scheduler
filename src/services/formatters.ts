import { Event } from 'src/pages/event'

export function eventFormatter(payload: Event) {
  return {
    ...payload,
    startDate: new Date(payload.startDate).toLocaleDateString('pt-BR'),
    endDate: new Date(payload.endDate).toLocaleDateString('pt-BR')
  }
}
