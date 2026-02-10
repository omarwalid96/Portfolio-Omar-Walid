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

export const getColorClasses = (color: string) => {
    const colorMap: Record<string, string> = {
        blue: "bg-blue-600 dark:bg-blue-500",
        purple: "bg-purple-600 dark:bg-purple-500",
        teal: "bg-teal-600 dark:bg-teal-500",
        green: "bg-green-600 dark:bg-green-500",
        yellow: "bg-yellow-600 dark:bg-yellow-500",
        red: "bg-red-600 dark:bg-red-500",
        orange: "bg-orange-600 dark:bg-orange-500",
    }
    return colorMap[color] || "bg-blue-600 dark:bg-blue-500"
}

export const getBorderColorClasses = (color: string) => {
    const colorMap: Record<string, string> = {
        blue: "border-l-blue-600",
        purple: "border-l-purple-600",
        teal: "border-l-teal-600",
        green: "border-l-green-600",
        yellow: "border-l-yellow-600",
        red: "border-l-red-600",
        orange: "border-l-orange-600",
    }
    return colorMap[color] || "border-l-blue-600"
}

export const getIconColorClasses = (color: string) => {
    const colorMap: Record<string, string> = {
        blue: "text-blue-600 dark:text-blue-400",
        purple: "text-purple-600 dark:text-purple-400",
        teal: "text-teal-600 dark:text-teal-400",
        green: "text-green-600 dark:text-green-400",
        yellow: "text-yellow-600 dark:text-yellow-400",
        red: "text-red-600 dark:text-red-400",
        orange: "text-orange-600 dark:text-orange-400",
    }
    return colorMap[color] || "text-blue-600 dark:text-blue-400"
}

export const getCardBorderClasses = (color: string) => {
    const map: Record<string, string> = {
        blue: "border-blue-200 dark:border-blue-800",
        purple: "border-purple-200 dark:border-purple-800",
        teal: "border-teal-200 dark:border-teal-800",
        green: "border-green-200 dark:border-green-800",
        yellow: "border-yellow-200 dark:border-yellow-800",
        red: "border-red-200 dark:border-red-800",
        orange: "border-orange-200 dark:border-orange-800",
    }
    return map[color] || "border-blue-200 dark:border-blue-800"
}

export const getBgColorClasses = (color: string) => {
    const map: Record<string, string> = {
        blue: "bg-blue-600 dark:bg-blue-500",
        purple: "bg-purple-600 dark:bg-purple-500",
        teal: "bg-teal-600 dark:bg-teal-500",
        green: "bg-green-600 dark:bg-green-500",
        yellow: "bg-yellow-500 dark:bg-yellow-400",
        red: "bg-red-600 dark:bg-red-500",
        orange: "bg-orange-500 dark:bg-orange-400",
    }
    return map[color] || "bg-blue-600"
}

export const getAccentBgColorClasses = (color: string) => {
    const map: Record<string, string> = {
        blue: "bg-blue-100 dark:bg-blue-900/30",
        purple: "bg-purple-100 dark:bg-purple-900/30",
        teal: "bg-teal-100 dark:bg-teal-900/30",
        green: "bg-green-100 dark:bg-green-900/30",
        yellow: "bg-yellow-100 dark:bg-yellow-900/30",
        red: "bg-red-100 dark:bg-red-900/30",
        orange: "bg-orange-100 dark:bg-orange-900/30",
    }
    return map[color] || "bg-blue-100 dark:bg-blue-900/30"
}

export const getAccentTextColorClasses = (color: string) => {
    const map: Record<string, string> = {
        blue: "text-blue-700 dark:text-blue-300",
        purple: "text-purple-700 dark:text-purple-300",
        teal: "text-teal-700 dark:text-teal-300",
        green: "text-green-700 dark:text-green-300",
        yellow: "text-yellow-700 dark:text-yellow-300",
        red: "text-red-700 dark:text-red-300",
        orange: "text-orange-700 dark:text-orange-300",
    }
    return map[color] || "text-blue-700 dark:text-blue-300"
}

export const getBadgeHoverClasses = (color: string) => {
    const map: Record<string, string> = {
        blue: "hover:bg-blue-600 hover:text-white hover:shadow-blue-200 dark:hover:shadow-blue-900/40",
        purple: "hover:bg-purple-600 hover:text-white hover:shadow-purple-200 dark:hover:shadow-purple-900/40",
        teal: "hover:bg-teal-600 hover:text-white hover:shadow-teal-200 dark:hover:shadow-teal-900/40",
        green: "hover:bg-green-600 hover:text-white hover:shadow-green-200 dark:hover:shadow-green-900/40",
        yellow: "hover:bg-yellow-500 hover:text-black hover:shadow-yellow-200 dark:hover:shadow-yellow-900/40",
        red: "hover:bg-red-600 hover:text-white hover:shadow-red-200 dark:hover:shadow-red-900/40",
        orange: "hover:bg-orange-500 hover:text-black hover:shadow-orange-200 dark:hover:shadow-orange-900/40",
    }
    return map[color] || "hover:bg-blue-600 hover:text-white"
}

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

// Vibrant colors for indicators (bullets, dots, progress bars) with glow in dark mode
export const getIndicatorColorClasses = (color: string) => {
    const colorMap: Record<string, string> = {
        blue: "bg-blue-600 dark:bg-blue-400 dark:shadow-[0_0_10px_rgba(96,165,250,0.5)]",
        purple: "bg-purple-600 dark:bg-purple-400 dark:shadow-[0_0_10px_rgba(192,132,252,0.5)]",
        teal: "bg-teal-600 dark:bg-teal-400 dark:shadow-[0_0_10px_rgba(94,234,212,0.5)]",
        green: "bg-green-600 dark:bg-green-400 dark:shadow-[0_0_10px_rgba(134,239,172,0.5)]",
        yellow: "bg-yellow-600 dark:bg-yellow-400 dark:shadow-[0_0_10px_rgba(250,204,21,0.5)]",
        red: "bg-red-600 dark:bg-red-400 dark:shadow-[0_0_10px_rgba(248,113,113,0.5)]",
        orange: "bg-orange-600 dark:bg-orange-400 dark:shadow-[0_0_10px_rgba(251,146,60,0.5)]",
    }
    return colorMap[color] || "bg-blue-600 dark:bg-blue-400 dark:shadow-[0_0_10px_rgba(96,165,250,0.5)]"
}

// Progress bar colors - brighter and more visible in dark mode
export const getProgressBarClasses = (color: string) => {
    const colorMap: Record<string, string> = {
        blue: "bg-blue-600 dark:bg-blue-400 dark:shadow-[0_0_12px_rgba(96,165,250,0.8)] dark:border dark:border-blue-300",
        purple: "bg-purple-600 dark:bg-purple-400 dark:shadow-[0_0_12px_rgba(192,132,252,0.8)] dark:border dark:border-purple-300",
        teal: "bg-teal-600 dark:bg-teal-400 dark:shadow-[0_0_12px_rgba(94,234,212,0.8)] dark:border dark:border-teal-300",
        green: "bg-green-600 dark:bg-green-400 dark:shadow-[0_0_12px_rgba(134,239,172,0.8)] dark:border dark:border-green-300",
        yellow: "bg-yellow-600 dark:bg-yellow-400 dark:shadow-[0_0_12px_rgba(250,204,21,0.8)] dark:border dark:border-yellow-300",
        red: "bg-red-600 dark:bg-red-400 dark:shadow-[0_0_12px_rgba(248,113,113,0.8)] dark:border dark:border-red-300",
        orange: "bg-orange-600 dark:bg-orange-400 dark:shadow-[0_0_12px_rgba(251,146,60,0.8)] dark:border dark:border-orange-300",
    }
    return colorMap[color] || "bg-blue-600 dark:bg-blue-400 dark:shadow-[0_0_12px_rgba(96,165,250,0.8)] dark:border dark:border-blue-300"
}
