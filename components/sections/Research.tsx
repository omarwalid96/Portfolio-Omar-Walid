import { SectionHeader } from "@/components/ui/section-header"
import { DetailsToggle } from "@/components/ui/details-toggle"
import { TechBadges } from "@/components/ui/tech-badges"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Lightbulb } from "lucide-react"
import { MediaDisplay } from "@/components/ui/media-display"
import { FormattedText } from "@/components/ui/formatted-text"
import { cn } from "@/lib/utils"
import { projectAnchor } from "@/lib/project-index"
import { getIconColorClasses, getTopRuleClasses } from "@/lib/colors"

interface ResearchProps {
    config: any
}

export function Research({ config }: ResearchProps) {
    return (
        <section id="research" className="py-20 px-4">
            <div className="container mx-auto">
                <SectionHeader index="05" label="R&D" title="Research & Development" subtitle="Exploring cutting-edge technologies and innovative solutions" />

                <div className="grid md:grid-cols-2 gap-8">
                    {config.research.areas.map((area: any, index: number) => (
                        <Card key={index} data-reveal style={{ "--i": index % 2 } as React.CSSProperties} id={projectAnchor(area.title)} className={cn("scroll-mt-24", getTopRuleClasses(area.color))}>
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
                                <TechBadges technologies={area.technologies} variant="outline" />
                                {area.longDescription && (
                                    <DetailsToggle>
                                        <FormattedText
                                            text={area.longDescription}
                                            variant="markdown"
                                            className="text-sm text-muted-foreground"
                                        />
                                    </DetailsToggle>
                                )}
                            </CardContent>
                        </Card>
                    ))}
                </div>

            </div>
        </section>
    )
}
