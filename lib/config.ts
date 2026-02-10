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

export interface SkillCategory {
  [category: string]: string[]
}

export interface AboutInfo {
  description: string
  achievements: Achievement[]
  skills: string[] | SkillCategory  // Support both old (array) and new (categorized) format
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
  image?: MediaItem  // Single image (deprecated, use images array)
  images?: MediaItem[]  // Multiple images/videos
  technologies: string[]
  links: {
    github?: string
    live?: string
    npm?: string
  }
}

export interface CurrentProject extends Project {
  image?: MediaItem  // Single image (backward compatible)
  images?: MediaItem[]  // Multiple images/videos
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

export interface VideoItem {
  title: string
  description: string
  duration: string
  thumbnail: MediaItem
  video: MediaItem
  technologies: string[]
  date: string
}

export interface VideoCategory {
  name: string
  description: string
  color: string
  videos: VideoItem[]
}

export interface VideosInfo {
  categories: VideoCategory[]
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
  videos: VideosInfo
  footer: FooterInfo
}

export interface MediaItem {
  url: string
  fallback: string
  alt: string
  type?: 'image' | 'video' | 'iframe'
  aspectRatio?: string  // e.g., "9/16" for portrait, "16/9" for landscape
}

// Helper function to determine if media is iframe
export function isIframe(media: { url: string; fallback: string; type?: string }): boolean {
  if (media.type === 'iframe') return true
  if (media.type === 'image' || media.type === 'video') return false
  
  // Auto-detect based on URL patterns
  const url = media.url || media.fallback
  const iframePatterns = [
    'drive.google.com',
    'player.cloudinary.com',
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
export function isVideo(media: { url: string; fallback: string; type?: string }): boolean {
  if (media.type === 'video') return true
  if (media.type === 'image' || media.type === 'iframe') return false
  
  // Auto-detect based on URL extension
  const url = media.url || media.fallback
  const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov', '.avi', '.mkv', '.flv']
  return videoExtensions.some(ext => url.toLowerCase().includes(ext))
}

// Helper function to get media source (URL or fallback)
export function getMediaSrc(media: { url: string; fallback: string }): string {
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
export function getIframeSrc(media: { url: string; fallback: string }): string {
  const url = getMediaSrc(media)
  
  // Convert Google Drive URLs if needed
  if (url.includes('drive.google.com')) {
    return convertGoogleDriveUrl(url)
  }
  
  return url
}
