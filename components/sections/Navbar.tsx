interface NavbarProps {
    config: any
}

export function Navbar({ config }: NavbarProps) {
    return (
        <nav className="fixed top-0 w-full bg-[hsl(var(--background)/0.8)] backdrop-blur-md z-50 border-b">
            <div className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {config.personal.name}
                    </h1>
                    <div className="hidden md:flex space-x-8">
                        <a href="#home" className="text-foreground/70 hover:text-foreground transition-colors">
                            Home
                        </a>
                        <a href="#about" className="text-foreground/70 hover:text-foreground transition-colors">
                            About
                        </a>
                        <a href="#experience" className="text-foreground/70 hover:text-foreground transition-colors">
                            Experience
                        </a>
                        <a href="#projects" className="text-foreground/70 hover:text-foreground transition-colors">
                            Projects
                        </a>
                        <a href="#current" className="text-foreground/70 hover:text-foreground transition-colors">
                            Current Work
                        </a>
                        <a href="#research" className="text-foreground/70 hover:text-foreground transition-colors">
                            R&D
                        </a>
                        <a href="#events" className="text-foreground/70 hover:text-foreground transition-colors">
                            Events
                        </a>
                        <a href="#videos" className="text-foreground/70 hover:text-foreground transition-colors">
                            Videos
                        </a>
                        <a href="#academy" className="text-foreground/70 hover:text-foreground transition-colors">
                            Academy
                        </a>
                    </div>

                    {/* Mobile menu: pure HTML, no handlers */}
                    <details className="md:hidden relative group [&>summary::-webkit-details-marker]:hidden">
                        <summary
                            aria-label="Toggle menu"
                            className="flex items-center gap-2 cursor-pointer rounded-md px-3 py-2 hover:bg-muted focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 transition-transform group-open:rotate-90"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </summary>

                        <div className="absolute right-0 mt-2 w-56 rounded-lg border border-border bg-[hsl(var(--background)/0.95)] shadow-lg backdrop-blur p-2">
                            <a
                                href="#home"
                                className="block px-3 py-2 rounded-md text-foreground/80 hover:bg-muted hover:text-foreground transition-colors"
                            >
                                Home
                            </a>
                            <a
                                href="#about"
                                className="block px-3 py-2 rounded-md text-foreground/80 hover:bg-muted hover:text-foreground transition-colors"
                            >
                                About
                            </a>
                            <a
                                href="#experience"
                                className="block px-3 py-2 rounded-md text-foreground/80 hover:bg-muted hover:text-foreground transition-colors"
                            >
                                Experience
                            </a>
                            <a
                                href="#projects"
                                className="block px-3 py-2 rounded-md text-foreground/80 hover:bg-muted hover:text-foreground transition-colors"
                            >
                                Projects
                            </a>
                            <a
                                href="#current"
                                className="block px-3 py-2 rounded-md text-foreground/80 hover:bg-muted hover:text-foreground transition-colors"
                            >
                                Current Work
                            </a>
                            <a
                                href="#research"
                                className="block px-3 py-2 rounded-md text-foreground/80 hover:bg-muted hover:text-foreground transition-colors"
                            >
                                R&D
                            </a>
                            <a
                                href="#events"
                                className="block px-3 py-2 rounded-md text-foreground/80 hover:bg-muted hover:text-foreground transition-colors"
                            >
                                Events
                            </a>
                            <a
                                href="#videos"
                                className="block px-3 py-2 rounded-md text-foreground/80 hover:bg-muted hover:text-foreground transition-colors"
                            >
                                Videos
                            </a>
                            <a
                                href="#academy"
                                className="block px-3 py-2 rounded-md text-foreground/80 hover:bg-muted hover:text-foreground transition-colors"
                            >
                                Academy
                            </a>
                        </div>
                    </details>
                </div>
            </div>
        </nav>
    )
}
