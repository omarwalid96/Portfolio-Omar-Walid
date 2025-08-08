import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Github, Linkedin, Mail, ExternalLink, Calendar, MapPin, Award, Briefcase, Code, Lightbulb } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { MediaDisplay } from "@/components/ui/media-display"
import { loadPortfolioConfig } from "@/lib/config-server"
import { getImageSrc } from "@/lib/config"

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
      orange: "bg-orange-600"
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
      orange: "border-l-orange-600"
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
      orange: "text-orange-600"
    }
    return colorMap[color] || "text-blue-600"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {config.personal.name}
            </h1>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">Home</a>
              <a href="#about" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">About</a>
              <a href="#experience" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">Experience</a>
              <a href="#projects" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">Projects</a>
              <a href="#current" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">Current Work</a>
              <a href="#research" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">R&D</a>
              <a href="#events" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">Events</a>
            </div>
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
                  <span className="block text-slate-900 dark:text-white">
                    {config.personal.title}
                  </span>
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                    {config.personal.tagline}
                  </span>
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-300 max-w-lg">
                  {config.personal.passion}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  <Mail className="mr-2 h-4 w-4" />
                  Get In Touch
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href={config.social.github.url} target="_blank">
                    <Github className="mr-2 h-4 w-4" />
                    View GitHub
                  </Link>
                </Button>
              </div>

              <div className="flex space-x-6">
                <Link href={config.social.github.url} target="_blank" className="text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors">
                  <Github className="h-6 w-6" />
                </Link>
                <Link href={config.social.linkedin.url} target="_blank" className="text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors">
                  <Linkedin className="h-6 w-6" />
                </Link>
                <Link href={`mailto:${config.social.email}`} className="text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors">
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
                  className="relative z-10 rounded-full border-4 border-white dark:border-slate-800 shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white dark:bg-slate-800">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">About Me</h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              {config.about.description}
            </p>
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
                      <div className={`w-2 h-2 ${getColorClasses(achievement.color)} rounded-full mt-2`}></div>
                      <div>
                        <h4 className="font-semibold">{achievement.title}</h4>
                        <p className="text-slate-600 dark:text-slate-300">{achievement.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
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
                        <h4 className="font-semibold">{job.title}</h4>
                        <p className="text-sm text-slate-500">{job.startDate} - {job.endDate}</p>
                        <p className="text-slate-600 dark:text-slate-300">{job.responsibilities[0]}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Skills & Technologies</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {config.about.skills.map((skill, index) => (
                      <Badge key={index} variant="secondary">{skill}</Badge>
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
                  <blockquote className="text-lg italic text-slate-600 dark:text-slate-300">
                    "{config.about.quote.text}"
                  </blockquote>
                  <p className="text-sm text-slate-500 mt-2">- {config.about.quote.author}</p>
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
            <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">Job Roles & Responsibilities</h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Detailed overview of my professional experience and key responsibilities
            </p>
          </div>

          <div className="space-y-8">
            {config.experience.jobs.map((job, index) => (
              <Card key={index} className={`border-l-4 ${getBorderColorClasses(job.color)}`}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{job.title}</CardTitle>
                      <CardDescription className="text-lg">{job.company}</CardDescription>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-slate-500 flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {job.startDate} - {job.endDate}
                      </p>
                      <p className="text-sm text-slate-500 flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {job.location}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-300">
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
      <section id="projects" className="py-20 px-4 bg-white dark:bg-slate-800">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">Featured Projects</h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              A showcase of my recent work and personal projects
            </p>
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
                  <CardTitle className="flex items-center justify-between">
                    {project.title}
                    {project.links.live && (
                      <Link href={project.links.live} target="_blank">
                        <ExternalLink className="h-4 w-4 text-slate-400 hover:text-slate-600" />
                      </Link>
                    )}
                  </CardTitle>
                  <CardDescription>
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline">{tech}</Badge>
                    ))}
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    {project.longDescription}
                  </p>
                  {project.links.github && (
                    <div className="mt-4">
                      <Link 
                        href={project.links.github} 
                        target="_blank"
                        className="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                      >
                        View on GitHub →
                      </Link>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link href={config.social.github.url} target="_blank">
                <Github className="mr-2 h-4 w-4" />
                View All Projects on GitHub
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Current Work Section */}
      <section id="current" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">Currently Working On</h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              My latest projects and ongoing initiatives
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {config.currentWork.projects.map((project, index) => (
              <Card key={index} className={`border-2 border-${project.color}-200 dark:border-${project.color}-800`}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className={`h-5 w-5 ${getIconColorClasses(project.color)}`} />
                    {project.title}
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <MediaDisplay
                    media={project.image}
                    className="rounded-lg"
                    aspectRatio="16/9"
                    objectFit="cover"
                  />
                  <p className="text-slate-600 dark:text-slate-300">
                    {project.longDescription}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex}>{tech}</Badge>
                    ))}
                  </div>
                  {project.progress && (
                    <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-3">
                      <p className="text-sm font-medium mb-1">Progress: {project.progress}%</p>
                      <div className="w-full bg-slate-200 dark:bg-slate-600 rounded-full h-2">
                        <div 
                          className={`${getColorClasses(project.color)} h-2 rounded-full`} 
                          style={{width: `${project.progress}%`}}
                        ></div>
                      </div>
                    </div>
                  )}
                  {project.stats && (
                    <div className="flex justify-between text-sm text-slate-600 dark:text-slate-300">
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
      <section id="research" className="py-20 px-4 bg-white dark:bg-slate-800">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">Research & Development</h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Exploring cutting-edge technologies and innovative solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {config.research.areas.map((area, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className={`h-5 w-5 ${getIconColorClasses(area.color)}`} />
                    {area.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <MediaDisplay
                    media={area.image}
                    className="rounded-lg"
                    aspectRatio="16/9"
                    objectFit="cover"
                  />
                  <p className="text-slate-600 dark:text-slate-300">
                    {area.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {area.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline">{tech}</Badge>
                    ))}
                  </div>
                  {area.longDescription && (
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      {area.longDescription}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {config.research.competitions.length > 0 && (
            <div className="mt-12 text-center">
              <Card className="max-w-2xl mx-auto">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">University Projects & Competitions</h3>
                  <div className="space-y-3 text-left">
                    {config.research.competitions.map((publication, index) => (
                      <div key={index} className="border-l-2 border-blue-200 pl-4">
                        <h4 className="font-medium">"{publication.title}"</h4>
                        <p className="text-sm text-slate-500">{publication.type}, {publication.venue} {publication.year}</p>
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
      <section id="events" className="py-20 px-4 bg-white dark:bg-slate-800">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">Events</h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              A showcase of Events I contributed in
            </p>
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
                  <CardTitle className="flex items-center justify-between">
                    {project.title}
                    {project.links.live && (
                      <Link href={project.links.live} target="_blank">
                        <ExternalLink className="h-4 w-4 text-slate-400 hover:text-slate-600" />
                      </Link>
                    )}
                  </CardTitle>
                  <CardDescription>
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline">{tech}</Badge>
                    ))}
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    {project.longDescription}
                  </p>
                  {project.links.github && (
                    <div className="mt-4">
                      <Link 
                        href={project.links.github} 
                        target="_blank"
                        className="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                      >
                        View on GitHub →
                      </Link>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link href={config.social.github.url} target="_blank">
                <Github className="mr-2 h-4 w-4" />
                View All Projects on GitHub
              </Link>
            </Button>
          </div>
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
              <p className="text-slate-600 dark:text-slate-300">{config.personal.title} & Tech Enthusiast</p>
            </div>
            
            <div className="flex space-x-6">
              <Link href={config.social.github.url} target="_blank" className="text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors">
                <Github className="h-6 w-6" />
              </Link>
              <Link href={config.social.linkedin.url} target="_blank" className="text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors">
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link href={`mailto:${config.social.email}`} className="text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors">
                <Mail className="h-6 w-6" />
              </Link>
            </div>
          </div>
          
          <Separator className="my-8" />
          
          <div className="text-center text-slate-600 dark:text-slate-300">
            <p>&copy; {new Date().getFullYear()} {config.personal.name}. {config.footer.copyright}</p>
            {config.footer.builtWith && <p className="mt-2">{config.footer.builtWith}</p>}
          </div>
        </div>
      </footer>
    </div>
  )
}
