import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Lightbulb } from "lucide-react"
import { MediaDisplay } from "@/components/ui/media-display"
import { FormattedText } from "@/components/ui/formatted-text"
import { cn } from "@/lib/utils"
import { getIconColorClasses } from "@/lib/colors"

interface ResearchProps {
    config: any
}

export function Research({ config }: ResearchProps) {
    return (
        <section id="research" className="py-20 px-4">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 text-foreground">Research & Development</h2>
                    <p className="text-xl text-muted-foreground">
                        Exploring cutting-edge technologies and innovative solutions
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {config.research.areas.map((area: any, index: number) => (
                        <Card key={index}>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Lightbulb className={cn("h-5 w-5", getIconColorClasses(area.color))} />
                                    <FormattedText text={area.title} />
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <MediaDisplay media={area.image} className="rounded-lg" aspectRatio="16/9" objectFit="cover" />
                                <p className="text-muted-foreground">
                                    <FormattedText text={area.description} />
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {area.technologies.map((tech: string, techIndex: number) => (
                                        <Badge key={techIndex} variant="outline">
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                                {area.longDescription && (
                                    <p className="text-sm text-muted-foreground">
                                        <FormattedText text={area.longDescription} />
                                    </p>
                                )}
                            </CardContent>
                        </Card>
                    ))}
                </div>

            </div>
        </section>
    )
}
