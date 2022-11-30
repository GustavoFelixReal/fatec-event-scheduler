import Head from 'next/head'
import { Container } from 'src/components/common/Container'
import { EventForm } from 'src/components/events/EventForm'

function CreateEvent() {
  return (
    <Container>
      <Head>
        <title>Criar evento</title>
      </Head>

      <EventForm />
    </Container>
  )
}

export default CreateEvent
