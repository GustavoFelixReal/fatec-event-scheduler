import { Can } from 'src/components/auth/Can/Can'
import { Hr } from 'src/components/ui/Hr'
import { useEvent } from 'src/sdk/events/useEvents'

import { EventActions } from '../EventActions'
import { EventContact } from '../EventContact'
import { EventDescription } from '../EventDescription'
import { EventHeader } from '../EventHeader'
import { EventRelatedLinks } from '../EventRelatedLinks'

export function Event() {
  const { event } = useEvent()

  return (
    <>
      <EventHeader event={event} />

      <EventDescription description={event.description} />

      <EventContact contactDetails={event.contactDetails} />

      <EventRelatedLinks relatedLinks={event.relatedLinks} />

      <Can>
        <Hr />

        <EventActions status={event.status} />
      </Can>
    </>
  )
}
