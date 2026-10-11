import { SectionHeader } from "@/components/ui/section-header"
import { cn } from "@/lib/utils"
import { getTopRuleClasses } from "@/lib/colors"
import { DetailsToggle } from "@/components/ui/details-toggle"
import { TechBadges } from "@/components/ui/tech-badges"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import Link from "next/link"
import { MediaDisplay } from "@/components/ui/media-display"
import { MediaGallery } from "@/components/ui/media-gallery"
import { FormattedText } from "@/components/ui/formatted-text"
import { projectAnchor } from "@/lib/project-index"

interface FeaturedProjectsProps {
    config: any
}

export function FeaturedProjects({ config }: FeaturedProjectsProps) {
    return (
        <section id="projects" className="py-20 px-4 bg-background">
            <div className="container mx-auto">
                <SectionHeader index="03" label="Projects" title="Featured Projects" subtitle="A showcase of my recent work and personal projects" />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {config.projects.featured.map((project: any, index: number) => (
                        <Card key={index} data-reveal style={{ "--i": index % 3 } as React.CSSProperties} id={projectAnchor(project.title)} className={cn("group scroll-mt-24 transition-shadow duration-200 hover:shadow-[0_12px_32px_-12px_rgba(147,51,234,0.18)]", project.color && getTopRuleClasses(project.color))}>
                            {project.images && project.images.length > 0 ? (
                                <MediaGallery
                                    media={project.images}
                                    className="rounded-t-lg"
                                    aspectRatio="16/9"
                                    objectFit="contain"
                                />
                            ) : project.image ? (
                                <MediaDisplay
                                    media={project.image}
                                    className="rounded-t-lg"
                                    aspectRatio="16/9"
                                    objectFit="contain"
                                />
                            ) : null}
                            <CardHeader>
                                <CardTitle className="flex items-center justify-between text-foreground">
                                    <FormattedText text={project.title} />
                                    {project.links.live && (
                                        <Link href={project.links.live} target="_blank">
                                            <ExternalLink className="h-4 w-4 text-foreground/50 hover:text-foreground/80" />
                                        </Link>
                                    )}
                                </CardTitle>
                                <CardDescription>
                                    <FormattedText text={project.description} />
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="mb-4">
                                    <TechBadges technologies={project.technologies} variant="outline" />
                                </div>
                                <DetailsToggle>
                                    <FormattedText
                                        text={project.longDescription}
                                        variant="markdown"
                                        className="text-sm text-muted-foreground"
                                    />
                                </DetailsToggle>
                                {project.links.github && (
                                    <div className="mt-4">
                                        <Link
                                            href={project.links.github}
                                            target="_blank"
                                            className="text-sm text-blue-600 hover:text-blue-800"
                                        >
                                            View on GitHub →
                                        </Link>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
