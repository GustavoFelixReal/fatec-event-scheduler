import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState
} from 'react'
import { Event } from 'src/pages/event'

interface EventContextProps {
  event: Event
  updateEvent: (event: Event) => void
}

const EventContext = createContext({} as EventContextProps)

interface EventProviderProps {
  event: Event
  children: ReactNode
}

export function EventProvider({
  children,
  event: initialValues
}: EventProviderProps) {
  const [event, setEvent] = useState<Event>(initialValues)

  const updateEvent = useCallback(
    (event: Event) => {
      setEvent(event)
    },
    [setEvent]
  )

  return (
    <EventContext.Provider value={{ event, updateEvent }}>
      {children}
    </EventContext.Provider>
  )
}

export function useEvent() {
  return useContext(EventContext)
}
