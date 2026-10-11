import { loadPortfolioConfig } from "@/lib/config-server"

const plain = (s: string) => s.replace(/\*\*/g, "").trim()

// Person + WebSite + ProfilePage graph, built from portfolio.yaml so it never drifts from the page.
export function JsonLd() {
    const c: any = loadPortfolioConfig()
    const site: string = c.social.website
    const skills = c.about.skills
    const knowsAbout: string[] = Array.isArray(skills) ? skills : Object.values(skills).flatMap((s: any) => s.items)
    const [city, country] = String(c.personal.location).split(",").map((s: string) => s.trim())
    const employers = [...new Set<string>(c.experience.jobs.filter((j: any) => j.current).map((j: any) => j.company))]

    const graph = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Person",
                "@id": `${site}#person`,
                name: c.personal.name,
                jobTitle: c.personal.title,
                description: plain(c.about.description),
                url: site,
                image: c.personal.profileImage.url.trim(),
                email: `mailto:${c.social.email}`,
                sameAs: [c.social.github.url, c.social.linkedin.url],
                knowsAbout,
                address: { "@type": "PostalAddress", addressLocality: city, addressCountry: country },
                worksFor: employers.map((name) => ({ "@type": "Organization", name })),
            },
            {
                "@type": "WebSite",
                "@id": `${site}#website`,
                url: site,
                name: `${c.personal.name} · ${c.personal.title}`,
                inLanguage: "en",
                publisher: { "@id": `${site}#person` },
            },
            {
                "@type": "ProfilePage",
                "@id": `${site}#profilepage`,
                url: site,
                name: `${c.personal.name} · ${c.personal.title}`,
                isPartOf: { "@id": `${site}#website` },
                mainEntity: { "@id": `${site}#person` },
                dateModified: new Date().toISOString(),
            },
        ],
    }
    // JSON.stringify output is safe inside <script> except for "</": escape "<".
    return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, "\\u003c") }} />
}
