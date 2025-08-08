# Modern Portfolio Website

*Automatically synced with your [v0.dev](https://v0.dev) deployments*

[![Deployed on GitHub Pages](https://img.shields.io/badge/Deployed%20on-GitHub%20Pages-black?style=for-the-badge&logo=github)](https://omarwalid96.github.io/Portfolio-Omar-Walid/)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.dev-black?style=for-the-badge)](https://v0.dev/chat/projects/3eTIDoF7kB7)

## Overview

This repository contains a modern portfolio website built with Next.js and deployed automatically to GitHub Pages using GitHub Actions. The portfolio is fully configurable through a YAML file, making it easy to update content without touching the code.

## Live Demo

Your portfolio will be live at: **[https://omarwalid96.github.io/Portfolio-Omar-Walid/](https://omarwalid96.github.io/Portfolio-Omar-Walid/)**

## 🎯 Easy Configuration

All portfolio content is managed through the `config/portfolio.yaml` file. Simply edit this file to update:

- Personal information and contact details
- Social media links
- About section with achievements and skills
- Work experience and job roles
- Featured projects with images and links
- Current work and research areas
- Competitions and papers

### 📝 How to Update Your Portfolio

1. **Edit the configuration file**: Open `config/portfolio.yaml`
2. **Update your information**: Replace placeholder content with your real data
3. **Add media URLs**: For each media item, you can use:
   - External image URLs
   - Direct video URLs (.mp4, .webm, etc.)
   - Iframe embed URLs (Google Drive, YouTube, Vimeo)
   - Static fallback images
4. **Commit and push**: Your changes will automatically deploy

### 🖼️ Media Management (Images, Videos & Embeds)

The portfolio supports three types of media content:

#### **1. Images**
\`\`\`yaml
profileImage:
  url: "https://your-image-url.com/photo.jpg"
  fallback: "/professional-headshot.png"
  alt: "Your Name Profile Picture"
  type: "image"  # Optional
\`\`\`

#### **2. Direct Videos**
\`\`\`yaml
projectVideo:
  url: "https://your-cdn.com/demo.mp4"
  fallback: "/project-screenshot.png"  # Used as poster
  alt: "Project Demo Video"
  type: "video"  # Optional, auto-detected
\`\`\`

#### **3. Iframe Embeds (NEW!)**
\`\`\`yaml
# Google Drive Video
driveVideo:
  url: "https://drive.google.com/file/d/1WObcFWFxRXIBrCmWSTyZlbRphmPJTxaP/preview"
  fallback: "/video-thumbnail.png"
  alt: "Project Demo from Google Drive"
  type: "iframe"  # Optional, auto-detected

# YouTube Video
youtubeVideo:
  url: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  fallback: "/youtube-thumbnail.png"
  alt: "YouTube Demo Video"
  type: "iframe"

# Vimeo Video
vimeoVideo:
  url: "https://player.vimeo.com/video/123456789"
  fallback: "/vimeo-thumbnail.png"
  alt: "Vimeo Demo Video"
  type: "iframe"
\`\`\`

**Supported Iframe Platforms:**
- ✅ Google Drive (`drive.google.com`)
- ✅ YouTube (`youtube.com/embed`, `youtu.be`)
- ✅ Vimeo (`vimeo.com`, `player.vimeo.com`)
- ✅ Dailymotion
- ✅ Facebook Videos
- ✅ Instagram Posts
- ✅ TikTok
- ✅ Any platform that provides iframe embed codes

**Auto-Detection Features:**
- Automatically detects media type based on URL patterns
- Converts Google Drive share links to embed links
- Graceful fallback to images if video/iframe fails
- Responsive aspect ratios maintained across all media types

**Media Features:**
- Consistent aspect ratios (16:9, 1:1, 3:4, custom)
- Proper object-fit handling (cover, contain, fill)
- Loading states and error handling
- Smooth hover transitions
- Mobile-optimized playback

## 🚀 Deployment

This project uses GitHub Actions for automatic deployment to GitHub Pages. Every push to the `main` branch triggers a new deployment.

### Setup Instructions

1. Make sure GitHub Pages is enabled in your repository settings
2. Set the source to "GitHub Actions" in Pages settings  
3. Push changes to the `main` branch to trigger deployment

## 🛠️ Local Development

\`\`\`bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
\`\`\`

## 📁 Project Structure

\`\`\`
├── config/
│   └── portfolio.yaml          # Main configuration file
├── app/
│   ├── page.tsx               # Main portfolio page
│   └── layout.tsx             # App layout
├── lib/
│   └── config.ts              # Configuration loader
├── components/
│   └── ui/                    # UI components
└── public/                    # Static assets
\`\`\`

## ✨ Features

- 🎨 Modern, responsive design
- 🌙 Dark/Light mode support
- 📱 Mobile-first approach
- ⚡ Fast loading with Next.js
- 🚀 Automatic deployment to GitHub Pages
- 🎯 SEO optimized
- 📝 Easy content management via YAML
- 🖼️ Flexible media handling (Images, Videos, Iframes)
- 🔧 Type-safe configuration
- 📺 Iframe embed support for all major platforms

## 🎨 Customization

### Colors
The portfolio uses a predefined color system. Available colors for projects and sections:
- `blue` - Blue theme
- `purple` - Purple theme  
- `teal` - Teal theme
- `green` - Green theme
- `yellow` - Yellow theme
- `red` - Red theme

### Adding New Sections
To add new sections, update both:
1. `config/portfolio.yaml` - Add your content
2. `lib/config.ts` - Add TypeScript interfaces
3. `app/page.tsx` - Add the UI components

## 📞 Support

If you need help customizing your portfolio:
1. Check the `config/portfolio.yaml` file for examples
2. Review the TypeScript interfaces in `lib/config.ts`
3. Open an issue on GitHub for technical problems

## Build your app

Continue building your app on: **[https://v0.dev/chat/projects/3eTIDoF7kB7](https://v0.dev/chat/projects/3eTIDoF7kB7)**

## How It Works

1. Edit `config/portfolio.yaml` with your information
2. Add images, videos, or iframe embeds using the flexible media system
3. Push changes to trigger automatic deployment
4. Your portfolio updates automatically on GitHub Pages
5. All media loads with proper fallbacks for maximum reliability
