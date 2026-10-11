export const formatCategoryName = (category: string) => {
    const nameMap: Record<string, string> = {
        programming: "Programming Languages",
        robotics: "Robotics & Embedded Systems",
        devops: "DevOps & Infrastructure",
        perception_navigation: "Perception & Navigation",
        ai_ml: "AI & Machine Learning",
        databases: "Databases"
    }
    return nameMap[category] || category.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
}

// "Spectrum" colour language: only the hero gradient's three stops, each meaning a kind of work.
//   blue   = autonomy (navigation, SLAM, perception, fleets)
//   purple = learning (imitation learning, data pipelines, AI/LLM)
//   teal   = hardware (embedded, control, manipulation)
// Class strings stay literal so Tailwind's scanner sees them (lib/ is in tailwind content).
const SPECTRUM = {
    blue: {
        fill: "bg-blue-600 dark:bg-blue-500",
        borderL: "border-l-blue-600",
        topRule: "before:bg-blue-600 [--spectrum:37_99_235]",
        text: "text-blue-600 dark:text-blue-400",
        cardBorder: "border-blue-200 dark:border-blue-800",
        accentBg: "bg-blue-50 dark:bg-blue-900/30",
        accentText: "text-blue-700 dark:text-blue-300",
        hex: "#2563eb",
    },
    purple: {
        fill: "bg-purple-600 dark:bg-purple-500",
        borderL: "border-l-purple-600",
        topRule: "before:bg-purple-600 [--spectrum:147_51_234]",
        text: "text-purple-600 dark:text-purple-400",
        cardBorder: "border-purple-200 dark:border-purple-800",
        accentBg: "bg-purple-50 dark:bg-purple-900/30",
        accentText: "text-purple-700 dark:text-purple-300",
        hex: "#9333ea",
    },
    teal: {
        fill: "bg-teal-600 dark:bg-teal-500",
        borderL: "border-l-teal-600",
        topRule: "before:bg-teal-600 [--spectrum:13_148_136]",
        text: "text-teal-600 dark:text-teal-400",
        cardBorder: "border-teal-200 dark:border-teal-800",
        accentBg: "bg-teal-50 dark:bg-teal-900/30",
        accentText: "text-teal-700 dark:text-teal-300",
        hex: "#0d9488",
    },
} as const

type Spectrum = keyof typeof SPECTRUM

// Unknown colours fail the build instead of silently falling back (the old "indigo" bug).
export function spectrum(color: string) {
    const entry = SPECTRUM[color as Spectrum]
    if (!entry) throw new Error(`portfolio.yaml color "${color}" is not one of: ${Object.keys(SPECTRUM).join(", ")}`)
    return entry
}

export const getColorClasses = (color: string) => spectrum(color).fill
export const getBorderColorClasses = (color: string) => spectrum(color).borderL
export const getIconColorClasses = (color: string) => spectrum(color).text
export const getCardBorderClasses = (color: string) => spectrum(color).cardBorder
export const getBgColorClasses = (color: string) => spectrum(color).fill
export const getAccentBgColorClasses = (color: string) => spectrum(color).accentBg
export const getAccentTextColorClasses = (color: string) => spectrum(color).accentText
export const getIndicatorColorClasses = (color: string) => spectrum(color).fill
export const getProgressBarClasses = (color: string) => spectrum(color).fill

// 2px coloured line along a card's top edge; the card needs `relative overflow-hidden`.
export const getTopRuleClasses = (color: string) =>
    `relative overflow-hidden before:absolute before:inset-x-0 before:top-0 before:z-10 before:h-0.5 ${spectrum(color).topRule}`

// UI Control Colors for Carousel, Modals, etc.
export const getControlBgClasses = () => {
    return "bg-black/70 hover:bg-black/85 dark:bg-white/25 dark:hover:bg-white/35 backdrop-blur-sm"
}

export const getControlTextClasses = () => {
    return "text-white dark:text-gray-900"
}

export const getIndicatorClasses = (active: boolean) => {
    if (active) {
        return "bg-white dark:bg-gray-900 w-8"
    }
    return "bg-white/60 hover:bg-white/80 dark:bg-gray-900/60 dark:hover:bg-gray-900/80"
}

export const getOverlayBgClasses = () => {
    return "bg-black/70 dark:bg-white/25 backdrop-blur-sm"
}

export const getDurationBadgeClasses = () => {
    return "bg-black/70 text-white dark:bg-black/80 dark:text-white"
}
