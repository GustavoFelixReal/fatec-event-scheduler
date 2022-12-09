import { HiPlus } from 'react-icons/hi'
import { Button } from 'src/components/ui/Button'
import { Link } from 'src/components/ui/Link'

export function EventManagementLinks() {
  return (
    <section data-fes-event-management-links>
      <Link href="/event/create">
        <Button as="span" spacing="small" rounded="pill">
          <HiPlus size={20} /> Adicionar evento
        </Button>
      </Link>
    </section>
  )
}
