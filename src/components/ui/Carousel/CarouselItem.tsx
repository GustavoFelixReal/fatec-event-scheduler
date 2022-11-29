import type { ReactNode } from 'react'

interface CarouselItemProps {
  children: ReactNode
}

function CarouselItem({ children }: CarouselItemProps) {
  return <li data-fes-carousel-item>{children}</li>
}

export default CarouselItem
