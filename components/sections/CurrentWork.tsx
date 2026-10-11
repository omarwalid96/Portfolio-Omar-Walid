import { SectionHeader } from "@/components/ui/section-header"
import { DetailsToggle } from "@/components/ui/details-toggle"
import { TechBadges } from "@/components/ui/tech-badges"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code } from "lucide-react"
import { MediaDisplay } from "@/components/ui/media-display"
import { MediaGallery } from "@/components/ui/media-gallery"
import { FormattedText } from "@/components/ui/formatted-text"
import { cn } from "@/lib/utils"
import { projectAnchor } from "@/lib/project-index"
import { getIconColorClasses, getTopRuleClasses, spectrum } from "@/lib/colors"

interface CurrentWorkProps {
    config: any
}

export function CurrentWork({ config }: CurrentWorkProps) {
    return (
        <section id="current" className="py-20 px-4">
            <div className="container mx-auto">
                <SectionHeader index="04" label="Now" title="Currently Working On" subtitle="My latest projects and ongoing initiatives" />

                <div className="grid lg:grid-cols-2 gap-8">
                    {config.currentWork.projects.map((project: any, index: number) => (
                        <Card key={index} data-reveal style={{ "--i": index % 2 } as React.CSSProperties} id={projectAnchor(project.title)} className={cn("scroll-mt-24", getTopRuleClasses(project.color))}>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Code className={cn("h-5 w-5", getIconColorClasses(project.color))} />
                                    <FormattedText text={project.title} />
                                </CardTitle>
                                <CardDescription>
                                    <FormattedText text={project.description} />
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {project.images && project.images.length > 0 ? (
                                    <MediaGallery
                                        media={project.images}
                                        className="rounded-lg"
                                        aspectRatio="16/9"
                                        objectFit="contain"
                                    />
                                ) : project.image ? (
                                    <MediaDisplay media={project.image} className="rounded-lg" aspectRatio="16/9" objectFit="contain" />
                                ) : null}
                                <TechBadges technologies={project.technologies} />
                                <DetailsToggle>
                                    <FormattedText
                                        text={project.longDescription}
                                        variant="markdown"
                                        className="text-muted-foreground"
                                    />
                                </DetailsToggle>
                                {project.progress === 100 ? (
                                    <span className={cn("inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium", spectrum(project.color).accentBg, spectrum(project.color).accentText)}>
                                        <span className={cn("shipped-dot relative h-1.5 w-1.5 rounded-full", spectrum(project.color).fill)} aria-hidden="true" />
                                        Shipped
                                    </span>
                                ) : project.progress ? (
                                    <div>
                                        <div className="flex justify-between items-center mb-2">
                                            <p className="text-sm font-medium text-foreground">Progress{project.status && <span className="text-muted-foreground"> · {project.status}</span>}</p>
                                            <p className="text-sm font-semibold text-foreground tabular-nums">{project.progress}%</p>
                                        </div>
                                        <div className="h-1.5 w-full rounded-full bg-slate-100 dark:bg-secondary overflow-hidden">
                                            <div
                                                data-progress
                                                className={cn("h-full rounded-full", spectrum(project.color).fill)}
                                                style={{ width: `${project.progress}%` }}
                                            />
                                        </div>
                                    </div>
                                ) : null}
                                {project.stats && (
                                    <div className="flex justify-between text-sm text-muted-foreground">
                                        <span>⭐ {project.stats.stars} stars</span>
                                        <span>🍴 {project.stats.forks} forks</span>
                                        <span>📦 {project.stats.downloads} downloads</span>
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
