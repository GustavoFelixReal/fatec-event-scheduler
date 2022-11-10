import { memo } from 'react'
import { Event } from 'src/pages/event'

import styles from './EventCard.module.scss'

export interface EventCardProps {
  event: Event
}

export const EventCard = memo(function EventCard({ event }: EventCardProps) {
  return (
    <article data-fes-event-card="true" className={styles.fesEventCard}>
      <h2>{event.title}</h2>
      <p>{event.description}</p>
    </article>
  )
})
