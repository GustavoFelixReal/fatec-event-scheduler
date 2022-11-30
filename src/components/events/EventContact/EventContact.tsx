import { Text } from 'src/components/ui/Text'

interface EventContactProps {
  contactDetails: string
}
export function EventContact({ contactDetails }: EventContactProps) {
  return (
    <section data-fes-event-contact>
      <Text as="h2" variant="heading-3">
        Contato
      </Text>
      <Text as="p" variant="paragraph">
        {contactDetails}
      </Text>
    </section>
  )
}
