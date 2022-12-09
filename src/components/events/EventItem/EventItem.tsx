import { Hr } from 'src/components/ui/Hr'
import { Text } from 'src/components/ui/Text'
import { Event } from 'src/pages/event'
import { EventBadge } from '../EventBadge/EventBadge'

import styles from './EventItem.module.scss'

interface EventItemProps {
  event: Event
}

export function EventItem({ event }: EventItemProps) {
  return (
    <article data-fes-event-item className={styles.fesEventItem}>
      <section data-fes-event-item-info>
        <EventBadge status={event.status} />

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
}
