import { Video } from "lucide-react"
import { VideoGallery } from "@/components/ui/video-gallery"

interface VideosSectionProps {
    config: any
}

export function VideosSection({ config }: VideosSectionProps) {
    return (
        <section id="videos" className="py-20 px-4 bg-background">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 text-foreground flex items-center justify-center gap-3">
                        <Video className="h-10 w-10 text-blue-600" />
                        Video Gallery
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        Watch my robotics projects in action - from live demonstrations to technical deep-dives
                    </p>
                </div>

                <VideoGallery categories={config.videos.categories} />
            </div>
        </section>
    )
}
