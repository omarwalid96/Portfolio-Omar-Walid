'use client'

import { useState } from 'react'
import { Play, Clock, Calendar } from 'lucide-react'
import { Card, CardContent } from './card'
import { Badge } from './badge'
import { MediaDisplay } from './media-display'
import { VideoModal } from './video-modal'
import { type VideoItem, type VideoCategory } from '@/lib/config'

interface VideoGalleryProps {
  categories: VideoCategory[]
}

export function VideoGallery({ categories }: VideoGalleryProps) {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState(0)

  const handleVideoClick = (video: VideoItem) => {
    setSelectedVideo(video)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedVideo(null)
  }

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, string> = {
      blue: "bg-blue-600 text-white",
      purple: "bg-purple-600 text-white",
      green: "bg-green-600 text-white",
      yellow: "bg-yellow-600 text-white",
      red: "bg-red-600 text-white",
      teal: "bg-teal-600 text-white"
    }
    return colorMap[color] || "bg-blue-600 text-white"
  }

  const getBorderColorClasses = (color: string) => {
    const colorMap: Record<string, string> = {
      blue: "border-blue-200 dark:border-blue-800",
      purple: "border-purple-200 dark:border-purple-800",
      green: "border-green-200 dark:border-green-800",
      yellow: "border-yellow-200 dark:border-yellow-800",
      red: "border-red-200 dark:border-red-800",
      teal: "border-teal-200 dark:border-teal-800"
    }
    return colorMap[color] || "border-blue-200 dark:border-blue-800"
  }

  return (
    <div className="space-y-8">
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 justify-center">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setActiveCategory(index)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              activeCategory === index
                ? getColorClasses(category.color)
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Active Category Info */}
      <div className="text-center">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
          {categories[activeCategory].name}
        </h3>
        <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          {categories[activeCategory].description}
        </p>
      </div>

      {/* Video Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories[activeCategory].videos.map((video, index) => (
          <Card 
            key={index} 
            className={`group cursor-pointer hover:shadow-xl transition-all duration-300 border-2 ${getBorderColorClasses(categories[activeCategory].color)}`}
            onClick={() => handleVideoClick(video)}
          >
            <div className="relative overflow-hidden rounded-t-lg">
              <MediaDisplay
                media={video.thumbnail}
                className="group-hover:scale-105 transition-transform duration-300"
                aspectRatio="16/9"
                objectFit="cover"
              />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/90 dark:bg-slate-900/90 rounded-full p-4">
                  <Play className="h-8 w-8 text-slate-900 dark:text-white fill-current" />
                </div>
              </div>

              {/* Duration Badge */}
              <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                {video.duration}
              </div>
            </div>

            <CardContent className="p-4 space-y-3">
              <h4 className="font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {video.title}
              </h4>
              
              <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-2">
                {video.description}
              </p>

              <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  <span>{video.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  <span>{video.date}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-1">
                {video.technologies.slice(0, 3).map((tech, techIndex) => (
                  <Badge key={techIndex} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
                {video.technologies.length > 3 && (
                  <Badge variant="outline" className="text-xs">
                    +{video.technologies.length - 3}
                  </Badge>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Video Modal */}
      <VideoModal
        video={selectedVideo}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  )
}
