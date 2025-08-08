'use client'

import Image from "next/image"
import { MediaItem, isVideo, isIframe, getMediaSrc, getIframeSrc } from "@/lib/config"
import { useState } from "react"

interface MediaDisplayProps {
  media: MediaItem
  width?: number
  height?: number
  className?: string
  fill?: boolean
  aspectRatio?: string
  objectFit?: 'cover' | 'contain' | 'fill'
}

export function MediaDisplay({ 
  media, 
  width, 
  height, 
  className = "", 
  fill = false,
  aspectRatio = "16/9",
  objectFit = "cover"
}: MediaDisplayProps) {
  const [hasError, setHasError] = useState(false)
  const mediaSrc = getMediaSrc(media)
  const shouldShowIframe = isIframe(media) && !hasError
  const shouldShowVideo = isVideo(media) && !hasError && !shouldShowIframe

  // Iframe embed (Google Drive, YouTube, Vimeo, etc.)
  if (shouldShowIframe) {
    const iframeSrc = getIframeSrc(media)
    
    return (
      <div 
        className={`relative overflow-hidden bg-slate-100 dark:bg-slate-800 ${className}`}
        style={{ aspectRatio }}
      >
        <iframe
          src={iframeSrc}
          title={media.alt}
          className="w-full h-full border-0 rounded-inherit"
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
    return (
      <div 
        className={`relative overflow-hidden ${className}`}
        style={{ aspectRatio }}
      >
        <video
          src={mediaSrc}
          title={media.alt}
          className={`w-full h-full object-${objectFit} rounded-inherit`}
          controls
          muted
          playsInline
          onError={() => setHasError(true)}
          poster={media.fallback} // Use fallback as poster
        >
          Your browser does not support the video tag.
        </video>
      </div>
    )
  }

  // Fallback to image
  if (fill) {
    return (
      <div 
        className={`relative overflow-hidden ${className}`}
        style={{ aspectRatio }}
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

  return (
    <div 
      className={`relative overflow-hidden ${className}`}
      style={{ aspectRatio }}
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
