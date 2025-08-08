'use client'

import { useState } from 'react'
import { X, Play, Clock, Calendar } from 'lucide-react'
import { MediaDisplay } from './media-display'
import { Badge } from './badge'
import { Button } from './button'
import { type VideoItem } from '@/lib/config'

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
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative z-10 w-full max-w-6xl mx-4 bg-white dark:bg-slate-900 rounded-lg shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-700">
          <div className="flex items-center gap-3">
            <Play className="h-5 w-5 text-blue-600" />
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
              {video.title}
            </h2>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Video Player */}
        <div className="relative">
          <MediaDisplay
            media={video.video}
            className="w-full"
            aspectRatio="16/9"
            objectFit="contain"
          />
        </div>

        {/* Video Info */}
        <div className="p-6 space-y-4">
          <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-300">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{video.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{video.date}</span>
            </div>
          </div>

          <p className="text-slate-700 dark:text-slate-300">
            {video.description}
          </p>

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
