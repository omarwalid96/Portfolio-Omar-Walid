"use client"

import { X, Play, Clock, Calendar } from "lucide-react"
import { MediaDisplay } from "./media-display"
import { Badge } from "./badge"
import { Button } from "./button"
import type { VideoItem } from "@/lib/config"

interface VideoModalProps {
  video: VideoItem | null
  isOpen: boolean
  onClose: () => void
}

export function VideoModal({ video, isOpen, onClose }: VideoModalProps) {
  if (!isOpen || !video) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

      {/* Modal Content */}
      <div className="relative z-10 w-full max-w-6xl mx-4 bg-background rounded-lg shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div className="flex items-center gap-3">
            <Play className="h-5 w-5 text-blue-600" />
            <h2 className="text-xl font-semibold text-foreground">{video.title}</h2>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose} className="text-foreground/70 hover:text-foreground">
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Video Player */}
        <div className="relative">
          <MediaDisplay media={video.video} className="w-full" aspectRatio="16/9" objectFit="contain" />
        </div>

        {/* Video Info */}
        <div className="p-6 space-y-4">
          <div className="flex items-center gap-4 text-sm text-foreground/80">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{video.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{video.date}</span>
            </div>
          </div>

          <p className="text-foreground/80">{video.description}</p>

          <div className="flex flex-wrap gap-2">
            {video.technologies.map((tech, index) => (
              <Badge key={index} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
