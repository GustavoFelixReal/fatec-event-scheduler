import { AxiosResponse } from 'axios'
import { NextPage } from 'next'
import Head from 'next/head'
import { Can } from 'src/components/auth/Can/Can'

import { Container } from 'src/components/common/Container'
import { EventList } from 'src/components/events/EventList/EventList'
import { EventManagementLinks } from 'src/components/events/EventManagementLinks'
import { EventShelf } from 'src/components/events/EventShelf'
import { Text } from 'src/components/ui/Text'
import { withSSRAuth } from 'src/sdk/auth/withSSRAuth'
import { setupAPIClient } from 'src/services/api'
import { eventFormatter } from 'src/services/formatters'

export type Status = 'PENDING' | 'APPROVED' | 'REJECTED' | 'CANCELLED'

export type Image = {
  id: number
  src: string
  description: string
  eventId: string
}

export type Link = {
  id?: number
  url: string
  description: string
  eventId?: string
}

export type Event = {
  id: string
  title: string
  description: string
  objective?: string
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
  upcomingEvents: Event[]
  pendingEvents: Event[]
  canceledEvents: Event[]
}

export const getServerSideProps = withSSRAuth<EventsProps>(async (ctx) => {
  const apiClient = setupAPIClient(ctx)
  const response: AxiosResponse<EventsProps> = await apiClient.get(
    'events/by_category'
  )

  const { upcomingEvents, pendingEvents, canceledEvents } = response.data

  return {
    props: {
      upcomingEvents: upcomingEvents.map((event) => eventFormatter(event)),
      pendingEvents: pendingEvents.map((event) => eventFormatter(event)),
      canceledEvents: canceledEvents.map((event) => eventFormatter(event))
    }
  }
})

const Events: NextPage<EventsProps> = ({
  upcomingEvents = [],
  pendingEvents = [],
  canceledEvents = []
}) => {
  return (
    <Container>
      <Head>
        <title>Eventos</title>
        <meta name="description" content="Eventos da Fatec ZL" />
      </Head>

      <EventManagementLinks />

      <section data-fes-approved-events>
        <Text as="h1" variant="heading-1">
          Eventos Ativos
        </Text>

        <EventShelf events={upcomingEvents} />
      </section>

      <Can>
        <section data-fes-pending-events>
          <Text as="h1" variant="heading-1">
            Eventos Pendentes
          </Text>

          <EventList events={pendingEvents} />
        </section>
      </Can>

      <Can>
        <section data-fes-canceled-events>
          <Text as="h1" variant="heading-1">
            Eventos Inativos
          </Text>

          <EventList events={canceledEvents} />
        </section>
      </Can>
    </Container>
  )
}

export default Events
