'use client'

import Image from "next/image"
import { isVideo, isIframe, getMediaSrc, getIframeSrc, type MediaItem } from "@/lib/config"
import { useState } from "react"

interface MediaDisplayProps {
  media: MediaItem
  width?: number
  height?: number
  className?: string
  fill?: boolean
  aspectRatio?: string
  objectFit?: 'cover' | 'contain' | 'fill'
  disablePortraitOptimization?: boolean
}

export function MediaDisplay({
  media,
  width,
  height,
  className = "",
  fill = false,
  aspectRatio = "16/9",
  objectFit = "cover",
  disablePortraitOptimization = false
}: MediaDisplayProps) {
  const [hasError, setHasError] = useState(false)
  const mediaSrc = getMediaSrc(media)
  const shouldShowIframe = isIframe(media) && !hasError
  const shouldShowVideo = isVideo(media) && !hasError && !shouldShowIframe

  // Use custom aspect ratio from media item if provided
  const finalAspectRatio = media.aspectRatio || aspectRatio

  // Detect if this is a portrait video (height > width)
  // Only apply portrait optimization if not disabled
  const isPortrait = (() => {
    if (disablePortraitOptimization || !finalAspectRatio) return false
    const [width, height] = finalAspectRatio.split('/').map(Number)
    return height > width
  })()

  // Iframe embed (Google Drive, YouTube, Vimeo, etc.)
  if (shouldShowIframe) {
    const iframeSrc = getIframeSrc(media)

    // For contain mode with portrait videos: optimize for mobile
    if (objectFit === 'contain') {
      // Portrait video optimization for mobile
      if (isPortrait) {
        return (
          <div className="flex items-center justify-center w-full">
            <div
              className={`relative bg-slate-100 dark:bg-slate-800 flex items-center justify-center w-full md:w-[56.25%] ${className}`}
              style={{ aspectRatio: finalAspectRatio, minHeight: 0 }}
            >
              <iframe
                src={iframeSrc}
                title={media.alt}
                className="border-0 rounded-inherit w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                onError={() => setHasError(true)}
              />
            </div>
          </div>
        )
      }

      // Landscape video (default)
      return (
        <div
          className={`relative bg-slate-100 dark:bg-slate-800 flex items-center justify-center ${className}`}
          style={{ aspectRatio: finalAspectRatio, minHeight: 0 }}
        >
          <iframe
            src={iframeSrc}
            title={media.alt}
            className="border-0 rounded-inherit"
            style={{
              width: media.aspectRatio ? '100%' : 'auto',
              height: '100%',
              aspectRatio: media.aspectRatio || 'auto',
              maxWidth: '100%'
            }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
            onError={() => setHasError(true)}
          />
        </div>
      )
    }

    // For cover mode: fill the container
    return (
      <div
        className={`relative bg-slate-100 dark:bg-slate-800 flex items-center justify-center ${className}`}
        style={{ aspectRatio: finalAspectRatio, minHeight: 0 }}
      >
        <iframe
          src={iframeSrc}
          title={media.alt}
          className="border-0 rounded-inherit w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          onError={() => setHasError(true)}
        />
      </div>
    )
  }

  // Direct video URL
  if (shouldShowVideo) {
    // Portrait video optimization for mobile with contain mode
    if (isPortrait && objectFit === 'contain') {
      return (
        <div className="flex items-center justify-center w-full">
          <div
            className={`relative overflow-hidden w-full md:w-[56.25%] ${className}`}
            style={{ aspectRatio: finalAspectRatio }}
          >
            <video
              src={mediaSrc}
              title={media.alt}
              className={`w-full h-full object-${objectFit} rounded-inherit`}
              controls
              muted
              playsInline
              onError={() => setHasError(true)}
              poster={media.fallback}
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )
    }

    // Default video display
    return (
      <div
        className={`relative overflow-hidden ${className}`}
        style={{ aspectRatio: finalAspectRatio }}
      >
        <video
          src={mediaSrc}
          title={media.alt}
          className={`w-full h-full object-${objectFit} rounded-inherit`}
          controls
          muted
          playsInline
          onError={() => setHasError(true)}
          poster={media.fallback}
        >
          Your browser does not support the video tag.
        </video>
      </div>
    )
  }

  // Fallback to image
  if (fill) {
    // Portrait image optimization for mobile with contain mode
    if (isPortrait && objectFit === 'contain') {
      return (
        <div className="flex items-center justify-center w-full">
          <div
            className={`relative overflow-hidden w-full md:w-[56.25%] ${className}`}
            style={{ aspectRatio: finalAspectRatio }}
          >
            <Image
              src={mediaSrc || "/placeholder.svg"}
              alt={media.alt}
              fill
              className={`object-${objectFit}`}
              onError={() => setHasError(true)}
            />
          </div>
        </div>
      )
    }

    return (
      <div
        className={`relative overflow-hidden ${className}`}
        style={{ aspectRatio: finalAspectRatio }}
      >
        <Image
          src={mediaSrc || "/placeholder.svg"}
          alt={media.alt}
          fill
          className={`object-${objectFit}`}
          onError={() => setHasError(true)}
        />
      </div>
    )
  }

  // Portrait image optimization for mobile with contain mode
  if (isPortrait && objectFit === 'contain') {
    return (
      <div className="flex items-center justify-center w-full">
        <div
          className={`relative overflow-hidden w-full md:w-[56.25%] ${className}`}
          style={{ aspectRatio: finalAspectRatio }}
        >
          <Image
            src={mediaSrc || "/placeholder.svg"}
            alt={media.alt}
            width={width || 400}
            height={height || 300}
            className={`w-full h-full object-${objectFit}`}
            onError={() => setHasError(true)}
          />
        </div>
      </div>
    )
  }

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ aspectRatio: finalAspectRatio }}
    >
      <Image
        src={mediaSrc || "/placeholder.svg"}
        alt={media.alt}
        width={width || 400}
        height={height || 300}
        className={`w-full h-full object-${objectFit}`}
        onError={() => setHasError(true)}
      />
    </div>
  )
}
