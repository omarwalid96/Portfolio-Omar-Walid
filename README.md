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
- Competiotions and papers

### 📝 How to Update Your Portfolio

1. **Edit the configuration file**: Open `config/portfolio.yaml`
2. **Update your information**: Replace placeholder content with your real data
3. **Add image URLs**: For each image, you can either:
   - Add a URL to the `url` field for external images
   - Leave `url` empty to use the static fallback image
4. **Commit and push**: Your changes will automatically deploy

### 🖼️ Image Management

The portfolio supports both external URLs and static images:

\`\`\`yaml
profileImage:
  url: "https://your-image-url.com/photo.jpg"  # External URL
  fallback: "/professional-headshot.png"        # Static fallback
  alt: "Your Name Profile Picture"
\`\`\`

- If `url` is provided and valid, it will be used
- If `url` is empty or fails to load, the `fallback` static image is used
- This ensures your portfolio always displays properly

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
- 🖼️ Flexible image handling (URLs + fallbacks)
- 🔧 Type-safe configuration

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
2. Push changes to trigger automatic deployment
3. Your portfolio updates automatically on GitHub Pages
4. Images load from URLs with static fallbacks for reliability
