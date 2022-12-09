import Carousel from 'src/components/ui/Carousel'
import { Text } from 'src/components/ui/Text'
import { Event } from 'src/pages/event'
import { EventCard } from '../EventCard'

import styles from './EventShelf.module.scss'

export interface EventShelfProps {
  events: Event[]
}

export function EventShelf({ events }: EventShelfProps) {
  if (events.length > 0) {
    return (
      <section data-fes-event-shelf="true" className={styles.fesEventShelf}>
        <Carousel
          align="center"
          inViewThreshold={1}
          skipSnaps={false}
          draggable
          scrollDots
          slidesToScroll={1}
        >
          {events?.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </Carousel>
      </section>
    )
  }

  return (
    <Text as="p" variant="paragraph">
      Não há eventos para exibir
    </Text>
  )
}
