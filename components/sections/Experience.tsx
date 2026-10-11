import { SectionHeader } from "@/components/ui/section-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin } from "lucide-react"
import { FormattedText } from "@/components/ui/formatted-text"
import { cn } from "@/lib/utils"
import { getTopRuleClasses } from "@/lib/colors"

interface ExperienceProps {
    config: any
}

export function Experience({ config }: ExperienceProps) {
    return (
        <section id="experience" className="py-20 px-4">
            <div className="container mx-auto">
                <SectionHeader index="02" label="Experience" title="Job Roles & Responsibilities" subtitle="Detailed overview of my professional experience and key responsibilities" />

                <div className="space-y-8">
                    {config.experience.jobs.map((job: any, index: number) => (
                        <Card key={index} data-reveal className={getTopRuleClasses(job.color)}>
                            <CardHeader>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <CardTitle className="text-xl text-foreground">{job.title}</CardTitle>
                                        <CardDescription className="text-lg">{job.company}</CardDescription>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm text-muted-foreground flex items-center gap-1">
                                            <Calendar className="h-4 w-4" />
                                            {job.startDate} - {job.endDate}
                                        </p>
                                        <p className="text-sm text-muted-foreground flex items-center gap-1">
                                            <MapPin className="h-4 w-4" />
                                            {job.location}
                                        </p>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-foreground/80">
                                    {job.responsibilities.map((responsibility: string, respIndex: number) => (
                                        <li key={respIndex} className="flex gap-2">
                                            <span className="text-foreground">•</span>
                                            <FormattedText text={responsibility} />
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
