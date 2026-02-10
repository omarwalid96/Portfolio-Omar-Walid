'use client'

import { useState, useRef, useEffect } from "react"
import { MediaDisplay } from "./media-display"
import { ChevronLeft, ChevronRight } from "lucide-react"
import type { MediaItem } from "@/lib/config"
import { getControlBgClasses, getControlTextClasses, getIndicatorClasses, getOverlayBgClasses } from "@/lib/colors"

interface MediaGalleryProps {
  media: MediaItem[]
  className?: string
  aspectRatio?: string
  objectFit?: 'cover' | 'contain' | 'fill'
}

export function MediaGallery({
  media,
  className = "",
  aspectRatio = "16/9",
  objectFit = "cover"
}: MediaGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])
  const isScrollingRef = useRef(false)

  // Scroll to specific index
  const scrollToIndex = (index: number) => {
    if (itemRefs.current[index] && scrollContainerRef.current) {
      isScrollingRef.current = true
      itemRefs.current[index]?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      })
      setCurrentIndex(index)
      // Reset scrolling flag after animation
      setTimeout(() => {
        isScrollingRef.current = false
      }, 500)
    }
  }

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? media.length - 1 : currentIndex - 1
    scrollToIndex(newIndex)
  }

  const goToNext = () => {
    const newIndex = currentIndex === media.length - 1 ? 0 : currentIndex + 1
    scrollToIndex(newIndex)
  }

  // Detect scroll position and update current index
  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const handleScroll = () => {
      if (isScrollingRef.current) return // Skip if programmatic scroll

      const containerRect = container.getBoundingClientRect()
      const containerCenter = containerRect.left + containerRect.width / 2

      // Find which item is closest to center
      let closestIndex = 0
      let minDistance = Infinity

      itemRefs.current.forEach((item, index) => {
        if (!item) return
        const itemRect = item.getBoundingClientRect()
        const itemCenter = itemRect.left + itemRect.width / 2
        const distance = Math.abs(containerCenter - itemCenter)

        if (distance < minDistance) {
          minDistance = distance
          closestIndex = index
        }
      })

      setCurrentIndex(closestIndex)
    }

    container.addEventListener('scroll', handleScroll, { passive: true })
    return () => container.removeEventListener('scroll', handleScroll)
  }, [media.length])

  // Early returns after hooks
  if (!media || media.length === 0) {
    return null
  }

  // Single item - no navigation needed
  if (media.length === 1) {
    return (
      <MediaDisplay
        media={media[0]}
        className={className}
        aspectRatio={aspectRatio}
        objectFit={objectFit}
      />
    )
  }

  return (
    <div className="relative group w-full">
      {/* Scrollable Carousel Container */}
      <div
        ref={scrollContainerRef}
        className="relative overflow-x-auto overflow-y-hidden w-full scroll-smooth scrollbar-hide"
        style={{
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}
      >
        <div className="flex gap-4 px-[10%]">
          {media.map((item, index) => {
            // Detect if this item is portrait or landscape
            const itemAspectRatio = item.aspectRatio || aspectRatio
            const [w, h] = itemAspectRatio.split('/').map(Number)
            const isItemPortrait = h > w

            // Give landscape videos more width in mixed carousels
            const itemWidth = isItemPortrait ? '65%' : '95%'

            return (
              <div
                key={index}
                ref={(el) => {itemRefs.current[index] = el}}
                className="flex-shrink-0 transition-opacity duration-300"
                style={{
                  width: itemWidth,
                  opacity: index === currentIndex ? 1 : 0.3,
                  scrollSnapAlign: 'center',
                  scrollSnapStop: 'always'
                }}
              >
                <MediaDisplay
                  media={item}
                  className={className}
                  aspectRatio={aspectRatio}
                  objectFit={objectFit}
                  disablePortraitOptimization={true}
                />
              </div>
            )
          })}
        </div>
      </div>

      {/* Navigation Arrows - Hidden on mobile, visible on desktop */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/85 dark:bg-white/30 dark:hover:bg-white/40 text-white dark:text-black backdrop-blur-sm rounded-full p-3 opacity-0 md:group-hover:opacity-100 transition-opacity z-10 hidden md:block"
        aria-label="Previous media"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/85 dark:bg-white/30 dark:hover:bg-white/40 text-white dark:text-black backdrop-blur-sm rounded-full p-3 opacity-0 md:group-hover:opacity-100 transition-opacity z-10 hidden md:block"
        aria-label="Next media"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {media.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={`rounded-full transition-all ${
              index === currentIndex
                ? 'w-8 h-2 bg-white dark:bg-black'
                : 'w-2 h-2 bg-white/60 hover:bg-white/80 dark:bg-black/60 dark:hover:bg-black/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Counter */}
      <div className="absolute top-4 right-4 bg-black/70 dark:bg-white/30 text-white dark:text-black backdrop-blur-sm text-sm px-3 py-1 rounded-full z-10">
        {currentIndex + 1} / {media.length}
      </div>
    </div>
  )
}
