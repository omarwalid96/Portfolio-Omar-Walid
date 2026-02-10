import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code } from "lucide-react"
import { MediaDisplay } from "@/components/ui/media-display"
import { MediaGallery } from "@/components/ui/media-gallery"
import { FormattedText } from "@/components/ui/formatted-text"
import { cn } from "@/lib/utils"
import { getCardBorderClasses, getIconColorClasses } from "@/lib/colors"

interface CurrentWorkProps {
    config: any
}

// Helper function to get progress bar color and glow
const getProgressBarStyle = (color: string, progress: number) => {
    const colorMap: Record<string, { bg: string; glow: string }> = {
        blue: { bg: '#60a5fa', glow: 'rgba(96, 165, 250, 0.6)' },
        purple: { bg: '#c084fc', glow: 'rgba(192, 132, 252, 0.6)' },
        teal: { bg: '#5eead4', glow: 'rgba(94, 234, 212, 0.6)' },
        green: { bg: '#86efac', glow: 'rgba(134, 239, 172, 0.6)' },
        yellow: { bg: '#facc15', glow: 'rgba(250, 204, 21, 0.6)' },
        red: { bg: '#f87171', glow: 'rgba(248, 113, 113, 0.6)' },
        orange: { bg: '#fb923c', glow: 'rgba(251, 146, 60, 0.6)' },
    }

    const colors = colorMap[color] || colorMap.blue

    return {
        width: `${progress}%`,
        backgroundColor: colors.bg,
        boxShadow: `0 0 12px ${colors.glow}`,
    }
}

export function CurrentWork({ config }: CurrentWorkProps) {
    return (
        <section id="current" className="py-20 px-4">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 text-foreground">Currently Working On</h2>
                    <p className="text-xl text-muted-foreground">My latest projects and ongoing initiatives</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {config.currentWork.projects.map((project: any, index: number) => (
                        <Card key={index} className={cn("border-2", getCardBorderClasses(project.color))}>
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
                                <p className="text-muted-foreground">
                                    <FormattedText text={project.longDescription} />
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech: string, techIndex: number) => (
                                        <Badge key={techIndex}>{tech}</Badge>
                                    ))}
                                </div>
                                {project.progress && (
                                    <div className="bg-muted/50 dark:bg-muted rounded-lg p-3 border border-border">
                                        <div className="flex justify-between items-center mb-2">
                                            <p className="text-sm font-medium text-foreground">Progress</p>
                                            <p className="text-sm font-bold text-foreground">{project.progress}%</p>
                                        </div>
                                        <div className="w-full bg-secondary/50 dark:bg-secondary border border-border/50 rounded-full h-3 relative overflow-hidden">
                                            <div
                                                className="h-full rounded-full transition-all duration-500 absolute top-0 left-0"
                                                style={getProgressBarStyle(project.color, project.progress)}
                                            ></div>
                                        </div>
                                    </div>
                                )}
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
