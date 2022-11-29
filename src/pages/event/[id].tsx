import { AxiosResponse } from 'axios'
import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'

import { Container } from 'src/components/common/Container'
import { EventHeader } from 'src/components/events/EventHeader'
import { Link } from 'src/components/ui/Link'
import { Text } from 'src/components/ui/Text'
import { withSSRAuth } from 'src/sdk/auth/withSSRAuth'
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
  console.log(event)

  return (
    <Container>
      <Head>
        <title>{event.title}</title>
      </Head>

      <EventHeader event={event} />

      <section data-fes-event-details>
        <Text as="h2" variant="heading-3">
          Descrição
        </Text>
        <Text as="p" variant="paragraph">
          {event.description}
        </Text>
      </section>

      <section data-fes-event-contact>
        <Text as="h2" variant="heading-3">
          Contato
        </Text>
        <Text as="p" variant="paragraph">
          {event.contactDetails}
        </Text>
      </section>

      <section data-fes-event-links>
        <Text as="h2" variant="heading-3">
          Links relacionados
        </Text>
        {event.relatedLinks?.length > 0 && (
          <ul>
            {event.relatedLinks?.map((relatedLink) => (
              <li key={relatedLink.id}>
                <Link href={relatedLink.url}>
                  <Text as="span" variant="subheading-1/button-text">
                    {relatedLink.description}
                  </Text>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </Container>
  )
}

export default EventDetails
