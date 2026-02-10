import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"

interface FooterProps {
    config: any
}

export function Footer({ config }: FooterProps) {
    return (
        <footer className="py-12 px-4 border-t">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            {config.personal.name}
                        </h3>
                        <p className="text-muted-foreground">{config.personal.title} & Tech Enthusiast</p>
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

                <Separator className="my-8" />

                <div className="text-center text-muted-foreground">
                    <p>
                        &copy; {new Date().getFullYear()} {config.personal.name}. {config.footer.copyright}
                    </p>
                    {config.footer.builtWith && <p className="mt-2">{config.footer.builtWith}</p>}
                </div>
            </div>
        </footer>
    )
}
