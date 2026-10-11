import { SectionHeader } from "@/components/ui/section-header"
import { Video } from "lucide-react"
import { VideoGallery } from "@/components/ui/video-gallery"

interface VideosSectionProps {
    config: any
}

export function VideosSection({ config }: VideosSectionProps) {
    return (
        <section id="videos" className="py-20 px-4 bg-background">
            <div className="container mx-auto">
                <SectionHeader
                    index="07"
                    label="Videos"
                    title={<span className="inline-flex items-center justify-center gap-3"><Video className="h-10 w-10 text-blue-600" />Video Gallery</span>}
                    subtitle="Watch my robotics projects in action - from live demonstrations to technical deep-dives"
                />

                <VideoGallery categories={config.videos.categories} />
            </div>
        </section>
    )
}
