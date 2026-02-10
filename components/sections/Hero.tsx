import { Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { getImageSrc } from "@/lib/config"

interface HeroProps {
    config: any
}

export function Hero({ config }: HeroProps) {
    return (
        <section id="home" className="pt-20 pb-16 px-4">
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                                    {config.personal.name}
                                </span>
                            </h1>
                            <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
                                <span className="block text-foreground">{config.personal.title}</span>
                            </h2>
                            <h3 className="text-3xl lg:text-5xl font-bold leading-tight">
                                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                                    {config.personal.tagline}
                                </span>
                            </h3>
                            <p className="text-xl text-muted-foreground max-w-lg">{config.personal.passion}</p>
                        </div>

                        <div className="flex space-x-6">
                            <Link
                                href={config.social.github.url}
                                target="_blank"
                                className="text-foreground/70 hover:text-foreground transition-colors"
                            >
                                <Github className="h-6 w-6" />
                            </Link>
                            <Link
                                href={config.social.linkedin.url}
                                target="_blank"
                                className="text-foreground/70 hover:text-foreground transition-colors"
                            >
                                <Linkedin className="h-6 w-6" />
                            </Link>
                            <Link
                                href={`mailto:${config.social.email}`}
                                className="text-foreground/70 hover:text-foreground transition-colors"
                            >
                                <Mail className="h-6 w-6" />
                            </Link>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative w-full max-w-md mx-auto">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                            <Image
                                src={getImageSrc(config.personal.profileImage) || "/placeholder.svg"}
                                alt={config.personal.profileImage.alt}
                                width={400}
                                height={400}
                                className="relative z-10 rounded-full border-4 border-[hsl(var(--background))] shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
