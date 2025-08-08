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
  profileImage: MediaItem
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
    image: MediaItem
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
  image: MediaItem
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
  image: MediaItem
  technologies: string[]
  color: string
  longDescription?: string
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
  builtWith?: string
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

export interface MediaItem {
  url: string
  fallback: string
  alt: string
  type?: 'image' | 'video' | 'iframe' // Add iframe type
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
        alt: "Profile Picture",
        type: "image"
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
          alt: "Workspace",
          type: "image"
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

// Helper function to determine if media is iframe
export function isIframe(media: MediaItem): boolean {
  if (media.type === 'iframe') return true
  if (media.type === 'image' || media.type === 'video') return false
  
  // Auto-detect based on URL patterns
  const url = media.url || media.fallback
  const iframePatterns = [
    'drive.google.com',
    'youtube.com/embed',
    'youtu.be',
    'vimeo.com',
    'player.vimeo.com',
    'dailymotion.com',
    'facebook.com/plugins/video',
    'instagram.com/p/',
    'tiktok.com'
  ]
  return iframePatterns.some(pattern => url.toLowerCase().includes(pattern))
}

// Helper function to determine if media is video
export function isVideo(media: MediaItem): boolean {
  if (media.type === 'video') return true
  if (media.type === 'image' || media.type === 'iframe') return false
  
  // Auto-detect based on URL extension
  const url = media.url || media.fallback
  const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov', '.avi', '.mkv', '.flv']
  return videoExtensions.some(ext => url.toLowerCase().includes(ext))
}

// Helper function to get media source (URL or fallback)
export function getMediaSrc(media: MediaItem): string {
  return media.url && media.url.trim() !== '' ? media.url : media.fallback
}

// Keep the old getImageSrc function for backward compatibility
export function getImageSrc(image: { url: string; fallback: string }): string {
  return image.url && image.url.trim() !== '' ? image.url : image.fallback
}

// Helper function to convert Google Drive share links to embed links
export function convertGoogleDriveUrl(url: string): string {
  // Convert Google Drive share URLs to embed URLs
  const driveSharePattern = /https:\/\/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)\/view/
  const match = url.match(driveSharePattern)
  
  if (match) {
    const fileId = match[1]
    return `https://drive.google.com/file/d/${fileId}/preview`
  }
  
  return url
}

// Helper function to get proper iframe src
export function getIframeSrc(media: MediaItem): string {
  const url = getMediaSrc(media)
  
  // Convert Google Drive URLs if needed
  if (url.includes('drive.google.com')) {
    return convertGoogleDriveUrl(url)
  }
  
  return url
}
