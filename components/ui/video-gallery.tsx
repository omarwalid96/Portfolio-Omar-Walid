"use client"

import { useState } from "react"
import { Clock, Calendar } from "lucide-react"
import { Card, CardContent } from "./card"
import { Badge } from "./badge"
import { MediaDisplay } from "./media-display"
import type { VideoCategory } from "@/lib/config"
import { cn } from "@/lib/utils"
import { getBgColorClasses, getCardBorderClasses, getDurationBadgeClasses } from "@/lib/colors"

interface VideoGalleryProps {
  categories: VideoCategory[]
}

export function VideoGallery({ categories }: VideoGalleryProps) {
  const [playingVideoIndex, setPlayingVideoIndex] = useState<number | null>(null)
  const [activeCategory, setActiveCategory] = useState(0)

  const handleVideoClick = (index: number) => {
    setPlayingVideoIndex(playingVideoIndex === index ? null : index)
  }


  return (
    <div className="space-y-8">
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 justify-center">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => {
              setActiveCategory(index)
              setPlayingVideoIndex(null) // Reset playing video when switching categories
            }}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
              activeCategory === index
                ? `${getBgColorClasses(category.color)} text-white`
                : "bg-muted text-muted-foreground hover:bg-accent",
            )}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Active Category Info */}
      <div className="text-center">
        <h3 className="text-2xl font-bold text-foreground mb-2">{categories[activeCategory].name}</h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">{categories[activeCategory].description}</p>
      </div>

      {/* Video Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories[activeCategory].videos.map((video, index) => {
          const isPlaying = playingVideoIndex === index

          return (
            <Card
              key={index}
              className={cn(
                "group transition-all duration-300 border-2",
                getCardBorderClasses(categories[activeCategory].color),
                isPlaying ? "shadow-2xl" : "hover:shadow-xl cursor-pointer"
              )}
            >
              {/* Video/Thumbnail Display */}
              <div className="relative overflow-hidden rounded-t-lg" onClick={() => handleVideoClick(index)}>
                {isPlaying ? (
                  <MediaDisplay
                    media={video.video}
                    className=""
                    aspectRatio={video.video.aspectRatio || "16/9"}
                    objectFit="contain"
                  />
                ) : (
                  <MediaDisplay
                    media={video.thumbnail}
                    className="cursor-pointer"
                    aspectRatio={video.thumbnail.aspectRatio || "16/9"}
                    objectFit="contain"
                  />
                )}

                {/* Duration Badge - only show on thumbnail */}
                {!isPlaying && video.duration && (
                  <div className={`absolute top-2 right-2 ${getDurationBadgeClasses()} text-xs px-2 py-1 rounded pointer-events-none`}>
                    {video.duration}
                  </div>
                )}
              </div>

              {/* Card Content */}
              <CardContent className="p-4 space-y-3">
                <h4 className="font-semibold text-foreground">
                  {video.title}
                </h4>

                <p className="text-sm text-muted-foreground line-clamp-2">{video.description}</p>

                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  {video.duration && (
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{video.duration}</span>
                    </div>
                  )}
                  {video.date && (
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{video.date}</span>
                    </div>
                  )}
                </div>

                {video.technologies && video.technologies.length > 0 && (
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
                )}
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
