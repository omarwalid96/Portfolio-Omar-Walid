import { loadPortfolioConfig } from "@/lib/config-server"
import { Navbar } from "@/components/sections/Navbar"
import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Experience } from "@/components/sections/Experience"
import { FeaturedProjects } from "@/components/sections/FeaturedProjects"
import { CurrentWork } from "@/components/sections/CurrentWork"
import { Research } from "@/components/sections/Research"
import { Events } from "@/components/sections/Events"
import { VideosSection } from "@/components/sections/VideosSection"
import { AcademyAndStudio } from "@/components/sections/AcademyAndStudio"
import { Footer } from "@/components/sections/Footer"

export default function Portfolio() {
  const config = loadPortfolioConfig()

  return (
    <div className="min-h-screen bg-background">
      <Navbar config={config} />
      <Hero config={config} />
      <About config={config} />
      <Experience config={config} />
      <FeaturedProjects config={config} />
      <CurrentWork config={config} />
      <Research config={config} />
      <Events config={config} />
      <VideosSection config={config} />
      <AcademyAndStudio config={config} />
      <Footer config={config} />
    </div>
  )
}
