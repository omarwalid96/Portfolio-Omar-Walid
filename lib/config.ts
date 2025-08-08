import fs from 'fs'
import path from 'path'
import yaml from 'js-yaml'

export interface PersonalInfo {
  name: string
  title: string
  tagline: string
  passion: string
  location: string
  email: string
  profileImage: {
    url: string
    fallback: string
    alt: string
  }
}

export interface SocialLinks {
  github: {
    url: string
    username: string
  }
  linkedin: {
    url: string
    username: string
  }
  email: string
  website: string
}

export interface Achievement {
  title: string
  description: string
  color: string
}

export interface AboutInfo {
  description: string
  achievements: Achievement[]
  skills: string[]
  workspace: {
    image: {
      url: string
      fallback: string
      alt: string
    }
  }
  quote: {
    text: string
    author: string
  }
}

export interface Job {
  title: string
  company: string
  location: string
  startDate: string
  endDate: string
  current: boolean
  color: string
  responsibilities: string[]
}

export interface ExperienceInfo {
  jobs: Job[]
}

export interface Project {
  title: string
  description: string
  longDescription: string
  image: {
    url: string
    fallback: string
    alt: string
  }
  technologies: string[]
  links: {
    github?: string
    live?: string
    npm?: string
  }
}

export interface CurrentProject extends Project {
  progress?: number
  color: string
  stats?: {
    stars: string
    forks: string
    downloads: string
  }
}

export interface ProjectsInfo {
  featured: Project[]
}

export interface EventsInfo {
  featured: Project[]
}

export interface CurrentWorkInfo {
  projects: CurrentProject[]
}

export interface ResearchArea {
  title: string
  description: string
  image: {
    url: string
    fallback: string
    alt: string
  }
  technologies: string[]
  color: string
}

export interface Competitions {
  title: string
  venue: string
  year: string
  type: string
}

export interface ResearchInfo {
  areas: ResearchArea[]
  competitions: Competitions[]
}

export interface FooterInfo {
  copyright: string
  builtWith: string
}

export interface PortfolioConfig {
  personal: PersonalInfo
  social: SocialLinks
  about: AboutInfo
  experience: ExperienceInfo
  projects: ProjectsInfo
  currentWork: CurrentWorkInfo
  eventsWork: EventsInfo
  research: ResearchInfo
  footer: FooterInfo
}

let cachedConfig: PortfolioConfig | null = null

export function getPortfolioConfig(): PortfolioConfig {
  if (cachedConfig) {
    return cachedConfig
  }

  try {
    const configPath = path.join(process.cwd(), 'config', 'portfolio.yaml')

  try {
    if (process.env.NODE_ENV === 'development') {
      const y = fs.readFileSync(configPath, 'utf8')
      return (yaml.load(y) as PortfolioConfig) ?? getDefaultConfig()
    }

    // prod: cache
    if (!cachedConfig) {
      const y = fs.readFileSync(configPath, 'utf8')
      cachedConfig = (yaml.load(y) as PortfolioConfig) ?? getDefaultConfig()
    }
    return cachedConfig
  } catch (e) {
    console.error('Error loading portfolio config:', e)
    return getDefaultConfig()
  }
  } catch (error) {
    console.error('Error loading portfolio config:', error)
    // Return default config if file doesn't exist
    return getDefaultConfig()
  }
}

function getDefaultConfig(): PortfolioConfig {
  return {
    personal: {
      name: "Your Name",
      title: "Full Stack Developer",
      tagline: "Creative Developer",
      passion: "Passionate about creating innovative solutions and bringing ideas to life through code and design.",
      location: "San Francisco, CA",
      email: "your.email@example.com",
      profileImage: {
        url: "",
        fallback: "/professional-headshot.png",
        alt: "Profile Picture"
      }
    },
    social: {
      github: {
        url: "https://github.com/yourusername",
        username: "yourusername"
      },
      linkedin: {
        url: "https://linkedin.com/in/yourusername",
        username: "yourusername"
      },
      email: "your.email@example.com",
      website: "https://yourwebsite.com"
    },
    about: {
      description: "A passionate developer with expertise in modern technologies and a track record of delivering innovative solutions.",
      achievements: [
        {
          title: "Led Development Team",
          description: "Successfully managed a team of 5 developers on a major project",
          color: "blue"
        }
      ],
      skills: ["React", "Next.js", "TypeScript", "Node.js"],
      workspace: {
        image: {
          url: "",
          fallback: "/developer-workspace.png",
          alt: "Workspace"
        }
      },
      quote: {
        text: "Code is like humor. When you have to explain it, it's bad.",
        author: "Cory House"
      }
    },
    experience: {
      jobs: []
    },
    projects: {
      featured: []
    },
    currentWork: {
      projects: []
    },
    research: {
      areas: [],
      competitions: []
    },
    eventsWork: {
      featured: []
    },
    footer: {
      copyright: "All rights reserved.",
      builtWith: "Built with Next.js, Tailwind CSS, and deployed on GitHub Pages"
    }
  }
}

// Helper function to get image source (URL or fallback)
export function getImageSrc(image: { url: string; fallback: string }): string {
  return image.url && image.url.trim() !== '' ? image.url : image.fallback
}
