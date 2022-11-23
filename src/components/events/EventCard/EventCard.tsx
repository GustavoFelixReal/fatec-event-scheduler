import { memo } from 'react'
import { Text } from 'src/components/ui/Text'
import { Event } from 'src/pages/event'

import styles from './EventCard.module.scss'

export interface EventCardProps {
  event: Event
}

export const EventCard = memo(function EventCard({ event }: EventCardProps) {
  const [featuredImage] = event.images

  return (
    <article data-fes-event-card="true" className={styles.fesEventCard}>
      <img src={featuredImage?.src} alt={featuredImage?.description} />

      <section data-fes-event-card-info>
        <Text as="span" variant="caption-g">
          {event.startDate}
        </Text>

        {!!event.endDate && (
          <Text as="span" variant="caption-g">
            - {event.endDate}
          </Text>
        )}

        <Text as="h2" variant="heading-3">
          {event.title}
        </Text>
      </section>
    </article>
  )
})
