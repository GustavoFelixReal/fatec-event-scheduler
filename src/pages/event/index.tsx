import { AxiosResponse } from 'axios'
import { GetServerSideProps, NextPage } from 'next'
import { EventShelf } from 'src/components/events/EventShelf'
import { setupAPIClient } from 'src/services/api'

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
  status: string
  createdAt: string
  updatedAt: string
  images: Image[]
  relatedLinks: Link[]
}

interface EventsProps {
  events: Event[]
}

export const getServerSideProps: GetServerSideProps<EventsProps> = async (
  ctx
) => {
  const apiClient = setupAPIClient(ctx)
  const response: AxiosResponse<EventsProps> = await apiClient.get('events')

  return {
    props: {
      events: response.data.events
    }
  }
}

const Events: NextPage<EventsProps> = ({ events = [] }) => {
  return (
    <main>
      <EventShelf events={events} />
    </main>
  )
}

export default Events
