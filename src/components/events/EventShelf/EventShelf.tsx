import Carousel from 'src/components/ui/Carousel'
import { Event } from 'src/pages/event'
import { EventCard } from '../EventCard'

import styles from './EventShelf.module.scss'

export interface EventShelfProps {
  events: Event[]
}

export function EventShelf({ events }: EventShelfProps) {
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
