import { AxiosResponse } from 'axios'
import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'

import { Container } from 'src/components/common/Container'
import { Event as EventComponent } from 'src/components/events/Event'

import { withSSRAuth } from 'src/sdk/auth/withSSRAuth'
import { EventProvider } from 'src/sdk/events/useEvents'
import { setupAPIClient } from 'src/services/api'
import { eventFormatter } from 'src/services/formatters'

import { Event } from '.'

interface EventProps {
  event: Event
}

export const getServerSideProps: GetServerSideProps = withSSRAuth(
  async (ctx) => {
    const api = setupAPIClient(ctx)

    const response: AxiosResponse<EventProps> = await api.get(
      `events/${ctx.params.id}`
    )

    const event = eventFormatter(response.data.event)

    return {
      props: {
        event,
        back: true,
        search: false
      }
    }
  }
)

const EventDetails: NextPage<EventProps> = ({ event }) => {
  return (
    <EventProvider event={event}>
      <Container>
        <Head>
          <title>{event.title}</title>
        </Head>

        <EventComponent />
      </Container>
    </EventProvider>
  )
}

export default EventDetails
