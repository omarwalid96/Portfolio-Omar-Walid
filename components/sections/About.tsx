import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Code2 } from "lucide-react"
import { FormattedText } from "@/components/ui/formatted-text"
import { cn } from "@/lib/utils"
import { formatCategoryName, getColorClasses, getBadgeHoverClasses, getIndicatorColorClasses, getBorderColorClasses } from "@/lib/colors"

interface AboutProps {
    config: any
}

export function About({ config }: AboutProps) {
    return (
        <section id="about" className="py-20 px-4 bg-background">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 text-foreground">About Me</h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{config.about.description}</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left Column - Achievements */}
                    <Card className="h-fit">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Award className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                                Key Achievements
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {config.about.achievements.map((achievement: any, index: number) => (
                                <div
                                    key={index}
                                    className={cn("flex items-start gap-3 p-3 rounded-lg transition-all duration-300 hover:bg-secondary/50 hover:translate-x-1 border-l-4", getBorderColorClasses(achievement.color))}
                                >
                                    <div>
                                        <h4 className="font-semibold text-foreground">{achievement.title}</h4>
                                        <p className="text-foreground/70 text-sm">{achievement.description}</p>
                                    </div>
                                </div>
                            ))}
                        </CardContent>
                    </Card>

                    {/* Right Column - Skills */}
                    <Card className="h-fit">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Code2 className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                                Skills & Technologies
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            {Array.isArray(config.about.skills) ? (
                                <div className="flex flex-wrap gap-2">
                                    {config.about.skills.map((skill: string, index: number) => (
                                        <Badge
                                            key={index}
                                            variant="secondary"
                                            className="transition-all duration-300 hover:scale-110 hover:shadow-md cursor-default"
                                        >
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            ) : (
                                <div className="space-y-6">
                                    {Object.entries(config.about.skills).map(([category, data]: [string, any], categoryIndex) => (
                                        <div key={categoryIndex}>
                                            <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                                                <div className={cn("w-1.5 h-1.5 rounded-full", getIndicatorColorClasses(data.color))}></div>
                                                {formatCategoryName(category)}
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {(data.items as string[]).map((skill, skillIndex) => (
                                                    <Badge
                                                        key={skillIndex}
                                                        variant="secondary"
                                                        className={cn(
                                                            "text-xs px-2.5 py-1 transition-all duration-300 cursor-default",
                                                            "hover:scale-110 hover:shadow-lg",
                                                            getBadgeHoverClasses(data.color)
                                                        )}
                                                    >
                                                        {skill}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
