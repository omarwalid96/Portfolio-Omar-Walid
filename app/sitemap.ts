import type { MetadataRoute } from "next"

// Static export needs force-static. Submit https://omarwalid96.github.io/Portfolio-Omar-Walid/sitemap.xml
// in Search Console: robots.txt under a GitHub Pages subpath is never read, so it cannot advertise this.
export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
    return [{ url: "https://omarwalid96.github.io/Portfolio-Omar-Walid/", lastModified: new Date(), changeFrequency: "monthly", priority: 1 }]
}
