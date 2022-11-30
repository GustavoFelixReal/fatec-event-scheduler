import { Link } from 'src/components/ui/Link'
import { Text } from 'src/components/ui/Text'
import { Link as RelatedLink } from 'src/pages/event'

interface EventRelatedLinksProps {
  relatedLinks: RelatedLink[]
}

export function EventRelatedLinks({ relatedLinks }: EventRelatedLinksProps) {
  return (
    <section data-fes-event-links>
      {relatedLinks?.length > 0 && (
        <>
          <Text as="h2" variant="heading-3">
            Links relacionados
          </Text>
          <ul>
            {relatedLinks?.map((relatedLink) => (
              <li key={relatedLink.id}>
                <Link href={relatedLink.url}>
                  <Text as="span" variant="subheading-1/button-text">
                    {relatedLink.description}
                  </Text>
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  )
}
