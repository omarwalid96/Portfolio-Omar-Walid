import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Github, Linkedin, Mail, ExternalLink, Calendar, MapPin, Award, Briefcase, Code, Lightbulb } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Your Name
            </h1>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">Home</a>
              <a href="#about" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">About</a>
              <a href="#experience" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">Experience</a>
              <a href="#projects" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">Projects</a>
              <a href="#current" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">Current Work</a>
              <a href="#research" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">R&D</a>
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
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                    Creative
                  </span>
                  <br />
                  <span className="text-slate-900 dark:text-white">Developer</span>
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-300 max-w-lg">
                  Passionate about creating innovative solutions and bringing ideas to life through code and design.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  <Mail className="mr-2 h-4 w-4" />
                  Get In Touch
                </Button>
                <Button variant="outline" size="lg">
                  <Github className="mr-2 h-4 w-4" />
                  View GitHub
                </Button>
              </div>

              <div className="flex space-x-6">
                <Link href="#" className="text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors">
                  <Github className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors">
                  <Linkedin className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors">
                  <Mail className="h-6 w-6" />
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                <Image
                  src="/professional-headshot.png"
                  alt="Profile Picture"
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
              A passionate developer with expertise in modern technologies and a track record of delivering innovative solutions.
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
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Led Development Team</h4>
                      <p className="text-slate-600 dark:text-slate-300">Successfully managed a team of 5 developers on a major project</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Performance Optimization</h4>
                      <p className="text-slate-600 dark:text-slate-300">Improved application performance by 40% through code optimization</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Innovation Award</h4>
                      <p className="text-slate-600 dark:text-slate-300">Received company innovation award for developing new features</p>
                    </div>
                  </div>
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
                    <div>
                      <h4 className="font-semibold">Senior Full Stack Developer</h4>
                      <p className="text-sm text-slate-500">2022 - Present</p>
                      <p className="text-slate-600 dark:text-slate-300">Leading development of scalable web applications</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Frontend Developer</h4>
                      <p className="text-sm text-slate-500">2020 - 2022</p>
                      <p className="text-slate-600 dark:text-slate-300">Specialized in React and modern frontend technologies</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Junior Developer</h4>
                      <p className="text-sm text-slate-500">2019 - 2020</p>
                      <p className="text-slate-600 dark:text-slate-300">Started career building web applications and learning best practices</p>
                    </div>
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
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">Next.js</Badge>
                    <Badge variant="secondary">TypeScript</Badge>
                    <Badge variant="secondary">Node.js</Badge>
                    <Badge variant="secondary">Python</Badge>
                    <Badge variant="secondary">AWS</Badge>
                    <Badge variant="secondary">Docker</Badge>
                    <Badge variant="secondary">PostgreSQL</Badge>
                    <Badge variant="secondary">GraphQL</Badge>
                    <Badge variant="secondary">Tailwind CSS</Badge>
                  </div>
                </CardContent>
              </Card>

              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/developer-workspace.png"
                  alt="Workspace"
                  fill
                  className="object-cover"
                />
              </div>

              <Card>
                <CardContent className="pt-6">
                  <blockquote className="text-lg italic text-slate-600 dark:text-slate-300">
                    "Code is like humor. When you have to explain it, it's bad."
                  </blockquote>
                  <p className="text-sm text-slate-500 mt-2">- Cory House</p>
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
            <Card className="border-l-4 border-l-blue-600">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">Senior Full Stack Developer</CardTitle>
                    <CardDescription className="text-lg">Tech Company Inc.</CardDescription>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-slate-500 flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      2022 - Present
                    </p>
                    <p className="text-sm text-slate-500 flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      San Francisco, CA
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                  <li>• Led a team of 5 developers in building scalable web applications</li>
                  <li>• Architected and implemented microservices using Node.js and Docker</li>
                  <li>• Improved application performance by 40% through optimization techniques</li>
                  <li>• Mentored junior developers and conducted code reviews</li>
                  <li>• Collaborated with product managers to define technical requirements</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-purple-600">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">Frontend Developer</CardTitle>
                    <CardDescription className="text-lg">Digital Solutions Ltd.</CardDescription>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-slate-500 flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      2020 - 2022
                    </p>
                    <p className="text-sm text-slate-500 flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      New York, NY
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                  <li>• Developed responsive web applications using React and TypeScript</li>
                  <li>• Implemented modern UI/UX designs with attention to accessibility</li>
                  <li>• Integrated RESTful APIs and GraphQL endpoints</li>
                  <li>• Optimized bundle sizes and improved loading times</li>
                  <li>• Participated in agile development processes and sprint planning</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-teal-600">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">Junior Developer</CardTitle>
                    <CardDescription className="text-lg">StartUp Innovations</CardDescription>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-slate-500 flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      2019 - 2020
                    </p>
                    <p className="text-sm text-slate-500 flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      Austin, TX
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                  <li>• Built web applications using HTML, CSS, JavaScript, and PHP</li>
                  <li>• Assisted in database design and implementation</li>
                  <li>• Participated in debugging and testing processes</li>
                  <li>• Learned modern development practices and version control</li>
                  <li>• Contributed to documentation and knowledge sharing</li>
                </ul>
              </CardContent>
            </Card>
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
            <Card className="group hover:shadow-xl transition-all duration-300">
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <Image
                  src="/e-commerce-web-application.png"
                  alt="E-commerce Platform"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  E-commerce Platform
                  <ExternalLink className="h-4 w-4 text-slate-400" />
                </CardTitle>
                <CardDescription>
                  Full-stack e-commerce solution with payment integration
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">Node.js</Badge>
                  <Badge variant="outline">Stripe</Badge>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Built a complete e-commerce platform with user authentication, product management, and secure payment processing.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <Image
                  src="/task-management-dashboard.png"
                  alt="Task Management App"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Task Management App
                  <ExternalLink className="h-4 w-4 text-slate-400" />
                </CardTitle>
                <CardDescription>
                  Collaborative project management tool
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Next.js</Badge>
                  <Badge variant="outline">PostgreSQL</Badge>
                  <Badge variant="outline">Prisma</Badge>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Developed a real-time collaborative task management application with team features and progress tracking.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <Image
                  src="/data-visualization-dashboard.png"
                  alt="Analytics Dashboard"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Analytics Dashboard
                  <ExternalLink className="h-4 w-4 text-slate-400" />
                </CardTitle>
                <CardDescription>
                  Real-time data visualization platform
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Vue.js</Badge>
                  <Badge variant="outline">D3.js</Badge>
                  <Badge variant="outline">Python</Badge>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Created an interactive dashboard for visualizing complex datasets with real-time updates and custom charts.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              <Github className="mr-2 h-4 w-4" />
              View All Projects on GitHub
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
            <Card className="border-2 border-blue-200 dark:border-blue-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-blue-600" />
                  AI-Powered Code Assistant
                </CardTitle>
                <CardDescription>Building an intelligent coding companion</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative h-40 rounded-lg overflow-hidden">
                  <Image
                    src="/ai-coding-assistant-interface.png"
                    alt="AI Code Assistant"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-slate-600 dark:text-slate-300">
                  Developing an AI-powered VS Code extension that helps developers write better code with intelligent suggestions and automated refactoring.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge>TypeScript</Badge>
                  <Badge>OpenAI API</Badge>
                  <Badge>VS Code API</Badge>
                </div>
                <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-3">
                  <p className="text-sm font-medium mb-1">Progress: 75%</p>
                  <div className="w-full bg-slate-200 dark:bg-slate-600 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '75%'}}></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 dark:border-purple-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-purple-600" />
                  Open Source Contribution
                </CardTitle>
                <CardDescription>Contributing to React ecosystem</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative h-40 rounded-lg overflow-hidden">
                  <Image
                    src="/open-source-repository.png"
                    alt="Open Source Project"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-slate-600 dark:text-slate-300">
                  Actively contributing to popular React libraries and maintaining my own open-source component library used by 1000+ developers.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge>React</Badge>
                  <Badge>Storybook</Badge>
                  <Badge>Jest</Badge>
                </div>
                <div className="flex justify-between text-sm text-slate-600 dark:text-slate-300">
                  <span>⭐ 2.3k stars</span>
                  <span>🍴 450 forks</span>
                  <span>📦 1.2k weekly downloads</span>
                </div>
              </CardContent>
            </Card>
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
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-yellow-600" />
                  Machine Learning Integration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative h-32 rounded-lg overflow-hidden">
                  <Image
                    src="/machine-learning-neural-network.png"
                    alt="ML Research"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-slate-600 dark:text-slate-300">
                  Researching ways to integrate machine learning models into web applications for enhanced user experiences and predictive analytics.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">TensorFlow.js</Badge>
                  <Badge variant="outline">Python</Badge>
                  <Badge variant="outline">WebGL</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-green-600" />
                  WebAssembly Performance
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative h-32 rounded-lg overflow-hidden">
                  <Image
                    src="/webassembly-performance.png"
                    alt="WebAssembly Research"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-slate-600 dark:text-slate-300">
                  Exploring WebAssembly for high-performance web applications, particularly for computational-heavy tasks and real-time processing.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Rust</Badge>
                  <Badge variant="outline">WebAssembly</Badge>
                  <Badge variant="outline">C++</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-blue-600" />
                  Blockchain Development
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative h-32 rounded-lg overflow-hidden">
                  <Image
                    src="/blockchain-smart-contracts.png"
                    alt="Blockchain Research"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-slate-600 dark:text-slate-300">
                  Developing decentralized applications and smart contracts, focusing on sustainable and scalable blockchain solutions.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Solidity</Badge>
                  <Badge variant="outline">Ethereum</Badge>
                  <Badge variant="outline">Web3.js</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-purple-600" />
                  Edge Computing
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative h-32 rounded-lg overflow-hidden">
                  <Image
                    src="/edge-computing-infrastructure.png"
                    alt="Edge Computing Research"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-slate-600 dark:text-slate-300">
                  Investigating edge computing solutions for reducing latency and improving performance in distributed web applications.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Cloudflare Workers</Badge>
                  <Badge variant="outline">Deno</Badge>
                  <Badge variant="outline">CDN</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Card className="max-w-2xl mx-auto">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Research Publications & Papers</h3>
                <div className="space-y-3 text-left">
                  <div className="border-l-2 border-blue-200 pl-4">
                    <h4 className="font-medium">"Optimizing Web Performance with Modern JavaScript Frameworks"</h4>
                    <p className="text-sm text-slate-500">Published in Web Development Journal, 2023</p>
                  </div>
                  <div className="border-l-2 border-purple-200 pl-4">
                    <h4 className="font-medium">"Machine Learning in Frontend Development: A Practical Approach"</h4>
                    <p className="text-sm text-slate-500">Conference Paper, Tech Innovation Summit 2023</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Your Name
              </h3>
              <p className="text-slate-600 dark:text-slate-300">Full Stack Developer & Tech Enthusiast</p>
            </div>
            
            <div className="flex space-x-6">
              <Link href="#" className="text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors">
                <Github className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors">
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors">
                <Mail className="h-6 w-6" />
              </Link>
            </div>
          </div>
          
          <Separator className="my-8" />
          
          <div className="text-center text-slate-600 dark:text-slate-300">
            <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
            <p className="mt-2">Built with Next.js, Tailwind CSS, and deployed on GitHub Pages</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
