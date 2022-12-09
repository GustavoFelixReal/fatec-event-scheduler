import { Text } from 'src/components/ui/Text'

interface EventDescriptionProps {
  description: string
}

export function EventDescription({ description }: EventDescriptionProps) {
  return (
    <section data-fes-event-description>
      <Text as="h2" variant="heading-3">
        Descrição
      </Text>
      <Text as="p" variant="paragraph">
        {description}
      </Text>
    </section>
  )
}
