import { Badge, Variant } from 'src/components/ui/Badge'
import { Text } from 'src/components/ui/Text'
import { Status } from 'src/pages/event'

interface EventBadgeProps {
  status: Status
}

const BadgePropsByStatus = {
  PENDING: {
    title: 'Pendente',
    variant: 'yellow' as Variant
  },
  APPROVED: {
    title: 'Ativo',
    variant: 'green' as Variant
  },
  REJECTED: {
    title: 'Rejeitado',
    variant: 'salmon' as Variant
  },
  CANCELLED: {
    title: 'Cancelado',
    variant: 'red' as Variant
  }
}

export function EventBadge({ status }: EventBadgeProps) {
  const badgeProps = BadgePropsByStatus[status]

  return (
    <Badge {...badgeProps}>
      <Text as="span" variant="caption-g" bold>
        {badgeProps.title}
      </Text>
    </Badge>
  )
}
