import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MediaDisplay } from "@/components/ui/media-display"
import { Trophy, BookOpen, Quote } from "lucide-react"
import { cn } from "@/lib/utils"

interface AcademyAndStudioProps {
    config: any
}

export function AcademyAndStudio({ config }: AcademyAndStudioProps) {
    return (
        <section id="academy" className="py-20 px-4 bg-muted/30">
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-12 gap-12 items-stretch">

                    {/* Academic Journey - Left Side (7 columns) */}
                    <div className="lg:col-span-7 space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold mb-2 text-foreground flex items-center gap-3">
                                <Trophy className="h-8 w-8 text-blue-600" />
                                Academic Journey & Recognition
                            </h2>
                            <p className="text-muted-foreground">Foundations and milestones in robotics</p>
                        </div>

                        <div className="grid gap-4">
                            {config.research.competitions.map((item: any, index: number) => (
                                <Card key={index} className="group hover:shadow-md transition-all duration-300 border-l-4 border-l-blue-500">
                                    <CardContent className="p-4 flex gap-4 items-start">
                                        <div className="mt-1 bg-blue-100 dark:bg-blue-900/30 p-1 rounded-lg text-blue-600">
                                            <BookOpen className="h-5 w-5" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex justify-between items-start mb-1">
                                                <h4 className="font-bold text-foreground group-hover:text-blue-600 transition-colors">
                                                    {item.title}
                                                </h4>
                                                <span className="text-xs font-medium bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded">
                                                    {item.year}
                                                </span>
                                            </div>
                                            <p className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                                                <span>{item.venue}</span>
                                                <span className="w-1 h-1 rounded-full bg-muted-foreground/50"></span>
                                                <span>{item.type}</span>
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Workspace & Quote - Right Side (5 columns) */}
                    <div className="lg:col-span-5 flex flex-col gap-8">
                        <div>
                            <h2 className="text-3xl font-bold mb-2 text-foreground flex items-center gap-3">
                                <Quote className="h-8 w-8 text-purple-600" />
                                The Studio
                            </h2>
                            <p className="text-muted-foreground">Where ideas turn into autonomous reality</p>
                        </div>

                        <div className="relative flex-1 group">
                            {/* Workspace Image with Overlay Quote */}
                            <div className="h-full min-h-[500px] relative rounded-3xl overflow-hidden shadow-2xl border-8 border-background">
                                <MediaDisplay
                                    media={config.about.workspace.image}
                                    className="w-full h-full transform transition-transform duration-700 group-hover:scale-105"
                                    aspectRatio="auto"
                                    objectFit="cover"
                                />

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                                {/* Floating Premium Quote Card */}
                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="backdrop-blur-md bg-white/10 dark:bg-black/40 p-6 rounded-2xl border border-white/20 shadow-xl">
                                        <Quote className="h-8 w-8 text-blue-400 mb-4 opacity-50" />
                                        <p className="text-xl md:text-2xl font-medium text-white italic leading-snug">
                                            "{config.about.quote.text}"
                                        </p>
                                        <div className="mt-4 flex items-center gap-3">
                                            <div className="h-px w-8 bg-blue-400"></div>
                                            <p className="text-blue-100 font-semibold tracking-wide uppercase text-sm">
                                                {config.about.quote.author}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
