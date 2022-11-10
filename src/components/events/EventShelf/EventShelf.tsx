import { Event } from 'src/pages/event'
import { EventCard } from '../EventCard'

import styles from './EventShelf.module.scss'

export interface EventShelfProps {
  events: Event[]
}

export function EventShelf({ events }: EventShelfProps) {
  return (
    <section fes-data-event-shelf="true" className={styles.fesEventShelf}>
      {events?.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  )
}
