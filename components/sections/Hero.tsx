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
                            <h1 className="hero-in [--i:0] text-5xl lg:text-7xl font-bold leading-tight">
                                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                                    {config.personal.name}
                                </span>
                            </h1>
                            <h2 className="hero-in [--i:1] text-4xl lg:text-6xl font-bold leading-tight">
                                <span className="block text-foreground">{config.personal.title}</span>
                            </h2>
                            <h3 className="hero-in [--i:2] text-3xl lg:text-5xl font-bold leading-tight">
                                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                                    {config.personal.tagline}
                                </span>
                            </h3>
                            <p className="hero-in [--i:3] text-xl text-muted-foreground max-w-lg">{config.personal.passion}</p>
                        </div>

                        <div className="hero-in [--i:4] flex space-x-6">
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

                        <a
                            href="#index"
                            className="hero-in [--i:5] inline-flex items-center gap-2 text-lg font-medium text-foreground underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                        >
                            Browse all projects <span aria-hidden="true">↓</span>
                        </a>
                    </div>

                    <div className="relative">
                        <div className="relative w-full max-w-md mx-auto">
                            <div className="hero-glow-on absolute inset-0">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                            </div>
                            <Image
                                src={getImageSrc(config.personal.profileImage) || "/placeholder.svg"}
                                alt={config.personal.profileImage.alt}
                                width={400}
                                height={400}
                                priority
                                className="hero-photo-in relative z-10 rounded-full border-4 border-[hsl(var(--background))] shadow-2xl"
                            />
                            {/* Signature "sensor lock-on": one gradient sweep around the portrait on load; invisible at rest. */}
                            <span
                                aria-hidden="true"
                                className="hero-sweep left-[-6px] top-[-6px] h-[calc(100%+12px)] w-[calc(min(100%,400px)+12px)]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
