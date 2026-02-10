import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import Link from "next/link"
import { MediaDisplay } from "@/components/ui/media-display"
import { MediaGallery } from "@/components/ui/media-gallery"
import { FormattedText } from "@/components/ui/formatted-text"

interface FeaturedProjectsProps {
    config: any
}

export function FeaturedProjects({ config }: FeaturedProjectsProps) {
    return (
        <section id="projects" className="py-20 px-4 bg-background">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 text-foreground">Featured Projects</h2>
                    <p className="text-xl text-muted-foreground">A showcase of my recent work and personal projects</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {config.projects.featured.map((project: any, index: number) => (
                        <Card key={index} className="group hover:shadow-xl transition-all duration-300">
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
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech: string, techIndex: number) => (
                                        <Badge key={techIndex} variant="outline">
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    <FormattedText text={project.longDescription} />
                                </p>
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
