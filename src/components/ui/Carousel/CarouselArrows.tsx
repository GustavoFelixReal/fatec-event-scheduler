import type { EmblaCarouselType } from 'embla-carousel-react'
import { useCallback } from 'react'

import { Button } from '../Button'

interface CarouselArrowsProps {
  carouselAPI?: EmblaCarouselType
}

function CarouselArrows({ carouselAPI }: CarouselArrowsProps) {
  const handleScrollPrev = useCallback(
    () => carouselAPI?.scrollPrev(),
    [carouselAPI]
  )

  const handleScrollNext = useCallback(
    () => carouselAPI?.scrollNext(),
    [carouselAPI]
  )

  return (
    <>
      {carouselAPI?.canScrollPrev() && (
        <Button
          variant="secondary"
          onClick={handleScrollPrev}
          tabIndex={0}
          data-fs-carousel-arrow-prev
        >
          -
        </Button>
      )}

      {carouselAPI?.canScrollNext() && (
        <Button
          variant="secondary"
          onClick={handleScrollNext}
          tabIndex={0}
          data-fs-carousel-arrow-next
        >
          +
        </Button>
      )}
    </>
  )
}

export default CarouselArrows
