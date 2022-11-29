import type { EmblaCarouselType } from 'embla-carousel-react'
import type { MouseEvent } from 'react'
import { useCallback } from 'react'

import { Button } from '../Button'

interface CarouselScrollDotsProps {
  scrollSnaps: number[]
  selectedIndex: number
  carouselAPI?: EmblaCarouselType
}

function CarouselScrollDots({
  scrollSnaps,
  selectedIndex,
  carouselAPI
}: CarouselScrollDotsProps) {
  const scrollTo = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      const index = Number(
        (e.target as HTMLElement).getAttribute(
          'data-fes-carousel-scroll-dot-value'
        )
      )

      carouselAPI?.scrollTo(index)
    },
    [carouselAPI]
  )

  return (
    <ul data-fes-carousel-scroll-dots role="group">
      {scrollSnaps.map((snap, index) => (
        <li key={snap}>
          <Button
            variant="transparent"
            spacing="inherit"
            onClick={scrollTo}
            tabIndex={0}
            aria-label={`Slide ${index + 1}`}
            data-fes-carousel-scroll-dot
            data-fes-carousel-scroll-dot-value={index}
            data-fes-carousel-scroll-dot-selected={index === selectedIndex}
          />
        </li>
      ))}
    </ul>
  )
}

export default CarouselScrollDots
