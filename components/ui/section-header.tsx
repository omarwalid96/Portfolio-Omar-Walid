interface SectionHeaderProps {
    index: string
    label: string
    title: React.ReactNode
    subtitle?: React.ReactNode
}

// Centred section header with a small numbered kicker in the hero's gradient,
// so the hero's colours carry down the page.
export function SectionHeader({ index, label, title, subtitle }: SectionHeaderProps) {
    return (
        <div data-reveal="group" className="text-center mb-16">
            <p data-reveal-item data-kicker className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                <span className="tabular-nums">{index}</span> {label}
            </p>
            <h2 data-reveal-item className="[--i:1] text-4xl font-bold mb-4 text-foreground">{title}</h2>
            {subtitle && <p data-reveal-item className="[--i:2] text-xl text-muted-foreground max-w-3xl mx-auto">{subtitle}</p>}
        </div>
    )
}
