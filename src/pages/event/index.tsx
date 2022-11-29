import { AxiosResponse } from 'axios'
import { NextPage } from 'next'
import Head from 'next/head'

import { Container } from 'src/components/common/Container'
import { EventShelf } from 'src/components/events/EventShelf'
import { Text } from 'src/components/ui/Text'
import { withSSRAuth } from 'src/sdk/auth/withSSRAuth'
import { setupAPIClient } from 'src/services/api'
import { eventFormatter } from 'src/services/formatters'

export type Status = 'PENDING' | 'APPROVED' | 'REJECTED' | 'CANCELED'

export type Image = {
  id: number
  src: string
  description: string
  eventId: string
}

export type Link = {
  id: number
  url: string
  description: string
  eventId: string
}

export type Event = {
  id: string
  title: string
  description: string
  contactDetails: string
  location: string
  isInternal: boolean
  isPublic: boolean
  startDate: string
  endDate?: string
  status: Status
  createdAt: string
  updatedAt: string
  images?: Image[]
  relatedLinks?: Link[]
  author?: User
}

interface EventsProps {
  events: Event[]
}

export const getServerSideProps = withSSRAuth<EventsProps>(async (ctx) => {
  let events = []

  const apiClient = setupAPIClient(ctx)
  const response: AxiosResponse<EventsProps> = await apiClient.get('events')

  events = response.data.events

  return {
    props: {
      events: events.map((event) => eventFormatter(event))
    }
  }
})

const Events: NextPage<EventsProps> = ({ events = [] }) => {
  return (
    <Container>
      <Head>
        <title>Eventos</title>
        <meta name="description" content="Eventos da Fatec ZL" />
      </Head>

      <Text as="h1" variant="heading-1">
        Upcoming Events
      </Text>

      <EventShelf events={events} />
    </Container>
  )
}

export default Events
