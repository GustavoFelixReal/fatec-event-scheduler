import { memo } from 'react'
import { Text } from 'src/components/ui/Text'
import { Event } from 'src/pages/event'

import styles from './EventCard.module.scss'

export interface EventCardProps {
  event: Event
}

export const EventCard = memo(function EventCard({ event }: EventCardProps) {
  return (
    <article data-fes-event-card="true" className={styles.fesEventCard}>
      <Text as="h2" variant="heading-2">
        {event.title}
      </Text>
      <Text as="p" variant="paragraph">
        {event.description}
      </Text>
    </article>
  )
})
