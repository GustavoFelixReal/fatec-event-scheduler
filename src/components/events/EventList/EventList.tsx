import { Link } from 'src/components/ui/Link'
import { Event } from 'src/pages/event'
import { EventItem } from '../EventItem'

import styles from './EventList.module.scss'

interface EventListProps {
  events: Event[]
}

export function EventList({ events }: EventListProps) {
  return (
    <ul data-fes-event-list className={styles.fesEventList}>
      {events.map((event) => (
        <li key={event.id}>
          <Link href={`/event/${event.id}`}>
            <EventItem event={event} />
          </Link>
        </li>
      ))}
    </ul>
  )
}
