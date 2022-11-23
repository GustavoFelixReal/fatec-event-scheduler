import { AxiosResponse } from 'axios'
import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { Container } from 'src/components/common/Container'
import { EventShelf } from 'src/components/events/EventShelf'
import { Text } from 'src/components/ui/Text'
import { setupAPIClient } from 'src/services/api'
import { eventFormatter } from 'src/services/formatters'

type Image = {
  id: number
  src: string
  description: string
  eventId: string
}

type Link = {
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
  status: string
  createdAt: string
  updatedAt: string
  images?: Image[]
  relatedLinks?: Link[]
}

interface EventsProps {
  events: Event[]
}

export const getServerSideProps: GetServerSideProps<EventsProps> = async (
  ctx
) => {
  let events = []

  try {
    const apiClient = setupAPIClient(ctx)
    const response: AxiosResponse<EventsProps> = await apiClient.get('events')

    events = response.data.events
  } finally {
    return {
      props: {
        events: events.map((event) => eventFormatter(event))
      }
    }
  }
}

const Events: NextPage<EventsProps> = ({ events = [] }) => {
  return (
    <Container>
      <Head>
        <title>Home</title>
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
