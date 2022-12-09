import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import type { ReactNode } from 'react'
import { memo, useCallback, useEffect, useState } from 'react'

import styles from './Carousel.module.scss'
import CarouselArrows from './CarouselArrows'
import CarouselScrollDots from './CarouselScrollDots'

type Align = 'start' | 'center' | 'end'
export interface CarouselProps extends ProceduralProps {
  /**
   * Carousel items
   */
  children?: ReactNode
  /**
   * Defines is the carousel will loop after reaching the last slide
   */
  loop?: boolean
  /**
   * Defines if the scroll dots will be visible
   */
  scrollDots?: boolean
  /**
   * Slides to display on the carousel at a time
   */
  slidesToScroll?: number
  /**
   * Display scroll arrows
   */
  arrows?: boolean
  /**
   * Set the alignement of the slides
   */
  align?: Align
  /**
   * Allow the carousel to skip scroll snaps if it's dragged vigorously.
   */
  skipSnaps?: boolean
  /**
   * Choose a fraction representing the percentage portion of a slide that needs to be visible in order to be considered in view. For example, 0.5 equals 50%.
   */
  inViewThreshold?: number
  /**
   * Enables for scrolling the carousel with mouse and touch interactions.
   */
  draggable?: boolean
}

function Carousel({
  children,
  loop = false,
  scrollDots = true,
  slidesToScroll = 4,
  arrows = false,
  align = 'start',
  inViewThreshold = 1,
  skipSnaps = false,
  draggable = false,
  ...props
}: CarouselProps) {
  const [ref, carouselAPI] = useEmblaCarousel(
    {
      loop,
      slidesToScroll,
      align,
      skipSnaps,
      inViewThreshold,
      draggable
    },
    [Autoplay({ delay: 5000 })]
  )

  const [selectedIndex, setSelectedIndex] = useState(0)
  const scrollSnaps = scrollDots && carouselAPI?.scrollSnapList()

  const handleSelect = useCallback(() => {
    if (!carouselAPI) {
      return
    }

    setSelectedIndex(carouselAPI.selectedScrollSnap())
  }, [carouselAPI])

  useEffect(() => {
    if (!carouselAPI) {
      return
    }

    handleSelect()
    carouselAPI.on('select', handleSelect)
  }, [carouselAPI, handleSelect])

  return (
    <div data-fes-carousel ref={ref} className={styles.fesCarousel}>
      <ul data-fes-carousel-slider {...props}>
        {children}
      </ul>

      {scrollSnaps && (
        <CarouselScrollDots
          carouselAPI={carouselAPI}
          scrollSnaps={scrollSnaps}
          selectedIndex={selectedIndex}
        />
      )}

      {arrows && <CarouselArrows carouselAPI={carouselAPI} />}
    </div>
  )
}

export default memo(Carousel)
