import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Calendar,
  MapPin,
  Award,
  Briefcase,
  Code,
  Lightbulb,
  Video,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { MediaDisplay } from "@/components/ui/media-display"
import { VideoGallery } from "@/components/ui/video-gallery"
import { loadPortfolioConfig } from "@/lib/config-server"
import { getImageSrc } from "@/lib/config"
import { cn } from "@/lib/utils"

export default function Portfolio() {
  const config = loadPortfolioConfig()

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, string> = {
      blue: "bg-blue-600",
      purple: "bg-purple-600",
      teal: "bg-teal-600",
      green: "bg-green-600",
      yellow: "bg-yellow-600",
      red: "bg-red-600",
      orange: "bg-orange-600",
    }
    return colorMap[color] || "bg-blue-600"
  }

  const getBorderColorClasses = (color: string) => {
    const colorMap: Record<string, string> = {
      blue: "border-l-blue-600",
      purple: "border-l-purple-600",
      teal: "border-l-teal-600",
      green: "border-l-green-600",
      yellow: "border-l-yellow-600",
      red: "border-l-red-600",
      orange: "border-l-orange-600",
    }
    return colorMap[color] || "border-l-blue-600"
  }

  const getIconColorClasses = (color: string) => {
    const colorMap: Record<string, string> = {
      blue: "text-blue-600",
      purple: "text-purple-600",
      teal: "text-teal-600",
      green: "text-green-600",
      yellow: "text-yellow-600",
      red: "text-red-600",
      orange: "text-orange-600",
    }
    return colorMap[color] || "text-blue-600"
  }

  const getCardBorderClasses = (color: string) => {
    const map: Record<string, string> = {
      blue: "border-blue-200 dark:border-blue-800",
      purple: "border-purple-200 dark:border-purple-800",
      teal: "border-teal-200 dark:border-teal-800",
      green: "border-green-200 dark:border-green-800",
      yellow: "border-yellow-200 dark:border-yellow-800",
      red: "border-red-200 dark:border-red-800",
      orange: "border-orange-200 dark:border-orange-800",
    }
    return map[color] || "border-blue-200 dark:border-blue-800"
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
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
              </div>
            </details>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
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

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">About Me</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{config.about.description}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-blue-600" />
                    Key Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {config.about.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className={cn("w-2 h-2 rounded-full mt-2", getColorClasses(achievement.color))}></div>
                      <div>
                        <h4 className="font-semibold text-foreground">{achievement.title}</h4>
                        <p className="text-muted-foreground">{achievement.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-purple-600" />
                    Career Roles
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-l-2 border-blue-200 pl-4 space-y-4">
                    {config.experience.jobs.slice(0, 3).map((job, index) => (
                      <div key={index}>
                        <h4 className="font-semibold text-foreground">{job.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {job.startDate} - {job.endDate}
                        </p>
                        <p className="text-muted-foreground">{job.responsibilities[0]}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card> */}
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-foreground">Skills & Technologies</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {config.about.skills.map((skill, index) => (
                      <Badge key={index} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="relative h-64 rounded-lg overflow-hidden">
                <MediaDisplay
                  media={config.about.workspace.image}
                  className="rounded-lg"
                  aspectRatio="16/9"
                  objectFit="cover"
                />
              </div>

              <Card>
                <CardContent className="pt-6">
                  <blockquote className="text-lg italic text-muted-foreground">"{config.about.quote.text}"</blockquote>
                  <p className="text-sm text-muted-foreground mt-2">- {config.about.quote.author}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Job Roles & Responsibilities</h2>
            <p className="text-xl text-muted-foreground">
              Detailed overview of my professional experience and key responsibilities
            </p>
          </div>

          <div className="space-y-8">
            {config.experience.jobs.map((job, index) => (
              <Card key={index} className={cn("border-l-4", getBorderColorClasses(job.color))}>
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
                  <ul className="space-y-2 text-muted-foreground">
                    {job.responsibilities.map((responsibility, respIndex) => (
                      <li key={respIndex}>• {responsibility}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Featured Projects</h2>
            <p className="text-xl text-muted-foreground">A showcase of my recent work and personal projects</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {config.projects.featured.map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <MediaDisplay
                  media={project.image}
                  className="rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                  aspectRatio="16/9"
                  objectFit="cover"
                />
                <CardHeader>
                  <CardTitle className="flex items-center justify-between text-foreground">
                    {project.title}
                    {project.links.live && (
                      <Link href={project.links.live} target="_blank">
                        <ExternalLink className="h-4 w-4 text-foreground/50 hover:text-foreground/80" />
                      </Link>
                    )}
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">{project.longDescription}</p>
                  {project.links.github && (
                    <div className="mt-4">
                      <Link
                        href={project.links.github}
                        target="_blank"
                        className="text-sm text-blue-600 hover:text-blue-800"
                      >
                        View on GitHub →
                      </Link>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Current Work Section */}
      <section id="current" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Currently Working On</h2>
            <p className="text-xl text-muted-foreground">My latest projects and ongoing initiatives</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {config.currentWork.projects.map((project, index) => (
              <Card key={index} className={cn("border-2", getCardBorderClasses(project.color))}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className={cn("h-5 w-5", getIconColorClasses(project.color))} />
                    {project.title}
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <MediaDisplay media={project.image} className="rounded-lg" aspectRatio="16/9" objectFit="cover" />
                  <p className="text-muted-foreground">{project.longDescription}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex}>{tech}</Badge>
                    ))}
                  </div>
                  {project.progress && (
                    <div className="bg-muted rounded-lg p-3">
                      <p className="text-sm font-medium mb-1">Progress: {project.progress}%</p>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className={cn(getColorClasses(project.color), "h-2 rounded-full")}
                          style={{ width: `${project.progress}%` }}
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

      {/* R&D Section */}
      <section id="research" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Research & Development</h2>
            <p className="text-xl text-muted-foreground">
              Exploring cutting-edge technologies and innovative solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {config.research.areas.map((area, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className={cn("h-5 w-5", getIconColorClasses(area.color))} />
                    {area.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <MediaDisplay media={area.image} className="rounded-lg" aspectRatio="16/9" objectFit="cover" />
                  <p className="text-muted-foreground">{area.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {area.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  {area.longDescription && <p className="text-sm text-muted-foreground">{area.longDescription}</p>}
                </CardContent>
              </Card>
            ))}
          </div>

          {config.research.competitions.length > 0 && (
            <div className="mt-12 text-center">
              <Card className="max-w-2xl mx-auto">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">University Projects & Competitions</h3>
                  <div className="space-y-3 text-left">
                    {config.research.competitions.map((publication, index) => (
                      <div key={index} className="border-l-2 border-blue-200 pl-4">
                        <h4 className="font-medium text-foreground">"{publication.title}"</h4>
                        <p className="text-sm text-muted-foreground">
                          {publication.type}, {publication.venue} {publication.year}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Events</h2>
            <p className="text-xl text-muted-foreground">A showcase of Events I contributed in</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {config.eventsWork.featured.map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <MediaDisplay
                  media={project.image}
                  className="rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                  aspectRatio="16/9"
                  objectFit="cover"
                />
                <CardHeader>
                  <CardTitle className="flex items-center justify-between text-foreground">
                    {project.title}
                    {project.links.live && (
                      <Link href={project.links.live} target="_blank">
                        <ExternalLink className="h-4 w-4 text-foreground/50 hover:text-foreground/80" />
                      </Link>
                    )}
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">{project.longDescription}</p>
                  {project.links.github && (
                    <div className="mt-4">
                      <Link
                        href={project.links.github}
                        target="_blank"
                        className="text-sm text-blue-600 hover:text-blue-800"
                      >
                        View on GitHub →
                      </Link>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section id="videos" className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground flex items-center justify-center gap-3">
              <Video className="h-10 w-10 text-blue-600" />
              Video Gallery
            </h2>
            <p className="text-xl text-muted-foreground">
              Watch my robotics projects in action - from live demonstrations to technical deep-dives
            </p>
          </div>

          <VideoGallery categories={config.videos.categories} />
        </div>
      </section>

      {/* Footer */}
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
    </div>
  )
}
