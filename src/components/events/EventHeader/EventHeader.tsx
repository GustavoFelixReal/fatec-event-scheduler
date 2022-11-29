import {
  HiOutlineCalendar,
  HiOutlineLocationMarker,
  HiOutlineUser
} from 'react-icons/hi'

import Carousel from 'src/components/ui/Carousel'
import CarouselItem from 'src/components/ui/Carousel/CarouselItem'
import { Text } from 'src/components/ui/Text'
import { Event } from 'src/pages/event'

import { EventBadge } from '../EventBadge/EventBadge'
import styles from './EventHeader.module.scss'

export interface EventHeaderProps {
  event: Event
}

export function EventHeader({ event }: EventHeaderProps) {
  return (
    <header data-fes-event-header className={styles.fesEventHeader}>
      <Carousel
        align="center"
        slidesToScroll={1}
        inViewThreshold={1}
        scrollDots={false}
        loop
      >
        {event.images?.map((image) => (
          <CarouselItem key={image.id}>
            <img src={image.src} alt={image.description} />
          </CarouselItem>
        ))}
      </Carousel>

      <Text as="h1" variant="heading-1">
        {event.title}
      </Text>

      <EventBadge status={event.status} />

      <Text as="p" variant="paragraph" data-fes-event-author>
        <HiOutlineUser size={16} data-fes-icon /> {event.author.name}
      </Text>

      <Text as="p" variant="paragraph" data-fes-event-date>
        <HiOutlineCalendar size={16} data-fes-icon /> {event.startDate}{' '}
        {!!event.endDate && `- ${event.endDate}`}
      </Text>

      <Text as="p" variant="paragraph" data-fes-event-location>
        <HiOutlineLocationMarker size={16} data-fes-icon /> {event.location}
      </Text>
    </header>
  )
}
